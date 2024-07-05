import AutoSearchContainer from "@/components/ui/Search/AutoSearchContainer";
import CarouselTemplate from "@/components/templates/CarouselTemplate";

import Search from "@/components/ui/Search/Search";
import SearchContainer from "@/components/ui/Search/SearchContainer";
import React, { FC, useEffect, useState } from "react";
import AutoSearchWrap from "@/components/ui/Search/AutoSearchWrap";
import AutoSearchData from "@/components/ui/Search/AutoSearchData";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { Place } from "@/types/httpTypes";
import { fetchPlace } from "@/util/http";

const SearchPage: FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState<Place[]>([]);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const updateData = async () => {
    const res = await fetchPlace(39, 52, "JP");
    let b = res
      .filter((list: Place) => list.displayName.includes(keyword) === true)
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
      <SearchContainer>
        <Search value={keyword} onChange={onChangeData} />
        <div>
          {keyItems.length > 0 && keyword && (
            <AutoSearchContainer>
              <AutoSearchWrap>
                {keyItems.map((search, idx) => (
                  <AutoSearchData
                    key={search.placeId}
                    onClick={() => {
                      setKeyword(search.displayName);
                    }}
                  >
                    <div className="flex justify-between px-2">
                      <span>{search.displayName}</span>
                      <NorthWestIcon />
                    </div>
                  </AutoSearchData>
                ))}
              </AutoSearchWrap>
            </AutoSearchContainer>
          )}
        </div>
      </SearchContainer>
      {!isSearchMode && (
        <>
          <div className="flex flex-col items-center mt-10 gap-6">
            <div className="w-full mx-auto md:text-xl">
              <p>⛱️ 여름철 인기 여행지</p>

              <CarouselTemplate />
            </div>
            <div className="w-full mx-auto md:text-xl">
              <p>🔥 요즘 뜨는 핫플레이스</p>

              <CarouselTemplate />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
