import React from "react";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormRapportIntervention from "./FormRapportIntervention";
import { ModalRapportIntervention } from "../../RapportIntervention.styled";

const AddRapportIntervention = ({ onCloseModal, ...props }) => {
  return (
    <ModalRapportIntervention {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un rapport Intervention</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormRapportIntervention />
    </ModalRapportIntervention>
  );
};

export default AddRapportIntervention;
