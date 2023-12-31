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
import { save_traffic } from "./helper";
import { agent_iri } from "../../../../../../../../../../../services/api/instance";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useProcess from "../../../../../../../../../../../hooks/useProcess";
import { addTraffic } from "../../../../../../../../../../../features/Civils/Reports/TrafficSlice";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";

const AddTraffic = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const { idCivil } = useParams();
  const dispatch = useDispatch();

  const saveFormTraffic = async (values) => {
    try {
      toggleProcess();
      values.agent = agent_iri + idAgent;
      values.civil = `api/civils/${idCivil}`;
      const result = await save_traffic(values);
      values.agent = cleanAgentMatricule(matricule, firstname, lastname);
      values.createdAt = result.data?.createdAt;
      values.id = result.data?.id;
      values.numeroAvertissement = result.data?.numeroAvertissement;
      values.createdAt = { date: result.data?.createdAt || new Date() };
      dispatch(addTraffic(values));
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
        <h2 className="form-title ">Traffic</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <MainViewContainer>
        <TrafficForm onSubmitValue={saveFormTraffic} process={process} />
      </MainViewContainer>
    </CaseModalFormContainer>
  );
};

export default AddTraffic;
