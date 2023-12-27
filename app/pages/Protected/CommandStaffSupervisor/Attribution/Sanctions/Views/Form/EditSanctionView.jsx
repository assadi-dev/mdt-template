import React from "react";
import { ModalFormSanctionContainer } from "../../AttributionSanction.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormSanctions from "./FormSanctions";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { update_sanction } from "../../helpers";

const EditSanctionView = ({ payload, onCloseModal, ...props }) => {
  const formSanctionValues = { ...payload };

  const submitSanction = async (values) => {
    try {
      console.log(values);
      const toUpdateData = values;
      delete toUpdateData.id;
      delete toUpdateData.agent;
      console.log(toUpdateData);
      /*   const result = await update_sanction(values);
      const payload = values; */
      onCloseModal();
      toastSuccess();
    } catch (error) {
      console.log(error.message);
      toastError();
    }
  };

  return (
    <ModalFormSanctionContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Modifier une sanction </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormSanctions
        defaultFormValue={formSanctionValues}
        labelSubmiButton={"Mettre à jour"}
        onSaveSanction={submitSanction}
      />
    </ModalFormSanctionContainer>
  );
};

export default EditSanctionView;
