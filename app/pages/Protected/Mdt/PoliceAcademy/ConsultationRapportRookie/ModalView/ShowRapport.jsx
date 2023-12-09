import React from "react";
import PreviewDocument from "../../../../../../components/Modal/PreviewDocument";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { Row } from "../../../../../../components/PageContainer";
import MarkdownPreview from "@uiw/react-markdown-preview";
import {
  AcquisitionRowSection,
  TitleAcquisition,
} from "../ConsultationRapportRookie.styled";
import RowAcquisition from "./RowAcquisition";
import clsx from "clsx";
import { datetimeFormatFr } from "../../../../../../services/utils/dateFormat";

const ShowRapport = ({ payload, onCloseModal, ...props }) => {
  const {
    acquisitions,
    agentFullname,
    comment,
    createdAt,
    numeroReport,
    patrolType,
    rookieFullname,
  } = payload;

  const TITLE = `Consultation du rapport N°${numeroReport}`;

  return (
    <PreviewDocument
      title={TITLE}
      onCloseModal={onCloseModal}
      className={clsx(props.className, "form-theme-color")}
    >
      <PreviewDocumentHeader>
        <div>
          <p>
            <span className="text-bolder">Agent: </span> {agentFullname}
          </p>
          <p>
            <span className="text-bolder">Type de patrouille: </span>{" "}
            {patrolType}
          </p>
          <p>
            <span className="text-bolder">Rookie concerné: </span>{" "}
            {rookieFullname}
          </p>
        </div>
        <Row className="justiy-content-end">
          <p>{datetimeFormatFr(createdAt?.date)}</p>
        </Row>
      </PreviewDocumentHeader>

      <AcquisitionRowSection>
        <TitleAcquisition> Acquisition </TitleAcquisition>
        <RowAcquisition acquisitions={acquisitions} />
      </AcquisitionRowSection>

      <TextContent>
        <MarkdownPreview className="theme-markdownPreview" source={comment} />
      </TextContent>
    </PreviewDocument>
  );
};

export default ShowRapport;
