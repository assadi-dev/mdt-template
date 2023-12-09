import React from "react";
import { HeaderModal } from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { useDispatch, useSelector } from "react-redux";
import useProcess from "../../../../../../hooks/useProcess";

import { RapporRookieModalCOntainer } from "../RapportRookie.styled";
import RapportRookieForm from "./Form/RapportRookieForm";
import { saveCreateRapportRookie } from "./Form/helpers";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import { addRookieReport } from "../../../../../../features/RookieReport/RookieReport.slice";

const AddRapporRookieView = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const dispatch = useDispatch();
  const submit = async (values) => {
    try {
      toggleProcess();
      values.agent = `api/agents/${idAgent}`;
      values.agentFullname = `${matricule}-${firstname} ${lastname}`;
      const acquisitions = values.acquisitions;
      delete values.acquisitions;
      const report = values;

      const data = await saveCreateRapportRookie(report, acquisitions);

      dispatch(addRookieReport(data));
      onCloseModal();
      toastSuccess();
    } catch (error) {
      console.log(error);
      toastError();
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
