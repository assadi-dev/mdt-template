import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import FormCodePenal from "./FormCodePenal";
import useProcess from "../../../../../../hooks/useProcess";
import { useDispatch } from "react-redux";

const EditCodePenal = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  let defaultValues = {
    id: payload?.id,
    label: payload?.label,
    categorie: payload?.categorie,
    amount: payload?.amount,
    sentence: payload?.sentence,
  };

  const MODAL_TITLE = "Modifier le code penale";

  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">{MODAL_TITLE}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormCodePenal
        labelValidation="Mettre à jour"
        defaultValues={defaultValues}
        process={process}
      />
    </ModalFormContainer>
  );
};

export default EditCodePenal;
