import React from "react";
import PreviewDocument from "../../../../../../../components/Modal/PreviewDocument";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Row } from "../../../../../../../components/PageContainer";

const PreviewSanctionView = ({ payload, onCloseModal, ...props }) => {
  const TITLE_DOCUMENT = payload?.numeroDocument
    ? `Sanction n° ${payload.numeroDocument}`
    : `Aperçu de la sanction`;

  return (
    <PreviewDocument
      title={TITLE_DOCUMENT}
      onCloseModal={onCloseModal}
      {...props}
    >
      <PreviewDocumentHeader>
        <Row style={{ marginTop: "18px" }}>
          <p className="agent">
            <strong>Decideur: </strong> {payload?.decideur}
          </p>
        </Row>
        <Row>
          <p className="objet">
            <strong>Agent concerné: </strong> {payload?.agentConcerne}
          </p>
        </Row>
        <Row className="justiy-content-between">
          <p>
            {" "}
            <strong>Type de sanction: </strong> {payload?.typeSanction}
          </p>
          <p className="date">{payload?.createdAt}</p>
        </Row>
      </PreviewDocumentHeader>
      <TextContent>
        <MarkdownPreview
          className="theme-markdownPreview"
          source={payload?.raison}
        />
      </TextContent>
    </PreviewDocument>
  );
};

export default PreviewSanctionView;
