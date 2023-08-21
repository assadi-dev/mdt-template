import React from "react";
import {
  AlertMessageSection,
  ConfirmButton,
  DeleteConfirm,
  DeleteRowBtn,
  FormContainer,
  HeaderModal,
  HeaderModalDelete,
} from "./FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";
import { IoWarning } from "react-icons/io5";

const FormDelete = ({
  data,
  text,
  alertMessage,
  onCloseModal,
  onDelete,
  onConfirm,
  ...props
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!onConfirm) return;
    onConfirm(data);
  };

  return (
    <DeleteConfirm {...props}>
      <HeaderModalDelete>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModalDelete>
      <FormContainer className="form-theme-color" onSubmit={handleSubmit}>
        <p className="title">{text} </p>
        {alertMessage && (
          <AlertMessageSection>
            <div className="header-icon">
              <span>
                <IoWarning />
              </span>
            </div>
            <div className="content">{alertMessage}</div>
          </AlertMessageSection>
        )}
        <DeleteRowBtn>
          <ConfirmButton className="bg-danger-btn" type="submit">
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
      </FormContainer>
    </DeleteConfirm>
  );
};

export default FormDelete;
