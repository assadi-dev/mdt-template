import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import AvertissementForm from "../../Form/AvertissementForm";
import { addAvertissement } from "../../../../../../../../../../../features/Civils/Reports/AvertissementSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { agent_iri } from "../../../../../../../../../../../services/api/instance";

const AddAvertissement = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { idCivil } = useParams();
  const saveAvertissement = (values) => {
    values.agent = agent_iri + idCivil;
    values.civil = `api/civils/${idCivil}`;
    console.log(values);
    //dispatch(addAvertissement());
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
