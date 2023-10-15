import React from "react";
import PreviewDocument from "../../../../../../components/Modal/PreviewDocument";
import { ModalContainer } from "../../../../../../components/Modal/Modal.styled";
import { HeaderModal } from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";

const ConsultationPlainte = ({ onCloseModal = () => {}, ...props }) => {
  return (
    <ModalContainer {...props}>
      <HeaderModal>
        <h2>Consultation plaint</h2>
        <CloseModalBtn onClick={onCloseModal} />
      </HeaderModal>
    </ModalContainer>
  );
};

export default ConsultationPlainte;
