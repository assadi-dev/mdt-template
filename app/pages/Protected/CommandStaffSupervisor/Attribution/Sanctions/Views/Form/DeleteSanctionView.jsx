import React from "react";
import DeleteConfirmForm from "../../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";

const DeleteSanctionView = ({ sanctionData, onCloseModal, ...props }) => {
  const TITLE_TEXT = `Voulez-vous supprimer la sanction ?`;

  const handleConfirm = async () => {
    onCloseModal();
  };

  return (
    <DeleteConfirmForm
      text={TITLE_TEXT}
      onConfirm={handleConfirm}
      onCloseModal={onCloseModal}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleteSanctionView;
