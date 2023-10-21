import React from "react";
import PreviewDocument from "../../../../../../../components/Modal/PreviewDocument";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { Row } from "../../../../../../../components/PageContainer";
import { retriveDocumentNum } from "../../../../../../../services/utils/rapport";
import MarkdownPreview from "@uiw/react-markdown-preview";

const PreviewRapportIntervention = ({ payload, onCloseModal, ...props }) => {
  const TITLE_RAPPORT = `Rapport incident ${retriveDocumentNum(
    payload?.numeroRapport
  )}`;

  const AGENT_FULLNAME =
    payload?.matricule + "-" + payload?.agent || "N/A-" + payload?.agent;

  return (
    <PreviewDocument
      title={TITLE_RAPPORT}
      onCloseModal={onCloseModal}
      {...props}
    >
      <PreviewDocumentHeader>
        <p>
          <span className="text-bolder">Agent: </span>
          {AGENT_FULLNAME}
        </p>
        <p>
          <span className="text-bolder">Officier impliqués: </span>
          {payload?.officierimplique}
        </p>
        <Row className="justiy-content-between">
          <p>
            <span className="text-bolder">Emplacement: </span>
            {payload?.emplacement}
          </p>
          <p>2023-10-15 à 18:34</p>
        </Row>
      </PreviewDocumentHeader>

      <TextContent>
        <p className="text-center mb-1">
          <span className="text-bolder">Type d'incident: </span>
          {payload?.typeIncident}
        </p>
        <p className="text-bold  mb-1">Corps de l'incident :</p>
        <MarkdownPreview
          className="theme-markdownPreview"
          source={payload?.corpsIntervention}
        />
      </TextContent>
    </PreviewDocument>
  );
};

export default PreviewRapportIntervention;
