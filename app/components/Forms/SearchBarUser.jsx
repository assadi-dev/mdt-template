import React, { useRef } from "react";
import { IconInput, SearchInputContainer } from "./FormView.styled";
import { TbUserSearch } from "react-icons/tb";

const SearchInputUser = ({ onSearchInput, ...props }) => {
  const searcInputRef = useRef(null);
  const handleSearchInput = (e) => {
    const value = e.target.value;
    if (!onSearchInput) return;
    onSearchInput(value);
  };

  return (
    <SearchInputContainer {...props}>
      <IconInput>
        <TbUserSearch />
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

export default SearchInputUser;
