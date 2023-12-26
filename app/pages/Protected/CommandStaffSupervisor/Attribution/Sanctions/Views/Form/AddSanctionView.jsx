import React from "react";
import { ModalFormSanctionContainer } from "../../AttributionSanction.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import FormSanctions from "./FormSanctions";
import { agent_iri } from "../../../../../../../services/api/instance";
import { useDispatch, useSelector } from "react-redux";

const AddSanctionView = ({ onCloseModal, ...props }) => {
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  const submitSanction = async (values) => {
    values.agent = agent_iri + authenticateUser.idAgent;
    console.log(values);
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
