import React from "react";

function SearchInput() {
  return (
    <input
      placeholder="search order"
      className="px-4 py-2 text-sm transition-all duration-300 bg-yellow-100 rounded-full placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 outline-none"
    />
  );
}

export default SearchInput;
