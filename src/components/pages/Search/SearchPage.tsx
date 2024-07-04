import AutoSearchContainer from "@/components/ui/Search/AutoSearchContainer";
import Search from "@/components/ui/Search/Search";
import SearchContainer from "@/components/ui/Search/SearchContainer";
import React, { FC, useEffect, useState } from "react";
import AutoSearchWrap from "@/components/ui/Search/AutoSearchWrap";
import AutoSearchData from "@/components/ui/Search/AutoSearchData";
import NorthWestIcon from "@mui/icons-material/NorthWest";

interface autoDatas {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}
const SearchPage: FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  // FIXME:검색어 자동완성 테스트용으로 작성한 open api이므로 추후에 코드 변경할 것
  const fetchData = async () => {
    return fetch(
      `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`
    )
      .then((res) => res.json())
      .then((data) => data.slice(0, 100));
  };
  interface ICity {
    includes(data: string): boolean;
    city?: any;
  }
  const updateData = async () => {
    const res = await fetchData();
    let b = res
      .filter((list: ICity) => list.city.includes(keyword) === true)
      .slice(0, 10);
    // console.log(b);
    setKeyItems(b);
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
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
                    key={search.city}
                    onClick={() => {
                      setKeyword(search.city);
                    }}
                  >
                    <div className="flex justify-between px-2">
                      <a href="#">{search.city}</a>
                      <NorthWestIcon />
                    </div>
                  </AutoSearchData>
                ))}
              </AutoSearchWrap>
            </AutoSearchContainer>
          )}
        </div>
      </SearchContainer>
    </div>
  );
};

export default SearchPage;
