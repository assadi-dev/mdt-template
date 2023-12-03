import React from "react";
import DeleteConfirmForm from "../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import useProcess from "../../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { saveDeleteRapportIntervention } from "./helpers";
import { useDispatch } from "react-redux";
import { deleteInterventionReport } from "../../../../../../../features/interventionReport/InterventionReport.slice";

const DeleteRapportIntervention = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  const TEXT_CONFIRM = `Voulez-vous supprimer le rapport n° ${payload?.numeroReport}`;
  const DELETE_MESSAGE = `Le rapport n° ${payload?.numeroReport} à été supprimer`;

  const handleConfirm = async () => {
    try {
      toggleProcess();
      const id = payload.id;

      await saveDeleteRapportIntervention(id);
      dispatch(deleteInterventionReport({ id }));
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
      text={TEXT_CONFIRM}
      process={process}
      onConfirm={handleConfirm}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleteRapportIntervention;
