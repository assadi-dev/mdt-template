import React from "react";
import { CaseModalFormContainer } from "../../../Case.styled";
import { HeaderModal } from "../../../../../../../../../../../components/Forms/FormView.styled";
import TrafficForm from "../../Form/TrafficForm";
import CloseModalBtn from "../../../../../../../../../../../components/Modal/CloseModalBtn";

const AddTraffic = ({ payload, onCloseModal, ...props }) => {
  return (
    <CaseModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title ">Traffic</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <TrafficForm />
    </CaseModalFormContainer>
  );
};

export default AddTraffic;
