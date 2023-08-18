import React from "react";
import {
  AddButton,
  IconInput,
  RowActionContainer,
  SearchSection,
} from "./grades.styled";
import { BiSearch } from "react-icons/bi";

const RowAction = () => {
  return (
    <RowActionContainer>
      <SearchSection className="input-theme-color">
        <IconInput>
          <BiSearch />
        </IconInput>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Rechercher"
        />
      </SearchSection>
      <AddButton className="bg-btn-alt-theme-color">Ajouter</AddButton>
    </RowActionContainer>
  );
};

export default RowAction;
