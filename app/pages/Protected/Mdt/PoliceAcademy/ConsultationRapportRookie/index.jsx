import React from "react";
import { PageContainer, Row } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ActionCell from "./ActionCell";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../../hooks/useModalState";
import listRapportView, {
  DELETE_RAPPORT,
  SHOW_RAPPORT,
} from "./ModalView/listRapportView";

const ConsultationRapportRookie = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const showRapport = (raport) => {
    openModal({ view: SHOW_RAPPORT, data: raport });
  };
  const deleteRapport = (raport) => {
    openModal({ view: DELETE_RAPPORT, data: raport });
  };

  const columns = [
    { Header: "Agent", accessor: "agent" },
    { Header: "Rookie concerné", accessor: "rookieConcerned" },
    { Header: "Date", accessor: "createdAt" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCell
          onShowRapport={showRapport}
          onDelete={deleteRapport}
          rapportdata={row.original}
        />
      ),
    },
  ];

  const collections = [
    {
      id: 12,
      agent: "96-Tommy-Stewart",
      rookieConcerned: "103-Alyson-Finley",
      createdAt: "07-09-2023 07:25",
    },
  ];

  return (
    <>
      <PageContainer>
        <Row style={{ height: "100px" }}></Row>
        <DataTable
          data={collections}
          columns={columns}
          isLoading={false}
          isSuccess={true}
        />
      </PageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen} onClose={closeModal}>
          <RenderModalFormContent
            view={modalState.view}
            onCloseModal={closeModal}
            payload={modalState.data}
            enumOfView={listRapportView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default ConsultationRapportRookie;
