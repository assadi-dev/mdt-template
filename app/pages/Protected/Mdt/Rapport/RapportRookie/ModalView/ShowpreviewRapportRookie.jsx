import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import clsx from "clsx";
import PreviewDocument from "../../../../../../components/Modal/PreviewDocument";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { Row } from "../../../../../../components/PageContainer";
import {
  AcquisitionRowSection,
  TitleAcquisition,
} from "../../../PoliceAcademy/ConsultationRapportRookie/ConsultationRapportRookie.styled";
import RowAcquisition from "../../../PoliceAcademy/ConsultationRapportRookie/ModalView/RowAcquisition";
import { datetimeFormatFr } from "../../../../../../services/utils/dateFormat";

const ShowpreviewRapportRookie = ({ payload, onCloseModal, ...props }) => {
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
            <span className="text-bolder">Agent: </span>
            {agentFullname}
          </p>
          <p>
            <span className="text-bolder">Type de patrouille: </span>
            {patrolType}
          </p>
          <p>
            <span className="text-bolder">Rookie concerné: </span>
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

export default ShowpreviewRapportRookie;
