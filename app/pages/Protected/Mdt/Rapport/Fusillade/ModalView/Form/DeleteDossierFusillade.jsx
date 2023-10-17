import React from "react";
import DeleteConfirmForm from "../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";

const DeleteDossierFusillade = ({ payload, onCloseModal, ...props }) => {
  const LABEL_TEXT = `Voulez-vous supprimer le dossier fusillade n° ${
    payload?.numeroDossier || "????"
  } ?`;

  return (
    <DeleteConfirmForm
      text={LABEL_TEXT}
      onCloseModal={onCloseModal}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleteDossierFusillade;
