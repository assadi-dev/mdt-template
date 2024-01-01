import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import AvertissementForm from "../../Form/AvertissementForm";

const AddAvertissement = ({ payload, onCloseModal, ...props }) => {
  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Ajouter une avertissement</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <AvertissementForm />
    </ModalFormContainer>
  );
};

export default AddAvertissement;
