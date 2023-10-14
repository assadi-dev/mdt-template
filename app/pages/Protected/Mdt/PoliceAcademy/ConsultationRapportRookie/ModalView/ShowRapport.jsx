import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";

const ShowRapport = ({ payload, onCloseModal, ...props }) => {
  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title"> Consultation Rapport </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
    </ModalFormContainer>
  );
};

export default ShowRapport;
