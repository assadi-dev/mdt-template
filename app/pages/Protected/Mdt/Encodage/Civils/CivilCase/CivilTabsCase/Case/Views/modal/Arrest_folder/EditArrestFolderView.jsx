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
import { save_arrest_folder, update_arrest_folder } from "./helpers";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";
import { editArrestFolder } from "../../../../../../../../../../../features/Civils/Reports/ArrestFolder.slice";
import { datetimeFormatISO8601 } from "../../../../../../../../../../../services/utils/dateFormat";
import useProcess from "../../../../../../../../../../../hooks/useProcess";

const EditArrestFolderView = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const MODAL_TIITLE = payload?.numeroArrestFolder
    ? `Dossier d'arrestation n° ${payload?.numeroArrestFolder}`
    : `????`;

  const submitArrestFolder = async (values) => {
    try {
      toggleProcess();
      const id = values.id;
      delete values.agent;
      delete values.civil;
      delete values.createdAt;
      const result = await update_arrest_folder(id, values);
      values.dateOfEntry = { date: values.dateOfEntry };

      dispatch(editArrestFolder(values));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  payload.dateOfEntry =
    payload?.dateOfEntry?.date &&
    datetimeFormatISO8601(payload?.dateOfEntry?.date);

  return (
    <ArrestFolderFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">{MODAL_TIITLE}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <MainViewContainer>
        <ArrestFolderForm
          onSubmitValue={submitArrestFolder}
          defaultValues={payload}
          labelSubmit="Mettre à jour"
          process={process}
        />
      </MainViewContainer>
    </ArrestFolderFormContainer>
  );
};

export default EditArrestFolderView;
