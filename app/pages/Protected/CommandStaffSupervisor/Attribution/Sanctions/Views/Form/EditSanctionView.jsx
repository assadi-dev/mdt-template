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
import { agent_iri } from "../../../../../../../services/api/instance";

const EditSanctionView = ({ payload, onCloseModal, ...props }) => {
  const formSanctionValues = { ...payload };
  const id = payload.id;

  const submitSanction = async (values) => {
    try {
      delete values.agent;
      delete values.createdAt;
      const toUpdateData = values;
      delete toUpdateData.id;
      console.log(toUpdateData);
      await update_sanction(id, toUpdateData);
      const payload = values;
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
