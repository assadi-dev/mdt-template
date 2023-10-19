import React from "react";
import {
  HeaderModal,
  ModalContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormDossiertFusillade from "./FormDossiertFusillade";
import { DossierFusilladeFormContainer } from "../../Fusillade.styled";

const EditDossierFusillade = ({ payload, onCloseModal, ...props }) => {
  const TITLE_MODAL = `Editer le dossier n° ${payload?.numeroDossier}`;

  return (
    <DossierFusilladeFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">{TITLE_MODAL}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormDossiertFusillade
        defaultValues={payload}
        labelSaveButton="mettre à jour"
      />
    </DossierFusilladeFormContainer>
  );
};

export default EditDossierFusillade;