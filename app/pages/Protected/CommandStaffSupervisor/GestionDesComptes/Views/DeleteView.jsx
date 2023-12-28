import React from "react";
import DeleteConfirmForm from "../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";
import useProcess from "../../../../../hooks/useProcess";
import { useDispatch } from "react-redux";
import { remove_user } from "../../../../../features/Users/Users.slice";
import { toastError, toastSuccess } from "../../../../../services/utils/alert";

const DeleteUserView = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();
  const LABEL_TEXT = `Voulez-vous Supprimer le compte de ${payload?.firstname}  ${payload?.lastname} ?`;
  const ID = payload.id;

  const handleConfirmDelete = () => {
    try {
      toggleProcess();
      dispatch(remove_user([ID]));
      onCloseModal();
      toastSuccess();
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
      process={process}
      onConfirm={handleConfirmDelete}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleteUserView;
