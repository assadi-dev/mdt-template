import React from "react";
import {
  DeleteConfirm,
  HeaderModalDelete,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import {
  ConfirmButton,
  DeleteRowBtn,
  DialogContent,
} from "../../../../../../components/Modal/DialogConfirm/DialogueConfirm.styled";
import DeleteConfirmForm from "../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";

const ConfirmDelete = ({ payload, onCloseModal, ...props }) => {
  console.log(payload);
  const onConfirm = () => {
    onCloseModal();
  };
  return (
    <DeleteConfirmForm
      {...props}
      text="Voulez vous supprimer le rapport"
      onCancel={onCloseModal}
      onCloseModal={onCloseModal}
    ></DeleteConfirmForm>
  );
};

export default ConfirmDelete;
