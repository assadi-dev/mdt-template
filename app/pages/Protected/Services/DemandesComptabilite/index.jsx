import React, { useState } from "react";
import {
  AddDemandeBtn,
  DemandeCompatibiliteBody,
  DemandeCompatibiliteContainer,
  DemandeCompatibiliteFormContainer,
  FormFooter,
  HeadertitlePage,
  PreviewBtn,
  RowHeaderAction,
} from "./DemandeComptabilite.styled";
import {
  ErrorSection,
  FormContainer,
  SubmitButton,
} from "../../../../components/Forms/FormView.styled";
import { useRef } from "react";
import LexicalMarkdownEditor from "../../../../components/TextEditor/LexicalMarkdownEditor";
import MarkdowTextEditor from "../../../../components/TextEditor/MarkdowTextEditor";
import { useForm } from "react-hook-form";
import { datetimeFormatISO8601 } from "../../../../services/utils/dateFormat";
import useProcess from "../../../../hooks/useProcess";
import SpinnerButton from "../../../../components/Shared/Loading/SpinnerButton";
import useModalState from "../../../../hooks/useModalState";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import PreviewDocument from "./PreviewDocument";
import DataTable from "../../../../components/DataTable";
import { HeaderTableRow } from "../../../../components/DataTable/DataTable.styled";
import { PageContainer, RowAction } from "../../../../components/PageContainer";
import StatusCell from "./StatusCell";

const DemandeComptability = () => {
  const { modalState, toggleModal } = useModalState();

  const columns = [
    { Header: "Matricule", accessor: "matricule" },
    { Header: "Agent", accessor: "agent" },
    { Header: "Objet de la demande", accessor: "subject" },
    { Header: "Montant", accessor: "amount" },
    { Header: "Date et Heures", accessor: "createdAt" },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => <StatusCell status={value} />,
    },
  ];

  const collections = [
    {
      matricule: 123,
      agent: "11-harry-cavil",
      subject: "test",
      amount: 22,
      createdAt: "22-11-2023",
      status: "waiting",
    },
    {
      matricule: 123,
      agent: "11-harry-cavil",
      subject: "test",
      amount: 22,
      createdAt: "22-11-2023",
      status: "rejected",
    },
    {
      matricule: 123,
      agent: "11-harry-cavil",
      subject: "test",
      amount: 22,
      createdAt: "22-11-2023",
      status: "accepted",
    },
  ];

  return (
    <>
      <PageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddDemandeBtn className="bg-btn-alt-theme-color">
            Ajouter
          </AddDemandeBtn>
        </RowAction>
        <DemandeCompatibiliteContainer>
          <DataTable
            data={collections}
            className="table_omptablility"
            columns={columns}
            isLoading={false}
            isSuccess={true}
          />
        </DemandeCompatibiliteContainer>
      </PageContainer>
    </>
  );
};

export default DemandeComptability;
