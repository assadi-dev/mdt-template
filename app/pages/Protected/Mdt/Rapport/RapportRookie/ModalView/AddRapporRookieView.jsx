import React from "react";
import { HeaderModal } from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { useSelector } from "react-redux";
import useProcess from "../../../../../../hooks/useProcess";

import { RapporRookieModalCOntainer } from "../RapportRookie.styled";
import RapportRookieForm from "./Form/RapportRookieForm";

const AddRapporRookieView = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );

  const submit = (values) => {
    try {
      toggleProcess();
      values.idAgent = idAgent;

      console.log(values);
    } catch (error) {
    } finally {
      toggleProcess();
    }
  };

  return (
    <RapporRookieModalCOntainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un rapport</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <RapportRookieForm process={process} submitValue={submit} />
    </RapporRookieModalCOntainer>
  );
};

export default AddRapporRookieView;
