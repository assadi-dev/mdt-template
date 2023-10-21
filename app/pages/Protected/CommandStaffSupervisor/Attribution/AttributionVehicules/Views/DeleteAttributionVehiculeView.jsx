import React from "react";
import DeleteConfirmForm from "../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";

const DeleteAttributionVehiculeView = ({
  sanctionData,
  handleConfirm = () => {},
  onCloseModal = () => {},
  ...props
}) => {
  const TITLE_TEXT = `Voulez-vous supprimer l'attribution vehicule ?`;

  return (
    <DeleteConfirmForm
      text={TITLE_TEXT}
      onConfirm={handleConfirm}
      onCloseModal={onCloseModal}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleteAttributionVehiculeView;
