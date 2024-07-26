import React, { FC } from "react";
interface SearchProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <form className="flex justify-center items-center pt-1">
      <input
        type="search"
        name="search"
        id="search"
        className="h-9 md:w-96 px-4 rounded-lg border-[0.4px] border-gray-300"
        onChange={onChange}
        value={value}
        placeholder="어디로 떠날까요?"
      />
      {/* <SearchIcon /> */}
      {/* <Button>검색</Button> */}
    </form>
  );
};

export default Search;
