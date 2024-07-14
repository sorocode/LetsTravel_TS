import { City } from "@/types/http";
import { fetchCity } from "@/util/http";
import { AxiosPromise, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useSearchCity = (
  fetchFn: (fnParam: string) => AxiosPromise,
  fnParam: string
) => {
  // local 상태
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState<City[]>([]);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  // 검색어 자동완성 관련 코드
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const updateData = async () => {
    const res: AxiosResponse = await fetchFn(fnParam);

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
  return {
    keyword,
    setKeyword,
    keyItems,
    isSearchMode,
    onChangeData,
  };
};

export default useSearchCity;
