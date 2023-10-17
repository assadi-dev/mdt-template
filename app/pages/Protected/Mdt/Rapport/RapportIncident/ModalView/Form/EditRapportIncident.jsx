import React from "react";
import { ModalRapportIncident } from "../../Rapportincident.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormRapportIncident from "./FormRapportIncident";
import { defaultFormValues } from "./helpers";

const EditRapportIncident = ({ payload, onCloseModal, ...props }) => {
  defaultFormValues.officierimplique = payload?.officierimplique;
  defaultFormValues.numeraRapport = payload?.numeraRapport;
  defaultFormValues.corpsIncident = payload?.corpsIncident;
  defaultFormValues.corpsIncident = "Test Edit";

  return (
    <ModalRapportIncident {...props}>
      <HeaderModal>
        <h2 className="form-title">
          Modifier le rapport incident n° {payload?.numeraRapport}{" "}
        </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormRapportIncident
        labelSaveButton="Mettre à jour"
        defaultValues={defaultFormValues}
      />
    </ModalRapportIncident>
  );
};

export default EditRapportIncident;
