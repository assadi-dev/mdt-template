import React from "react";
import {
  PreviewDocumentBody,
  PreviewDocumentContainer,
  PreviewDocumentHeader,
  TextContent,
} from "../DemandeComptabilite.styled";
import { HeaderModal } from "../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Row } from "../../../../../components/PageContainer";
import { motion } from "framer-motion";
import { formAnimate } from "./Animation";

const PreviewDocument = ({ previewData, onCloseModal, ...props }) => {
  //console.log(previewData);
  if (!previewData) return "donnée manquants";

  const { agent, subject, date, montant, raison } = previewData;

  return (
    <motion.div
      variants={formAnimate}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <PreviewDocumentBody>
        <Row style={{ marginTop: "18px" }}>
          <p className="agent">
            <strong>Agent: </strong> {agent}
          </p>
        </Row>
        <Row>
          <p className="objet">
            <strong>Objet: </strong> {subject}
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
    </motion.div>
  );
};

export default PreviewDocument;
