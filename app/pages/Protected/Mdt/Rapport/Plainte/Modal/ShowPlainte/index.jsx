import React from "react";
import PreviewDocument from "../../../../../../../components/Modal/PreviewDocument";
import {
  PreviewDocumentHeader,
  TextContent,
} from "../../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import { Button, Row } from "../../../../../../../components/PageContainer";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { DepotTextContent, RowPreuveButton } from "../../Plainte.styled";

const ShowPlainte = ({ onCloseModal = () => {}, payload, ...props }) => {
  const deposition = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ducimus provident non vel alias maxime delectus, cum aperiam natus ipsum tenetur totam, reprehenderit odit. Soluta pariatur perspiciatis eius atque unde?`;

  return (
    <PreviewDocument title="Plainte" onCloseModal={onCloseModal} {...props}>
      <RowPreuveButton>
        <Button className="bg-btn-theme-color" type="button">
          Voir les preuves
        </Button>
      </RowPreuveButton>
      <PreviewDocumentHeader>
        <p>
          <span className="text-bolder">Agent: </span>
          {payload?.matricule + "-" + payload?.agent}
        </p>
        <p>
          <span className="text-bolder">Dépositaire: </span>
          {payload?.depositaire}
        </p>
        <Row className="justiy-content-between">
          <p>
            <span className="text-bolder">Accusé: </span>
            {payload?.accused}
          </p>
          <p>2023-10-15 à 18:34</p>
        </Row>
      </PreviewDocumentHeader>

      <DepotTextContent>
        <p className="depot-title">Depot :</p>
        <MarkdownPreview
          className="theme-markdownPreview"
          source={deposition}
        />
      </DepotTextContent>
    </PreviewDocument>
  );
};

export default ShowPlainte;
