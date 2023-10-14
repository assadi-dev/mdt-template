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

const ConfirmDelete = ({ payload, onCloseModal, ...props }) => {
  console.log(payload);
  const onConfirm = () => {
    onCloseModal();
  };
  return (
    <DeleteConfirm {...props}>
      <HeaderModalDelete>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModalDelete>
      <DialogContent className="form-theme-color">
        <p className="title">Voulez vous supprimer le rapport </p>
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

export default ConfirmDelete;
