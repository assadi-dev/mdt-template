import React from "react";
import {
  ConfirmButton,
  DeleteConfirm,
  DeleteRowBtn,
  DialogContent,
  HeaderModalDelete,
} from "./DialogueConfirm.styled";
import CloseModalBtn from "../CloseModalBtn";

const DeleteConfirmForm = ({
  text = "",
  onConfirm = () => {},
  onCancel = () => {},
  onCloseModal = () => {},
  children,
  ...props
}) => {
  return (
    <DeleteConfirm {...props}>
      <HeaderModalDelete>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModalDelete>
      <DialogContent className="form-theme-color">
        <p className="title">{text} </p>
        {children}
        <DeleteRowBtn>
          <ConfirmButton
            className="bg-danger-btn"
            type="submit"
            onClick={onConfirm}
          >
            Confirmer
          </ConfirmButton>
          <ConfirmButton
            className="bg-btn-theme-color"
            type="button"
            onClick={onCloseModal}
          >
            Annuler
          </ConfirmButton>
        </DeleteRowBtn>
      </DialogContent>
    </DeleteConfirm>
  );
};

export default DeleteConfirmForm;
