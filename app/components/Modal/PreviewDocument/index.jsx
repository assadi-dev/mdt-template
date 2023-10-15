import React from "react";
import {
  PreviewDocumentBody,
  PreviewDocumentContainer,
} from "./PreviewDocument.styled";
import { HeaderModal } from "../../Forms/FormView.styled";
import CloseModalBtn from "../CloseModalBtn";

const PreviewDocument = ({
  title,
  onCloseModal = () => {},
  children,
  ...props
}) => {
  return (
    <PreviewDocumentContainer {...props}>
      <HeaderModal>
        <h2 className="form-title"> {title} </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <PreviewDocumentBody>{children}</PreviewDocumentBody>
    </PreviewDocumentContainer>
  );
};

export default PreviewDocument;
