import React from "react";
import {
  AddBtnRapportIncident,
  RapportIncidentPageContainer,
} from "./Rapportincident.styled";
import { ActionButton } from "../../../../../components/DataTable/DataTable.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import ShowRapportIncident from "./ShowRapportIncident";
import {
  ADD_RAPPORT_INCIDENT,
  DELETE_RAPPORT_INCIDENT,
  EDIT_RAPPORT_INCIDENT,
  SHOW_RAPPORT_INCIDENT,
  listOfRapportIncidentView,
} from "./ModalView/listOfRapportIncidentView";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import useModalState from "../../../../../hooks/useModalState";

const RapportIncident = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const handleClickShowBtn = (rapportIncident) => {
    openModal({
      view: SHOW_RAPPORT_INCIDENT,
      data: rapportIncident,
    });
  };
  const handleClickAddBtn = () => {
    openModal({
      view: ADD_RAPPORT_INCIDENT,
    });
  };
  const handleClickEditBtn = (rapportIncident) => {
    openModal({
      view: EDIT_RAPPORT_INCIDENT,
      data: rapportIncident,
    });
  };
  const handleClickDeleteBtn = (rapportIncident) => {
    openModal({
      view: DELETE_RAPPORT_INCIDENT,
      data: rapportIncident,
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
      Header: "Date et heure de l'incident",
      accessor: "createdAt",
    },
    {
      Header: "N° de rapport",
      accessor: "numeraRapport",
    },
    {
      Header: "Rapport",
      accessor: "raport",
      Cell: ({ row }) => (
        <ShowRapportIncident
          rapportIncident={row.original}
          onShowRapport={handleClickShowBtn}
        />
      ),
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original.id}
          canDelete={true}
          canEdit={true}
          onEdit={() => handleClickEditBtn(row.original)}
          onDelete={() => handleClickDeleteBtn(row.original)}
        />
      ),
    },
  ];

  const collections = [
    {
      id: 12,
      matricule: 129,
      agent: "Bob Marley",
      createdAt: "01/10/2023",
      raport: 1,
      numeraRapport: "0001",
    },
  ];

  return (
    <>
      <RapportIncidentPageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddBtnRapportIncident
            className="bg-btn-alt-theme-color"
            onClick={handleClickAddBtn}
          >
            Ajouter
          </AddBtnRapportIncident>
        </RowAction>

        <DataTable
          data={collections}
          className="table"
          columns={COLUMNS}
          isLoading={false}
          isSuccess={true}
        />
      </RapportIncidentPageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfRapportIncidentView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default RapportIncident;
