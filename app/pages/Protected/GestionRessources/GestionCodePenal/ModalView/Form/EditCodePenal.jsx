import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import FormCodePenal from "./FormCodePenal";
import useProcess from "../../../../../../hooks/useProcess";
import { useDispatch } from "react-redux";
import { edit_codePenal } from "../../../../../../features/CodePenals/CodPenal.slice";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import { update_codePenal } from "./helpers";

const EditCodePenal = ({ payload, onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  let defaultValues = {
    id: payload?.id,
    label: payload?.label,
    category: payload?.category,
    amount: payload?.amount,
    sentence: payload?.sentence,
  };
  const ID = payload.id;

  const MODAL_TITLE = "Modifier le code penale";

  const handleUpdateCodePenal = async (values) => {
    try {
      toggleProcess();
      await update_codePenal(ID, values);
      dispatch(edit_codePenal(values));
      onCloseModal();
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

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
        onSubmitValues={handleUpdateCodePenal}
      />
    </ModalFormContainer>
  );
};

export default EditCodePenal;
