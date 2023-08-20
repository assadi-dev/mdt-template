import React from "react";
import {
  AddButton,
  IconInput,
  RowActionContainer,
  SearchSection,
} from "./grades.styled";
import { BiSearch } from "react-icons/bi";
import { TOGGLE_MODAL } from "./GrdesCategories/reducer/ModalReducer";

const RowAction = ({ dispatchModelState }) => {
  const handleClickAddGrade = () => {
    dispatchModelState({
      type: TOGGLE_MODAL,
      payload: { view: "add-grade", data: null },
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
        onClick={handleClickAddGrade}
      >
        Ajouter
      </AddButton>
    </RowActionContainer>
  );
};

export default RowAction;
