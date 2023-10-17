import React from "react";
import {
  AddBtnRapportRookie,
  RapportRookiePageContainer,
} from "./RapportRookie.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowRapportRookie from "./ShowRapportRookie";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import useModalState from "../../../../../hooks/useModalState";
import {
  ADD_RAPPORT_ROOKIE,
  SHOW_RAPPORT_ROOKIE,
  listOfRapporRookieView,
} from "./ModalView/listRapportView";
import { createPortal } from "react-dom";

const RapportRookie = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_RAPPORT_ROOKIE,
    });
  };

  const handlShowRapport = (rapport) => {
    openModal({
      view: SHOW_RAPPORT_ROOKIE,
      data: rapport,
    });
  };

  const COLUMNS = [
    {
      Header: "Matricule",
      accessor: "matricule",
    },
    {
      Header: "Agent",
      accessor: "agent",
    },
    {
      Header: "Matricule du rookie",
      accessor: "matriculeRookie",
    },
    {
      Header: "Nom du rookie",
      accessor: "rookieName",
    },
    {
      Header: "Date et heure",
      accessor: "createdAt",
    },
    {
      Header: "Action",
      accessor: "",
      Cell: () => <ShowRapportRookie onShowRapport={handlShowRapport} />,
    },
  ];

  const collections = [
    {
      matricule: 103,
      agent: "Alyson Finley",
      matriculeRookie: 153,
      rookieName: "Sulivan O'Bryan",
      createdAt: "01-09-2023 à 13h00",
      commentaire: "No comment",
    },
  ];

  return (
    <>
      <RapportRookiePageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddBtnRapportRookie
            className="bg-btn-alt-theme-color"
            onClick={handleClickAddbtn}
          >
            Ajouter
          </AddBtnRapportRookie>
        </RowAction>
        <DataTable
          className="table"
          columns={COLUMNS}
          isLoading={false}
          isSuccess={true}
          data={collections}
        />
      </RapportRookiePageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfRapporRookieView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default RapportRookie;
