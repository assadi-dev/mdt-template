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
import { useDispatch, useSelector } from "react-redux";
import { edit_sanction } from "../../../../../../../features/Sanctions/Sanctions.slice";
import useProcess from "../../../../../../../hooks/useProcess";

const EditSanctionView = ({ payload, onCloseModal, ...props }) => {
  const formSanctionValues = { ...payload };
  const id = payload.id;
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const submitSanction = async (values) => {
    toggleProcess();
    try {
      delete values.agent;
      delete values.createdAt;
      const toUpdateData = values;
      delete toUpdateData.id;
      await update_sanction(id, toUpdateData);
      const payload = values;
      payload.agentConcerned = values.agentConcernedLabel;
      payload.id = id;
      delete payload.agentConcernedLabel;
      dispatch(edit_sanction(payload));
      onCloseModal();
      toastSuccess();
    } catch (error) {
      console.log(error.message);
      toastError();
    } finally {
      toggleProcess();
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
        process={process}
      />
    </ModalFormSanctionContainer>
  );
};

export default EditSanctionView;
