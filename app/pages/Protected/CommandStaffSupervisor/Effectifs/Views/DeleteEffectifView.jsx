import React from "react";
import DeleteConfirmForm from "../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";

const DeleteEffectifView = ({ payload, onCloseModal, ...props }) => {
  const LABEL_TEXT = `Voulez-vous retirer ${payload?.firstname}  ${payload?.lastname} de l'effectif ?`;

  return (
    <DeleteConfirmForm
      text={LABEL_TEXT}
      onCloseModal={onCloseModal}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleteEffectifView;
