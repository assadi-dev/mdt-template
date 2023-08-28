import React from "react";
import { IconInput, SearchSection } from "./DataTable.styled";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";

const SearchInput = ({ onSearchInput, ...props }) => {
  const searcInputRef = useRef(null);
  const handleSearchInput = (e) => {
    const value = e.target.value;
    if (!onSearchInput) return;
    onSearchInput(value);
  };

  return (
    <SearchSection {...props}>
      <IconInput>
        <BiSearch />
      </IconInput>
      <input
        type="search"
        name="search"
        id="search"
        ref={searcInputRef}
        onChange={handleSearchInput}
        placeholder={props.placeholder}
      />
    </SearchSection>
  );
};

export default SearchInput;
