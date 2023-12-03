import React from "react";
import DeleteConfirmForm from "../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";

const DeleteRapportIncident = ({ payload, ...props }) => {
  const TEXT_CONFIRM = `Voulez-vous supprimer le rapport n° ${payload?.numeroReport}`;

  return <DeleteConfirmForm text={TEXT_CONFIRM} {...props}></DeleteConfirmForm>;
};

export default DeleteRapportIncident;
