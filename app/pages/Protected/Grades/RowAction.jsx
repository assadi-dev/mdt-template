import React from "react";
import {
  AddButton,
  IconInput,
  RowActionContainer,
  SearchSection,
} from "./grades.styled";
import { BiSearch } from "react-icons/bi";
import { TOGGLE_MODAL } from "./GrdesCategories/reducer/ModalReducer";
import { useRef } from "react";
import { useState } from "react";

const RowAction = ({ handleClickAddGrade, onSearch }) => {
  return (
    <RowActionContainer>
      <div></div>
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
