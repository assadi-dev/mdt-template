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

const ShowRapport = ({ payload, onCloseModal, ...props }) => {
  const commentaire = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vel aliquam illo officiis voluptatibus commodi? Sequi quibusdam earum labore, magnam molestiae excepturi iure consequatur quaerat nesciunt adipisci maiores est recusandae.
  Recusandae quisquam culpa possimus aliquid deleniti, perspiciatis nam odio doloribus nesciunt architecto voluptatibus repellendus eos quam unde ratione neque iure modi dicta natus rem ducimus omnis impedit. Nam, ab veritatis!
  Distinctio quidem quibusdam, eos quos quia iusto culpa maiores expedita magni qui! Dolorem maxime repellat dolorum corporis omnis voluptatum amet quam provident? Necessitatibus autem odio fuga! Dolorum maxime placeat ducimus?`;

  return (
    <PreviewDocument
      title="Consultation du rapport"
      onCloseModal={onCloseModal}
      {...props}
    >
      <PreviewDocumentHeader>
        <div>
          <p>
            <span className="text-bolder">Agent: </span>103-Test Test
          </p>
          <p>
            <span className="text-bolder">Type de patrouille: </span> patrouille
            test
          </p>
        </div>
        <Row className="justiy-content-end">
          <p>2023-10-15 à 09:53</p>
        </Row>
        <Row className="justiy-content-end">
          <p>
            <span className="text-bolder">Rookie concerné: </span> 03-Test Test
          </p>
        </Row>
      </PreviewDocumentHeader>

      <TitleAcquisition> Acquisition </TitleAcquisition>
      <AcquisitionRowSection>
        <RowAcquisition />
      </AcquisitionRowSection>

      <TextContent>
        <MarkdownPreview
          className="theme-markdownPreview"
          source={commentaire}
        />
      </TextContent>
    </PreviewDocument>
  );
};

export default ShowRapport;
