import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import FormCodePenal from "./FormCodePenal";

const EditCodePenal = ({ payload, onCloseModal, ...props }) => {
  let defaultValues = {
    id: payload?.id,
    label: payload?.label,
    categorie: payload?.categorie,
    amount: payload?.amount,
    peine: payload?.peine,
  };

  const MODAL_TITLE = payload?.label
    ? payload.label
    : "Modifier le code penale";

  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">{MODAL_TITLE}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormCodePenal
        labelValidation="Mettre à jour"
        defaultValues={defaultValues}
      />
    </ModalFormContainer>
  );
};

export default EditCodePenal;
