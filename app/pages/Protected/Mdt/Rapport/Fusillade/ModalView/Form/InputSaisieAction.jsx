import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  AddRowButton,
  RowAddSaisiAction,
  RowInputSaisielistContainer,
  SaisieListSection,
} from "../../Fusillade.styled";
import RowInputSaisie from "./RowInputSaisie";
import { defaultSaisievalue } from "./formDefaultvalue";
import uniqid from "uniqid";
import { BsPlusCircleFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { listeSaisieAnimation } from "./Animation";

const InputSaisieAction = ({ saisies = [], listSaisie = () => {} }) => {
  const [saisieValue, setSaisieValue] = useState((current) => {
    if (saisies.length > 0) {
      return saisies;
    }

    return [defaultSaisievalue];
  });

  const handleClickAddRow = () => {
    setSaisieValue(
      (current) =>
        (current = [...current, { ...defaultSaisievalue, id: uniqid() }])
    );
  };

  const handleChangeValue = (id, name, value) => {
    setSaisieValue((current) => {
      current = [...current].map((saisie) => {
        if (saisie.id == id) {
          return { ...saisie, [name]: value };
        }
        return saisie;
      });
      listSaisie(current);
      return current;
    });
  };

  const handleClick = (id) => {
    setSaisieValue((current) => {
      current = [...current].filter((saisie) => saisie.id != id);
      listSaisie(current);
      return current;
    });
  };

  return (
    <SaisieListSection>
      <RowAddSaisiAction>
        <label htmlFor="">Saisie</label>
        <AddRowButton
          type="button"
          onClick={handleClickAddRow}
          className="add-row-saisie-btn"
        >
          <BsPlusCircleFill />
          Ajouter une nouvelle ligne
        </AddRowButton>
      </RowAddSaisiAction>
      <RowInputSaisielistContainer>
        <AnimatePresence>
          {saisieValue.map((saisie) => (
            <RowInputSaisie
              key={saisie.id}
              saisie={saisie}
              onUpdate={handleChangeValue}
              onRemove={handleClick}
            />
          ))}
        </AnimatePresence>
      </RowInputSaisielistContainer>
    </SaisieListSection>
  );
};

export default InputSaisieAction;
