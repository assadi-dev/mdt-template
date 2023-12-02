import React from "react";
import { ModalRapportIncident } from "../../Rapportincident.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormRapportIncident from "./FormRapportIncident";
import useProcess from "../../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { saveCreateRapportIncident } from "./helpers";
import { agent_iri } from "../../../../../../../services/api/instance";
import { useDispatch, useSelector } from "react-redux";
import { addIncidentReport } from "../../../../../../../features/IncidentReport/IncidentReport.slice";

const AddRapportIncident = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const dispatch = useDispatch();
  const onSaveIncidentReport = async (values) => {
    try {
      const agent = agent_iri + idAgent;
      const body = { ...values, agent };

      const res = await saveCreateRapportIncident(body);
      dispatch(addIncidentReport(res.data));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <ModalRapportIncident {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un rapport incident</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormRapportIncident
        process={process}
        submitValue={onSaveIncidentReport}
      />
    </ModalRapportIncident>
  );
};

export default AddRapportIncident;
