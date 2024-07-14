import AutoSearchContainer from "@/components/ui/Search/AutoSearchContainer";
import CarouselTemplate from "@/components/templates/CarouselTemplate";

import Search from "@/components/ui/Search/Search";
import SearchContainer from "@/components/ui/Search/SearchContainer";
import React, { FC, useEffect, useState } from "react";
import AutoSearchWrap from "@/components/ui/Search/AutoSearchWrap";
import AutoSearchData from "@/components/ui/Search/AutoSearchData";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { City, Place } from "@/types/http";
import { fetchCity } from "@/util/http";
import { dummyCities } from "@/dummyData/dummyCityData";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const SearchPage: FC = () => {
  // local 상태
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState<City[]>([]);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);

  // 추천 여행지 불러오는 쿼리
  const { data: cityData } = useQuery({
    queryKey: ["cities"],
    //FIXME: JP로 하드코딩된 값 바꾸기
    queryFn: () => fetchCity("JP"),
  });

  // 검색어 자동완성 관련 코드
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const updateData = async () => {
    const res: AxiosResponse = await fetchCity("JP");

    let b = res.data
      .filter(
        (list: City) =>
          list.cityNameTranslated.includes(keyword) === true ||
          list.cityName.toUpperCase().includes(keyword.toUpperCase()) === true
      )
      .slice(0, 10);
    // console.log(b);
    setKeyItems(b);
  };
  useEffect(() => {
    if (keyword) {
      setIsSearchMode(true);
    } else {
      setIsSearchMode(false);
    }
    const debounce = setTimeout(() => {
      if (keyword) {
        updateData();
      }
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]); //키워드가 변경되면 api를 호출

  return (
    <div className="flex flex-col items-center">
      {!isSearchMode && cityData && (
        <>
          {/* FIXME:더미데이터임 */}
          <div className="flex flex-col items-center mt-10 gap-10">
            <div className="w-full mx-auto md:text-xl">
              <p>⛱️ 여름철 인기 여행지</p>

              <CarouselTemplate data={dummyCities} />
            </div>
            {/* FIXME:그냥 전체 도시데이터임 */}
            <div className="w-full mx-auto md:text-xl">
              <p>🔥 요즘 뜨는 핫플레이스</p>

              <CarouselTemplate data={cityData.data} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
