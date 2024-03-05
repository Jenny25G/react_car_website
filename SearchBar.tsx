"use client";
import React from "react";
import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="SearchBar" onSubmit={handleSearch}>
      <div className="SearchBar__item"></div>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManuFacturer={setManufacturer}
      />
    </form>
  );
};

export default SearchBar;
