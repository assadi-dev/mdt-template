import React from "react";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormRapportIntervention from "./FormRapportIntervention";
import { ModalRapportIntervention } from "../../RapportIntervention.styled";
import useProcess from "../../../../../../../hooks/useProcess";
import { agent_iri } from "../../../../../../../services/api/instance";
import { useDispatch, useSelector } from "react-redux";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { addInterventionReport } from "../../../../../../../features/interventionReport/InterventionReport.slice";
import { saveCreateRapportIntervention } from "./helpers";

const AddRapportIntervention = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const dispatch = useDispatch();

  const save = async (values) => {
    try {
      toggleProcess();
      const agent = agent_iri + idAgent;
      const body = { ...values, agent };

      const res = await saveCreateRapportIntervention(body);
      const payload = {
        ...res.data,
        agent: `${matricule}-${firstname} ${lastname}`,
      };
      dispatch(addInterventionReport(payload));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <ModalRapportIntervention {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un rapport Intervention</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormRapportIntervention process={process} submitValues={save} />
    </ModalRapportIntervention>
  );
};

export default AddRapportIntervention;
