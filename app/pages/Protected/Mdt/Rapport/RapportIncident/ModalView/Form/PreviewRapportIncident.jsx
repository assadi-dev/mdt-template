import React from "react";
import { retriveDocumentNum } from "../../../../../../../services/utils/rapport";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { Row } from "../../../../../../../components/PageContainer";
import PreviewDocument from "../../../../../../../components/Modal/PreviewDocument";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { datetimeFormatFr } from "../../../../../../../services/utils/dateFormat";

const PreviewRapportIncident = ({
  payload,
  onCloseModal = () => {},
  ...props
}) => {
  const TITLE_RAPPORT = `Rapport incident ${retriveDocumentNum(
    payload?.numeroReport
  )}`;

  const AGENT_FULLNAME = payload?.agent;

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
          {payload?.officerImplicated}
        </p>
        <Row className="justify-content-between">
          <p>
            <span className="text-bolder">Emplacement: </span>
            {payload?.location}
          </p>
          <p>{datetimeFormatFr(payload?.createdAt?.date)}</p>
        </Row>
      </PreviewDocumentHeader>

      <TextContent>
        <p className="text-center mb-1">
          <span className="text-bolder">Type d'incident: </span>
          {payload?.incidentType}
        </p>
        <p className="text-bold  mb-1">Corps de l'incident :</p>
        <MarkdownPreview
          className="theme-markdownPreview"
          source={payload?.commentText}
        />
      </TextContent>
    </PreviewDocument>
  );
};

export default PreviewRapportIncident;
