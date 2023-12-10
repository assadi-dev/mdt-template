import React from "react";
import DeleteConfirmForm from "../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { useDispatch, useSelector } from "react-redux";
import useProcess from "../../../../../../../hooks/useProcess";
import { delete_GunFightReport } from "../../helpers";
import { deleteGunFightReport } from "../../../../../../../features/GunFightReport/GunFightReport.slice";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";

const DeleteDossierFusillade = ({ payload, onCloseModal, ...props }) => {
  const LABEL_TEXT = `Voulez-vous supprimer le dossier fusillade n° ${
    payload?.numeroReport || "????"
  } ?`;
  const DELETE_SUCCESS = `Le rapport n° ${
    payload?.numeroReport || "????"
  }  à bien été supprimé`;
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();
  const ID = payload?.id;

  const handleDeleteConfirm = async () => {
    try {
      toggleProcess();

      await delete_GunFightReport(ID);
      dispatch(deleteGunFightReport([ID]));
      onCloseModal();
      toastSuccess(DELETE_SUCCESS);
    } catch (error) {
      toastError();
    } finally {
      toggleProcess;
    }
  };

  return (
    <DeleteConfirmForm
      text={LABEL_TEXT}
      onCloseModal={onCloseModal}
      {...props}
      process={process}
      onConfirm={handleDeleteConfirm}
    ></DeleteConfirmForm>
  );
};

export default DeleteDossierFusillade;
