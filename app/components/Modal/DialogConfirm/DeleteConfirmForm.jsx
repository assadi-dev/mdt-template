import React from "react";
import {
  ConfirmButton,
  DeleteConfirm,
  DeleteRowBtn,
  DialogContent,
  DialogtextTitle,
  HeaderModalDelete,
} from "./DialogueConfirm.styled";
import CloseModalBtn from "../CloseModalBtn";
import SpinnerButton from "../../Shared/Loading/SpinnerButton";

const DeleteConfirmForm = ({
  text = "",
  onConfirm = () => {},
  onCancel = () => {},
  onCloseModal = () => {},
  children,
  process = false,
  ...props
}) => {
  const DISABLE_BTN = process == true ? true : false;

  const cancelpromise = () =>
    new Promise((resolve) => {
      onCancel();
      resolve("cancel");
    });

  const handleClickCancel = async () => {
    cancelpromise().then((res) => {
      onCloseModal();
    });
  };

  return (
    <DeleteConfirm {...props}>
      <HeaderModalDelete>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModalDelete>
      <DialogContent className="form-theme-color">
        <DialogtextTitle>{text} </DialogtextTitle>

        {children}
        <DeleteRowBtn>
          <ConfirmButton
            className="bg-danger-btn"
            type="submit"
            onClick={onConfirm}
            disabled={DISABLE_BTN}
          >
            Confirmer
            {process && <SpinnerButton />}
          </ConfirmButton>
          <ConfirmButton
            className="bg-btn-theme-color"
            type="button"
            onClick={handleClickCancel}
          >
            Annuler
          </ConfirmButton>
        </DeleteRowBtn>
      </DialogContent>
    </DeleteConfirm>
  );
};

export default DeleteConfirmForm;
