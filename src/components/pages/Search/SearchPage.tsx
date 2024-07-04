import Search from "@/components/ui/Search/Search";
import SearchContainer from "@/components/ui/Search/SearchContainer";
import React, { FC } from "react";

const SearchPage: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <SearchContainer>
        <Search />
      </SearchContainer>
    </div>
  );
};

export default SearchPage;
