import React from "react";
import DeleteConfirmForm from "../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { useDispatch } from "react-redux";
import { deleteIncidentReport } from "../../../../../../../features/IncidentReport/IncidentReport.slice";
import { saveDeleteRapportIncident } from "./helpers";
import useProcess from "../../../../../../../hooks/useProcess";

const DeleteRapportIncident = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  const TEXT_CONFIRM = `Voulez-vous supprimer le rapport n° ${payload?.numeroReport}`;
  const DELETE_MESSAGE = `Le rapport n° ${payload?.numeroReport} à été supprimer`;

  const handleConfirm = async () => {
    try {
      toggleProcess();
      const id = payload.id;

      await saveDeleteRapportIncident(id);
      dispatch(deleteIncidentReport({ id }));
      onCloseModal();
      toastSuccess(DELETE_MESSAGE);
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <DeleteConfirmForm
      onConfirm={handleConfirm}
      text={TEXT_CONFIRM}
      process={process}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleteRapportIncident;
