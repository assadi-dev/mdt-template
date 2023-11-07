import React from "react";
import DeleteConfirmForm from "../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import { useDispatch } from "react-redux";
import { removeAcquisitions } from "../../../../../../features/Acquisitions/Acquisitions.slice";
import { deleteAcquisitions } from "../../helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";

const Delete = ({ onCloseModal, payload, ...props }) => {
  const dispatch = useDispatch();

  const handleConfirm = async () => {
    try {
      deleteAcquisitions(payload.id);
      dispatch(removeAcquisitions(payload));

      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      onCloseModal();
    }
  };
  const TEXT_DELETE = `Voulez-vous supprimer ce depot de saisie ?`;
  return (
    <DeleteConfirmForm
      onCloseModal={onCloseModal}
      onCancel={onCloseModal}
      onConfirm={handleConfirm}
      text={TEXT_DELETE}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default Delete;
