import React from "react";
import {
  PreviewDocumentBody,
  PreviewDocumentContainer,
  PreviewDocumentHeader,
  TextContent,
} from "./DemandeComptabilite.styled";
import { HeaderModal } from "../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../components/Modal/CloseModalBtn";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Row } from "../../../../components/PageContainer";

const PreviewDocument = ({ previewData, onCloseModal, ...props }) => {
  //console.log(previewData);
  if (!previewData) return "donnée manquants";

  const { agent, objet, date, montant, raison } = previewData;

  return (
    <PreviewDocumentContainer {...props}>
      <HeaderModal className="mb-3">
        <p className="form-title">Demande de comptabilité </p>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <PreviewDocumentBody>
        <Row style={{ marginTop: "18px" }}>
          <p className="agent">
            <strong>Agent: </strong> {agent}
          </p>
        </Row>
        <Row>
          <p className="objet">
            <strong>Objet: </strong> {objet}
          </p>
        </Row>
        <Row className="justiy-content-end">
          <p className="date">{date}</p>
        </Row>
        <Row className="justiy-content-end">
          <p className="montant">
            <strong>Montant: </strong>
            {montant} $
          </p>
        </Row>

        <TextContent>
          <MarkdownPreview className="theme-markdownPreview" source={raison} />
        </TextContent>
      </PreviewDocumentBody>
    </PreviewDocumentContainer>
  );
};

export default PreviewDocument;
