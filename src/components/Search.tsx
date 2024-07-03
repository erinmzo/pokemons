"use client";

import { useSearchStore } from "@/store/searchValue.store";
import { FormEvent, useState } from "react";

function Search() {
  const [value, setValue] = useState("");
  const saveSearchValue = useSearchStore((state) => state.saveSearchValue);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveSearchValue(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="border border-white bg-black rounded py-2 px-4"
      />
      <button className="border border-white py-2 px-4 rounded ml-4">검색</button>
    </form>
  );
}

export default Search;
