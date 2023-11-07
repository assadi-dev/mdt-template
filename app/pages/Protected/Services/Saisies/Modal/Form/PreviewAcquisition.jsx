import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";

import { ShowAgent } from "../../helpers";
import { Row } from "../../../../../../components/PageContainer";
import PreviewDocument from "../../../../../../components/Modal/PreviewDocument";

const PreviewAcquisition = ({ payload, onCloseModal, ...props }) => {
  console.log(payload);

  const { matricule, firstname, lastname } = payload;

  const TITLE_DOCUMENT = `Saisie`;
  const CLEAN_NAME_AGENT = ShowAgent({ matricule, firstname, lastname });

  return (
    <PreviewDocument
      title={TITLE_DOCUMENT}
      onCloseModal={onCloseModal}
      {...props}
    >
      <PreviewDocumentHeader>
        <Row style={{ marginTop: "18px" }}>
          <p className="agent">
            <strong>Agent: </strong> {CLEAN_NAME_AGENT}
          </p>
        </Row>
        <Row style={{ marginTop: "18px" }}>
          <p className="agent">
            <strong>Post: </strong> {payload?.post}
          </p>
        </Row>

        <Row className="justiy-content-end">
          <p className="date">{payload?.dateOfAcquisition}</p>
        </Row>
      </PreviewDocumentHeader>

      <TextContent>
        <MarkdownPreview
          className="theme-markdownPreview"
          source={payload?.acquisitionDescription}
        />
      </TextContent>
    </PreviewDocument>
  );
};

export default PreviewAcquisition;
