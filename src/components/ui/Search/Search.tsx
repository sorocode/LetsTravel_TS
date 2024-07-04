import React, { FC } from "react";
import { Button } from "@/components/ui/button";
interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <input
        type="search"
        name="search"
        id="search"
        className="w-3/4 h-12 px-4 rounded-lg"
      />

      <Button>검색</Button>
    </div>
  );
};

export default Search;
