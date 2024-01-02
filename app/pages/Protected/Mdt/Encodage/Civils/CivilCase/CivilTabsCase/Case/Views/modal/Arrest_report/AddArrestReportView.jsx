import React from "react";
import { HeaderModal } from "../../../../../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";
import { ArrestReportFormContainer } from "./ArrestReport.styled";
import ArrestReportForm from "../../Form/ArrestReportForm";

const AddArrestReportView = ({ payload, onCloseModal, ...props }) => {
  return (
    <ArrestReportFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Rapport d'arrestation</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <ArrestReportForm />
    </ArrestReportFormContainer>
  );
};

export default AddArrestReportView;
