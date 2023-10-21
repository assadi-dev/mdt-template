import React from "react";
import { ModalFormSanctionContainer } from "../../AttributionSanction.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormSanctions from "./FormSanctions";

const EditSanctionView = ({ payload, onCloseModal, ...props }) => {
  const formSanctionValues = { ...payload };

  return (
    <ModalFormSanctionContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Modifier une sanction </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormSanctions defaultFormValue={formSanctionValues} />
    </ModalFormSanctionContainer>
  );
};

export default EditSanctionView;
