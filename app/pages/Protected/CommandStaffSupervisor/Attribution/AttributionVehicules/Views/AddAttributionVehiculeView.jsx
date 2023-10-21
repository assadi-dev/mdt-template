import React from "react";
import { HeaderModal } from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { ModalFormAttributionVehiculeContainer } from "../AttributionVehicules.styled";
import FormAttributionVehicule from "./Form/FormAttribution.Vehicule";

const AddAttributionVehiculeView = ({ onCloseModal, ...props }) => {
  const handleAddAttribution = (values) => {};

  return (
    <ModalFormAttributionVehiculeContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Attribuer un véhicule </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormAttributionVehicule onSaveAttribution={handleAddAttribution} />
    </ModalFormAttributionVehiculeContainer>
  );
};

export default AddAttributionVehiculeView;
