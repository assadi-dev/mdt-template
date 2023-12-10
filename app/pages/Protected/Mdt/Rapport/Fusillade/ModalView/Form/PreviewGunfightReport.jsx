import React from "react";
import PreviewDocument from "../../../../../../../components/Modal/PreviewDocument";
import clsx from "clsx";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { Row } from "../../../../../../../components/PageContainer";
import { datetimeFormatFr } from "../../../../../../../services/utils/dateFormat";
import MarkdownPreview from "@uiw/react-markdown-preview";
import PreviewGunfightListSeizures from "./PreviewGunfightListSeizures";

const PreviewGunfightReport = ({ payload, onCloseModal, ...props }) => {
  const {
    numeroReport,
    agentFullname,
    lead,
    firstGroup,
    secondGroup,
    location,
    createdAt,
    recit,
    seized,
  } = payload;

  const TITLE = `Consultation du rapport N°${numeroReport || "?????"}`;

  return (
    <PreviewDocument
      title={TITLE}
      onCloseModal={onCloseModal}
      className={clsx(props.className, "form-theme-color")}
    >
      <PreviewDocumentHeader>
        <div>
          <p>
            <span className="text-bolder">Agent: </span>
            {agentFullname}
          </p>
          <p>
            <span className="text-bolder">Lead: </span>
            {lead}
          </p>
          <p>
            <span className="text-bolder">Groupe1: </span>
            {firstGroup}
          </p>
          <p>
            <span className="text-bolder">Groupe1: </span>
            {secondGroup}
          </p>
          <p>
            <span className="text-bolder">lieu(x): </span>
            {location}
          </p>
        </div>
        <Row className="justiy-content-end">
          <p>{datetimeFormatFr(createdAt?.date)}</p>
        </Row>
      </PreviewDocumentHeader>

      <PreviewGunfightListSeizures seizures={seized} />
      <TextContent>
        <p className="mb-1">
          <span className="text-bolder ">Récit de l'intervention </span>
        </p>
        <MarkdownPreview className="theme-markdownPreview" source={recit} />
      </TextContent>
    </PreviewDocument>
  );
};

export default PreviewGunfightReport;
