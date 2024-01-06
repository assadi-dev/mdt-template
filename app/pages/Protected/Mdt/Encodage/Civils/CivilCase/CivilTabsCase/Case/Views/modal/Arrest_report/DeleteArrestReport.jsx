import React from "react";
import DeleteConfirmForm from "../../../../../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { useDispatch, useSelector } from "react-redux";
import useProcess from "../../../../../../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";
import { delete_arrestReport } from "./helpers";
import { removeArrestReport } from "../../../../../../../../../../../features/Civils/Reports/ArrestReport.slice";

const DeleteArrestReport = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const ID = payload?.id;
  const LABEL_TEXT = `Voulez-vous supprimer le rapport d'arrestation  n° ${
    payload?.numeroArrestReport || "????"
  } ?`;
  const DELETE_SUCCESS = `Le rapport n° ${
    payload?.numeroArrestReport || "????"
  }  à bien été supprimé`;

  const confirmDelete = async () => {
    try {
      toggleProcess();
      await delete_arrestReport(ID);
      dispatch(removeArrestReport([ID]));
      onCloseModal();
      toastSuccess(DELETE_SUCCESS);
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <DeleteConfirmForm
      text={LABEL_TEXT}
      onCloseModal={onCloseModal}
      {...props}
      process={process}
      onConfirm={confirmDelete}
    ></DeleteConfirmForm>
  );
};

export default DeleteArrestReport;
