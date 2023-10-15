import React from "react";
import {
  FormContainer,
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import AddForm from "../Form/AddPlainteForm";
import AddPlainteForm from "../Form/AddPlainteForm";
import { RowPreuveButton } from "../../Plainte.styled";
import { Button } from "../../../../../../../components/PageContainer";

const AddPlainte = ({ onCloseModal = () => {}, ...props }) => {
  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Ajouter une déposition </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <RowPreuveButton>
        <Button className="bg-btn-theme-color" type="button">
          Voir les preuves
        </Button>
      </RowPreuveButton>
      <AddPlainteForm />
    </ModalFormContainer>
  );
};

export default AddPlainte;
