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
import { addArrestFolder } from "../../../../../../../../../../../features/Civils/Reports/ArrestFolder.slice";
import useProcess from "../../../../../../../../../../../hooks/useProcess";

const AddArrestFolderView = ({ payload, onCloseModal, ...props }) => {
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const dispatch = useDispatch();
  const { idCivil } = useParams();
  const { process, toggleProcess } = useProcess();

  const submitArrestFolder = async (values) => {
    try {
      toggleProcess();
      values.agent = agent_iri + idAgent;
      values.civil = `api/civils/${idCivil}`;
      const result = await save_arrest_folder(values);
      values.agent = cleanAgentMatricule(matricule, firstname, lastname);
      values.id = result.data?.id;
      values.numeroAvertissement = result.data?.numeroAvertissement;
      values.createdAt = { date: result.data?.createdAt || new Date() };
      values.dateOfEntry = { date: values?.dateOfEntry || new Date() };
      dispatch(addArrestFolder(values));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <ArrestFolderFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Dossier d'arrestation</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <MainViewContainer>
        <ArrestFolderForm
          process={process}
          onSubmitValue={submitArrestFolder}
        />
      </MainViewContainer>
    </ArrestFolderFormContainer>
  );
};

export default AddArrestFolderView;
