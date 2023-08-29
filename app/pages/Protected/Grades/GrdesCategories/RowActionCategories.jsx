import React from "react";
import {
  AddButton,
  IconInput,
  RowActionContainer,
  SearchSection,
} from "../grades.styled";
import { BiSearch } from "react-icons/bi";
import { TOGGLE_MODAL } from "./reducer/ModalReducer";
import { useRef } from "react";
import { useState } from "react";

const RowActionCategories = ({ dispatchModelState, onSearch }) => {
  const handleClickAddCategoryBtn = () => {
    dispatchModelState({
      type: TOGGLE_MODAL,
      payload: { view: "add-category", data: null },
    });
  };

  const searcInputRef = useRef(null);
  const [timer, setTimer] = useState(null);

  return (
    <RowActionContainer>
      <div></div>
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
