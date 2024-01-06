import React from "react";
import DeleteConfirmForm from "../../../../../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { useDispatch, useSelector } from "react-redux";
import useProcess from "../../../../../../../../../../../hooks/useProcess";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";
import { delete_arrest_folder } from "./helpers";

import { removeArrestFolder } from "../../../../../../../../../../../features/Civils/Reports/ArrestFolder.slice";

const DeleteArrestFolder = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const ID = payload?.id;
  const LABEL_TEXT = `Voulez-vous supprimer le dossier d'arrestation  n° ${
    payload?.numeroArrestFolder || "????"
  } ?`;
  const DELETE_SUCCESS = `Le dossier n° ${
    payload?.numeroArrestFolder || "????"
  }  à bien été supprimé`;

  const confirmDelete = async () => {
    try {
      toggleProcess();
      await delete_arrest_folder(ID);
      dispatch(removeArrestFolder([ID]));

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

export default DeleteArrestFolder;
