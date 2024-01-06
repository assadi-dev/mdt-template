import React from "react";
import { HeaderModal } from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import { ArrestReportFormContainer } from "./ArrestReport.styled";
import ArrestReportForm from "../../Form/ArrestReportForm";
import { MainViewContainer } from "../Arrest_folder/ArrestFolder.styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { agent_iri } from "../../../../../../../../../../../services/api/instance";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";
import { save_arrestReport } from "./helpers";

const AddArrestReportView = ({ payload, onCloseModal, ...props }) => {
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const dispatch = useDispatch();
  const { idCivil } = useParams();

  const submitArrestReport = async (values) => {
    try {
      values.agent = agent_iri + idAgent;
      values.civil = `api/civils/${idCivil}`;
      const result = await save_arrestReport(values);
      values.agent = cleanAgentMatricule(matricule, firstname, lastname);
      values.createdAt = result.data?.createdAt;
      values.id = result.data?.id;
      values.numeroAvertissement = result.data?.numeroAvertissement;
      values.createdAt = { date: result.data?.createdAt || new Date() };

      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      onCloseModal();
    }
  };

  return (
    <ArrestReportFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Rapport d'arrestation</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <MainViewContainer>
        <ArrestReportForm onSubmitValue={submitArrestReport} />
      </MainViewContainer>
    </ArrestReportFormContainer>
  );
};

export default AddArrestReportView;
