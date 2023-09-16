import React from "react";
import { ModalContainer } from "../../../../../../components/Modal/Modal.styled";

const Add = ({ onCloseModal }) => {
  return (
    <ModalContainer>
      <h1>Ajouter une saisie</h1>
      <button onClick={onCloseModal}>fermer</button>
    </ModalContainer>
  );
};

export default Add;
