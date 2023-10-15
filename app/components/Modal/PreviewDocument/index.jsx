import React from "react";
import {
  PreviewDocumentBody,
  PreviewDocumentContainer,
} from "./PreviewDocument.styled";

const PreviewDocument = ({ title, children, onCloseModal, ...props }) => {
  return <PreviewDocumentBody>{children}</PreviewDocumentBody>;
};

export default PreviewDocument;
