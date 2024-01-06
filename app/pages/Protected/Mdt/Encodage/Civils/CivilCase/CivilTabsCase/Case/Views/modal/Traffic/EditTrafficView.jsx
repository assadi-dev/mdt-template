import React from "react";
import { CaseModalFormContainer } from "../../../Case.styled";
import { HeaderModal } from "../../../../../../../../../../../components/Forms/FormView.styled";
import TrafficForm from "../../Form/TrafficForm";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import { MainViewContainer } from "../Arrest_folder/ArrestFolder.styled";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";
import { save_traffic, update_traffic } from "./helper";
import { agent_iri } from "../../../../../../../../../../../services/api/instance";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useProcess from "../../../../../../../../../../../hooks/useProcess";
import {
  addTraffic,
  editTraffic,
} from "../../../../../../../../../../../features/Civils/Reports/TrafficSlice";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";

const EditTrafficView = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const { idCivil } = useParams();
  const dispatch = useDispatch();

  const MODAL_TIITLE = payload?.numeroArrestReport
    ? `Rapport d'arrestation n° ${payload?.numeroArrestReport}`
    : `????`;

  payload.dateOfEntry =
    payload?.dateOfEntry?.date &&
    datetimeFormatISO8601(payload?.dateOfEntry?.date);

  const saveFormTraffic = async (values) => {
    try {
      toggleProcess();
      const id = values.id;
      delete values.agent;
      delete values.civil;
      delete values.createdAt;
      await update_traffic(id, values);
      dispatch(editTraffic(values));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <CaseModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">{MODAL_TIITLE}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <MainViewContainer>
        <TrafficForm
          labelSubmit="Mettre à jour"
          defaultValues={payload}
          onSubmitValue={saveFormTraffic}
          process={process}
        />
      </MainViewContainer>
    </CaseModalFormContainer>
  );
};

export default EditTrafficView;
