import React from "react";
import { ModalRapportIncident } from "../../Rapportincident.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormRapportIncident from "./FormRapportIncident";
import { defaultFormValues, saveUpdateRapportIncident } from "./helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import useProcess from "../../../../../../../hooks/useProcess";
import { useDispatch } from "react-redux";
import { editIncidentReport } from "../../../../../../../features/IncidentReport/IncidentReport.slice";

const EditRapportIncident = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  const saveIncidentRepport = async (values) => {
    try {
      toggleProcess();
      const id = values.id;
      delete values.agent;
      delete values.createdAt;
      dispatch(editIncidentReport(values));
      await saveUpdateRapportIncident(id, values);

      onCloseModal();
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

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
        defaultValues={payload}
        submitValue={saveIncidentRepport}
        process={process}
      />
    </ModalRapportIncident>
  );
};

export default EditRapportIncident;
