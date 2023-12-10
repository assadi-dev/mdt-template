import React from "react";
import DeleteConfirmForm from "../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { useDispatch, useSelector } from "react-redux";
import useProcess from "../../../../../../../hooks/useProcess";

const DeleteDossierFusillade = ({ payload, onCloseModal, ...props }) => {
  const LABEL_TEXT = `Voulez-vous supprimer le dossier fusillade n° ${
    payload?.numeroDossier || "????"
  } ?`;
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  return (
    <DeleteConfirmForm
      text={LABEL_TEXT}
      onCloseModal={onCloseModal}
      {...props}
      process={process}
    ></DeleteConfirmForm>
  );
};

export default DeleteDossierFusillade;
