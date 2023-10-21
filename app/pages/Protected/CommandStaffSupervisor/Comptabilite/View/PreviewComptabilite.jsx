import React from "react";
import PreviewDocument from "../../../../../components/Modal/PreviewDocument";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { Row } from "../../../../../components/PageContainer";
import MarkdownPreview from "@uiw/react-markdown-preview";

const PreviewComptabilite = ({ payload, onCloseModal, ...props }) => {
  const TITLE_DOCUMENT = `Demande comptabilité n° ${payload?.numeroDemandeComptabilite}`;

  return (
    <PreviewDocument
      title={TITLE_DOCUMENT}
      onCloseModal={onCloseModal}
      {...props}
    >
      <PreviewDocumentHeader>
        <Row style={{ marginTop: "18px" }}>
          <p className="agent">
            <strong>Agent: </strong> {payload?.agent}
          </p>
        </Row>
        <Row>
          <p className="objet">
            <strong>Objet: </strong> {payload?.objetDemande}
          </p>
        </Row>
        <Row className="justiy-content-end">
          <p className="date">{payload?.createdAt}</p>
        </Row>
        <Row className="justiy-content-end">
          <p className="montant">
            <strong>Montant: </strong>
            {payload?.amount}$
          </p>
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

export default PreviewComptabilite;
