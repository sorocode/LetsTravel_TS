import Search from "@/pages/Search/Search/Search";
import { fetchCity } from "@/util/http";

import { ChevronLeft, MapIcon, Menu } from "lucide-react";

import SearchContainer from "./SearchContainer";
import AutoSearchContainer from "./AutoSearchContainer";
import AutoSearchWrap from "./AutoSearchWrap";
import AutoSearchData from "./AutoSearchData";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import useSearchCity from "@/hooks/useSearchCity";
import { Link } from "react-router-dom";
const Header = () => {
  const { keyword, keyItems, setKeyword, onChangeData } = useSearchCity(
    fetchCity,
    "JP"
  );
  return (
    <div className="flex items-center justify-between py-2">
      <Link to="..">
        <ChevronLeft />
      </Link>
      <SearchContainer>
        <Search value={keyword} onChange={onChangeData} />
        <div>
          {keyItems.length > 0 && keyword && (
            <AutoSearchContainer>
              <AutoSearchWrap>
                {keyItems.map((search, idx) => (
                  <AutoSearchData
                    key={search.id}
                    onClick={() => {
                      setKeyword(search.cityNameTranslated);
                    }}
                  >
                    <div className="flex justify-between px-2">
                      <span>{search.cityNameTranslated}</span>
                      <NorthWestIcon />
                    </div>
                  </AutoSearchData>
                ))}
              </AutoSearchWrap>
            </AutoSearchContainer>
          )}
        </div>
      </SearchContainer>
      <div className="flex items-center justify-center gap-2">
        <Link to="map">
          <MapIcon />
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
