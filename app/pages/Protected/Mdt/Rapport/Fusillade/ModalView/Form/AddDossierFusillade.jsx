import React from "react";
import {
  HeaderModal,
  ModalContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormDossiertFusillade from "./FormDossiertFusillade";
import { DossierFusilladeFormContainer } from "../../Fusillade.styled";

const AddDossierFusillade = ({ onCloseModal = () => {}, ...props }) => {
  return (
    <DossierFusilladeFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un dossier de fusillades</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormDossiertFusillade />
    </DossierFusilladeFormContainer>
  );
};

export default AddDossierFusillade;
