import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import FormCodePenal from "./FormCodePenal";
import useProcess from "../../../../../../hooks/useProcess";
import { useDispatch } from "react-redux";

const AddCodePenal = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

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
        process={process}
        handleSave={submit}
      />
    </ModalFormContainer>
  );
};

export default AddCodePenal;
