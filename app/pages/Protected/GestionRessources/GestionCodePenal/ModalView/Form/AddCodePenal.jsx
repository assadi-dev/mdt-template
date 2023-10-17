import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import FormCodePenal from "./FormCodePenal";

const AddCodePenal = ({ onCloseModal, ...props }) => {
  let defaultValues = {
    id: "",
    label: "",
    categorie: "",
    amount: "",
    peine: "",
  };

  const submit = (values) => {
    console.log(values);
  };

  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un code pénal</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormCodePenal
        className="modal-theme-color"
        defaultValues={defaultValues}
        handleSave={submit}
      />
    </ModalFormContainer>
  );
};

export default AddCodePenal;
