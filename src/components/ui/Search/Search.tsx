import React, { FC } from "react";
import { Button } from "@/components/ui/button";
interface SearchProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <form className="flex justify-center items-center gap-4">
      <input
        type="search"
        name="search"
        id="search"
        className="w-3/4 h-12 px-4 rounded-lg"
        onChange={onChange}
        value={value}
      />

      <Button>검색</Button>
    </form>
  );
};

export default Search;
