import React, { useState } from "react";
import {
  AddDemandeBtn,
  DemandeCompatibiliteContainer,
} from "./DemandeComptabilite.styled";

import useModalState from "../../../../hooks/useModalState";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import DataTable from "../../../../components/DataTable";
import { PageContainer, RowAction } from "../../../../components/PageContainer";
import StatusCell from "./StatusCell";
import RenderModalFormContent from "../../../../components/Modal/RenderModalContent";
import listOfView, { ADD_DEMANDE } from "./ViewsModal/listOfView";
import { useDispatch, useSelector } from "react-redux";

const DemandeComptability = () => {
  const dispatch = useDispatch();

  const { status, count } = useSelector(
    (state) => state.AccountingRequestByPageReducer
  );

  const { modalState, toggleModal, closeModal } = useModalState();

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
      status: "pending",
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

  const handleClickAdd = () => {
    toggleModal({
      view: ADD_DEMANDE,
      data: null,
    });
  };

  return (
    <>
      <PageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddDemandeBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickAdd}
          >
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
      {createPortal(
        <Modal isOpen={modalState.isOpen} onClose={closeModal}>
          <RenderModalFormContent
            enumOfView={listOfView}
            view={modalState.view}
            onCloseModal={closeModal}
            payload={modalState.data}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default DemandeComptability;
