import React from "react";
import {
  HeaderModal,
  ModalContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormDossiertFusillade from "./FormDossiertFusillade";

const EditDossierFusillade = ({ payload, onCloseModal, ...props }) => {
  const TITLE_MODAL = `Editer le dossier n° ${payload?.numeroDossier}`;

  return (
    <ModalContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">{TITLE_MODAL}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormDossiertFusillade labelSaveButton="mettre à jour" />
    </ModalContainer>
  );
};

export default EditDossierFusillade;
