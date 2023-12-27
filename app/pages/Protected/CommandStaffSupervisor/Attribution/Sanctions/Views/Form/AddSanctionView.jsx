import React from "react";
import { ModalFormSanctionContainer } from "../../AttributionSanction.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormSanctions from "./FormSanctions";
import { agent_iri } from "../../../../../../../services/api/instance";
import { useDispatch, useSelector } from "react-redux";
import { save_sanction } from "../../helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";
import { add_sanction } from "../../../../../../../features/Sanctions/Sanctions.slice";

const AddSanctionView = ({ onCloseModal, ...props }) => {
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const submitSanction = async (values) => {
    try {
      values.agent = agent_iri + authenticateUser.idAgent;
      const result = await save_sanction(values);
      const payload = values;
      payload.createdAt = { date: result.data.createdAt };
      payload.id = result.data.id;
      payload.agentConcerned = values.agentConcernedLabel;
      dispatch(add_sanction(payload));
      onCloseModal();
      toastSuccess();
    } catch (error) {
      toastError();
    }
  };

  return (
    <ModalFormSanctionContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter une sanction </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormSanctions onSaveSanction={submitSanction} />
    </ModalFormSanctionContainer>
  );
};

export default AddSanctionView;
