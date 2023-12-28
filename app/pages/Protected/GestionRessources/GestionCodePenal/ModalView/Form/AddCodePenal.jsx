import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import FormCodePenal from "./FormCodePenal";
import useProcess from "../../../../../../hooks/useProcess";
import { useDispatch } from "react-redux";
import { add_codePenal } from "../../../../../../features/CodePenals/CodPenal.slice";
import { save_codePenal } from "./helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";

const AddCodePenal = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  const submit = async (values) => {
    try {
      toggleProcess();
      const res = await save_codePenal(values);
      const payload = { id: res.data.id, ...values };
      dispatch(add_codePenal(payload));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      console.log(error);
      toastError();
    } finally {
      toggleProcess();
    }
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
        onSubmitValues={submit}
      />
    </ModalFormContainer>
  );
};

export default AddCodePenal;
