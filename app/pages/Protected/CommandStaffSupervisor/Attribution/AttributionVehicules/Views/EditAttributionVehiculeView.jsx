import React from "react";
import { HeaderModal } from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { ModalFormAttributionVehiculeContainer } from "../AttributionVehicules.styled";
import FormAttributionVehicule from "./Form/FormAttribution.Vehicule";

const EditAttributionVehiculeView = ({ payload, onCloseModal, ...props }) => {
  const TITLE_DOCUMENT = `Editer l'attribution d'un véhicule`;

  const handleEditAttribution = (values) => {};

  return (
    <ModalFormAttributionVehiculeContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">{TITLE_DOCUMENT}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormAttributionVehicule
        defaultFormValues={payload}
        onSaveAttribution={handleEditAttribution}
      />
    </ModalFormAttributionVehiculeContainer>
  );
};

export default EditAttributionVehiculeView;
