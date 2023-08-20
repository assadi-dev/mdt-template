import React from "react";
import {
  AddButton,
  IconInput,
  RowActionContainer,
  SearchSection,
} from "../grades.styled";
import { BiSearch } from "react-icons/bi";
import { TOGGLE_MODAL } from "./reducer/ModalReducer";

const RowActionCategories = ({ dispatchModelState }) => {
  const handleClickAddCategoryBtn = () => {
    dispatchModelState({
      type: TOGGLE_MODAL,
      payload: { view: "add-category", data: null },
    });
  };

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
      <AddButton
        className="bg-btn-alt-theme-color"
        onClick={handleClickAddCategoryBtn}
      >
        Ajouter
      </AddButton>
    </RowActionContainer>
  );
};

export default RowActionCategories;
