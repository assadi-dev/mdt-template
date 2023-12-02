import React from "react";
import useProcess from "../../../../../../../hooks/useProcess";
import { useDispatch, useSelector } from "react-redux";
import FormPlainte from "./FormPlainte";
import { agent_iri } from "../../../../../../../services/api/instance";
import { plaintDefaultValues } from "./Schema";
import { postSavePlainte } from "../../helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../services/utils/alert";

const AddPlainteForm = ({ onCloseModal = () => {} }) => {
  const { process, toggleProcess } = useProcess();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );

  const savePlainte = async (values) => {
    toggleProcess();
    try {
      await postSavePlainte(values);
      onCloseModal();
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  const defaultvalues = {
    ...plaintDefaultValues,
    agent: agent_iri + idAgent,
  };
  return (
    <FormPlainte
      defaultValues={defaultvalues}
      process={process}
      submitValues={savePlainte}
    />
  );
};

export default AddPlainteForm;
