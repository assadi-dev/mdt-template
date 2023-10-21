import React from "react";
import {
  HeaderModal,
  ModalFormContainer,
} from "../../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import { retriveDocumentNum } from "../../../../../../../services/utils/rapport";

const PreviewRapportIncident = ({
  payload,
  onCloseModal = () => {},
  ...props
}) => {
  const TITLE_RAPPORT = `Rapport incident ${retriveDocumentNum(
    payload?.numeroRapport
  )}`;

  return (
    <ModalFormContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">{TITLE_RAPPORT}</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
    </ModalFormContainer>
  );
};

export default PreviewRapportIncident;
