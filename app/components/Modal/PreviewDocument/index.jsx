import React from "react";
import {
  PreviewDocumentBody,
  PreviewDocumentContainer,
} from "./PreviewDocument.styled";

const PreviewDocument = ({ children, ...props }) => {
  return <PreviewDocumentBody {...props}>{children}</PreviewDocumentBody>;
};

export default PreviewDocument;
