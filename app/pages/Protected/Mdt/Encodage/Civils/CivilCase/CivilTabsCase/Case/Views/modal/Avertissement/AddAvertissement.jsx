import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import AvertissementForm from "../../Form/AvertissementForm";
import { addAvertissement } from "../../../../../../../../../../../features/Civils/Reports/AvertissementSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { agent_iri } from "../../../../../../../../../../../services/api/instance";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";
import { save_avertissement } from "./helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";

const AddAvertissement = ({ payload, onCloseModal, ...props }) => {
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const dispatch = useDispatch();
  const { idCivil } = useParams();
  const saveAvertissement = async (values) => {
    try {
      values.agent = agent_iri + idAgent;
      values.civil = `api/civils/${idCivil}`;
      const result = await save_avertissement(values);
      values.agent = cleanAgentMatricule(matricule, firstname, lastname);
      values.createdAt = result.data?.createdAt;
      values.id = result.data?.id;
      values.numeroAvertissement = result.data?.numeroAvertissement;
      dispatch(addAvertissement(values));
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      onCloseModal();
    }
  };

  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Avertissement</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <AvertissementForm onSubmitValue={saveAvertissement} />
    </ModalFormContainer>
  );
};

export default AddAvertissement;
