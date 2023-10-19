import React from "react";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import { ModalRapportIntervention } from "../../RapportIntervention.styled";
import FormRapportIntervention from "./FormRapportIntervention";

const EditRapportIntervention = ({ payload, onCloseModal, ...props }) => {
  return (
    <ModalRapportIntervention {...props}>
      <HeaderModal>
        <h2 className="form-title">
          Modifier le rapport intervention n° {payload?.numeraRapport}{" "}
        </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormRapportIntervention
        labelSaveButton="Mettre à jour"
        defaultValues={payload}
      />
    </ModalRapportIntervention>
  );
};

export default EditRapportIntervention;
