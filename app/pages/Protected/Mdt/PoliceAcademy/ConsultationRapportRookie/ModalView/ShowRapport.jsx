import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import PreviewDocument from "../../../../../../components/Modal/PreviewDocument";

const ShowRapport = ({ payload, onCloseModal, ...props }) => {
  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title"> Consultation du rapport </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <PreviewDocument>
        <p>agent</p>
      </PreviewDocument>
    </ModalFormContainer>
  );
};

export default ShowRapport;
