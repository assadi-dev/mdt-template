import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useProcess from "../../../../../../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";
import { removeAvertissement } from "../../../../../../../../../../../features/Civils/Reports/AvertissementSlice";
import DeleteConfirmForm from "../../../../../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { delete_avertissement } from "./helpers";

const DeleteAvertissementView = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const ID = payload?.id;
  const LABEL_TEXT = `Voulez-vous supprimer l'avertissement n° ${
    payload?.numeroAvertissement || "????"
  } ?`;
  const DELETE_SUCCESS = `Le rapport n° ${
    payload?.numeroAvertissement || "????"
  }  à bien été supprimé`;

  const confirmDelete = async () => {
    try {
      toggleProcess();
      await delete_avertissement(ID);
      dispatch(removeAvertissement([ID]));

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

export default DeleteAvertissementView;
