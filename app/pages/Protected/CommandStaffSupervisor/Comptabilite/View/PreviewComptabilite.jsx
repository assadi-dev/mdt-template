import React from "react";
import PreviewDocument from "../../../../../components/Modal/PreviewDocument";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { Row } from "../../../../../components/PageContainer";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { ShowAgent } from "../../../Services/DemandesComptabilite/helpers";

const PreviewComptabilite = ({ payload, onCloseModal, ...props }) => {
  const TITLE_DOCUMENT = `Demande comptabilité n° ${
    payload?.numeroDemandeComptabilite || ""
  }`;

  const { matricule, firstname, lastname } = payload;

  const CLEAN_NAME_AGENT = ShowAgent({ matricule, firstname, lastname });
  return (
    <PreviewDocument
      title={TITLE_DOCUMENT}
      onCloseModal={onCloseModal}
      className="modal-theme-color"
    >
      <PreviewDocumentHeader>
        <Row style={{ marginTop: "18px" }}>
          <p className="agent">
            <strong>Agent: </strong> {CLEAN_NAME_AGENT}
          </p>
        </Row>
        <Row>
          <p className="objet">
            <strong>Objet: </strong> {payload?.subject}
          </p>
        </Row>
        <Row className="justify-content-end">
          <p className="date">{payload?.date}</p>
        </Row>
        <Row className="justify-content-end">
          <p className="montant">
            <strong>Montant: </strong>
            {payload?.amount}$
          </p>
        </Row>
      </PreviewDocumentHeader>

      <TextContent>
        <MarkdownPreview
          className="theme-markdownPreview"
          source={payload?.reason}
        />
      </TextContent>
    </PreviewDocument>
  );
};

export default PreviewComptabilite;
