import React from "react";

const SearchField = () => {
  return (
    <form className="w-full lg:max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <img
          src="/assets/images/icons/search.svg"
          alt="search"
          className="w-6"
        />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden sm:flex"
        placeholder="search"
      />
      <button className="text-center align-middle bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden sm:flex sm:items-center">
        Search
      </button>
    </form>
  );
};

export default SearchField;
