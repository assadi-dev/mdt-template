import React from "react";
import {
  ArrestFolderFormContainer,
  MainViewContainer,
} from "./ArrestFolder.styled";
import { HeaderModal } from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import ArrestFolderForm from "../../Form/ArrestFolderForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { agent_iri } from "../../../../../../../../../../../services/api/instance";
import { save_arrest_folder } from "./helpers";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";

const AddArrestFolderView = ({ payload, onCloseModal, ...props }) => {
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const dispatch = useDispatch();
  const { idCivil } = useParams();

  const submitArrestFolder = async (values) => {
    try {
      values.agent = agent_iri + idAgent;
      values.civil = `api/civils/${idCivil}`;
      const result = await save_arrest_folder(values);
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
    <ArrestFolderFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Dossier d'arrestation</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <MainViewContainer>
        <ArrestFolderForm onSubmitValue={submitArrestFolder} />
      </MainViewContainer>
    </ArrestFolderFormContainer>
  );
};

export default AddArrestFolderView;
