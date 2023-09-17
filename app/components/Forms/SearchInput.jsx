import React from "react";

import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import { IconInput, SearchInputContainer } from "./FormView.styled";

const SearchInput = ({ onSearchInput, ...props }) => {
  const searcInputRef = useRef(null);
  const handleSearchInput = (e) => {
    const value = e.target.value;
    if (!onSearchInput) return;
    onSearchInput(value);
  };

  return (
    <SearchInputContainer {...props}>
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
    </SearchInputContainer>
  );
};

export default SearchInput;
