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

const RowAction = ({ dispatchModelState, onSearch }) => {
  const handleClickAddGrade = () => {
    dispatchModelState({
      type: TOGGLE_MODAL,
      payload: { view: "add-grade", data: null },
    });
  };

  const searcInputRef = useRef(null);
  const [timer, setTimer] = useState(null);

  const handleChangeSearchInput = () => {
    if (!searcInputRef.current) return;
    let value = searcInputRef.current.value;
    if (!onSearch) return;

    clearTimeout(timer);
    let newTimer = setTimeout(() => {
      onSearch(value);
    }, 500);
    setTimer(newTimer);
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
          ref={searcInputRef}
          onChange={handleChangeSearchInput}
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
