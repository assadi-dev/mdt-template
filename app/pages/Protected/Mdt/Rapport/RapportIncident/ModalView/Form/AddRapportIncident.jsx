import React from "react";
import { ModalRapportIncident } from "../../Rapportincident.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormRapportIncident from "./FormRapportIncident";
import { defaultFormValues } from "./helpers";

<<<<<<< Updated upstream
const AddRapportIncident = ({ onCloseModal, ...props }) => {
=======
const AddRapportincident = ({ onCloseModal, ...props }) => {
>>>>>>> Stashed changes
  return (
    <ModalRapportIncident {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un rapport incident</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormRapportIncident />
    </ModalRapportIncident>
  );
};

<<<<<<< Updated upstream
export default AddRapportIncident;
=======
export default AddRapportincident;
>>>>>>> Stashed changes
