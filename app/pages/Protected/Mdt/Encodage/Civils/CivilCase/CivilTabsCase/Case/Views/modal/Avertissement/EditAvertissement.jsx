import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import AvertissementForm from "../../Form/AvertissementForm";
import {
  addAvertissement,
  editAvertissement,
} from "../../../../../../../../../../../features/Civils/Reports/AvertissementSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { agent_iri } from "../../../../../../../../../../../services/api/instance";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";
import { save_avertissement, update_avertissement } from "./helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";
import useProcess from "../../../../../../../../../../../hooks/useProcess";

const EditAvertissement = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { idCivil } = useParams();
  const { process, toggleProcess } = useProcess();

  const MODAL_TIITLE = payload?.numeroAvertissement
    ? `Avertissement  n° ${payload?.numeroAvertissement}`
    : `????`;
  const id = payload.id;

  const saveAvertissement = async (values) => {
    try {
      toggleProcess();
      delete values.agent;
      delete values.civil;
      delete values.createdAt;
      await update_avertissement(id, values);

      dispatch(editAvertissement(values));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">{MODAL_TIITLE}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <AvertissementForm
        defaultValues={payload}
        labelSubmit="Mettre à jour"
        onSubmitValue={saveAvertissement}
        process={process}
      />
    </ModalFormContainer>
  );
};

export default EditAvertissement;
