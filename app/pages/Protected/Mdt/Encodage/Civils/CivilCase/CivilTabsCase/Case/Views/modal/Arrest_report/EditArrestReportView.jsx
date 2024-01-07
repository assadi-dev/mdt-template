import React from "react";
import { HeaderModal } from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import { ArrestReportFormContainer } from "./ArrestReport.styled";
import ArrestReportForm from "../../Form/ArrestReportForm";
import { MainViewContainer } from "../Arrest_folder/ArrestFolder.styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { agent_iri } from "../../../../../../../../../../../services/api/instance";
import {
  toastError,
  toastSuccess,
} from "../../../../../../../../../../../services/utils/alert";
import { cleanAgentMatricule } from "../../../../../../../../../../../services/utils/user";
import { save_arrestReport, update_arrestReport } from "./helpers";
import useProcess from "../../../../../../../../../../../hooks/useProcess";
import { editArrestReport } from "../../../../../../../../../../../features/Civils/Reports/ArrestReport.slice";
import { datetimeFormatISO8601 } from "../../../../../../../../../../../services/utils/dateFormat";

const EditArrestReportView = ({ payload, onCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const { process, toggleProcess } = useProcess();

  const MODAL_TIITLE = payload?.numeroArrestReport
    ? `Rapport d'arrestation n° ${payload?.numeroArrestReport}`
    : `????`;

  payload.dateOfEntry =
    payload?.dateOfEntry?.date &&
    datetimeFormatISO8601(payload?.dateOfEntry?.date);

  const submitArrestReport = async (values) => {
    try {
      toggleProcess();
      const id = values.id;
      delete values.agent;
      delete values.civil;
      delete values.createdAt;
      const result = await update_arrestReport(id, values);
      values.dateOfEntry = {
        date: values?.dateOfEntry,
      };

      dispatch(editArrestReport(values));
      toastSuccess();
      onCloseModal();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <ArrestReportFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">{MODAL_TIITLE}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <MainViewContainer>
        <ArrestReportForm
          defaultValues={payload}
          process={process}
          onSubmitValue={submitArrestReport}
          labelSubmit="Mettre à jour"
        />
      </MainViewContainer>
    </ArrestReportFormContainer>
  );
};

export default EditArrestReportView;
