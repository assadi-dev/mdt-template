import React from "react";
import {
  AddBtnRapporIncident,
  AddBtnRapporIntervention,
  RapportInterventionPageContainer,
} from "./RapportIntervention.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowRapportIntervention from "./ShowRapportIntervention";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../../hooks/useModalState";
import {
  ADD_RAPPORT_INTERVENTION,
  DELETE_RAPPORT_INTERVENTION,
  EDIT_RAPPORT_INTERVENTION,
  listOfRapportInterventionView,
} from "./ModalView/listOfRapportInterventionView";

const RapportIntervention = () => {
  const { modalState, openModal, closeModal } = useModalState();

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
      Header: "Date et heure d'intervention",
      accessor: "createdAt",
    },
    {
      Header: "N° du rapport",
      accessor: "numeroRaport",
    },
    {
      Header: "Rapport",
      accessor: "",
      Cell: () => <ShowRapportIntervention />,
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canDelete={true}
          canEdit={true}
          onEdit={() => handleClickEditBtn(row.original)}
          onDelete={() => handleClickDeleteBtn(row.original)}
        />
      ),
    },
  ];

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_RAPPORT_INTERVENTION,
    });
  };
  const handleClickEditBtn = (rapportIntervention) => {
    openModal({
      view: EDIT_RAPPORT_INTERVENTION,
      data: rapportIntervention,
    });
  };
  const handleClickDeleteBtn = (rapportIntervention) => {
    openModal({
      view: DELETE_RAPPORT_INTERVENTION,
      data: rapportIntervention,
    });
  };

  const collections = [
    {
      id: 15,
      matricule: "103",
      agent: "Alyson Finley",
      createdAt: "01-10-2023 à 22:35",
      numeroRaport: 25,
      raport: 1,
      numeraRapport: "0001",
      officierimplique: "Taylor Moor, Mickel jackson",
      typeIncident: "usage d'arme à feu",
      emplacement: "central park",
      corpsIntervention: "test rapport intervention",
    },
    {
      id: 15,
      matricule: "106",
      agent: "Alyson Finley",
      createdAt: "01-10-2023 à 22:35",
      numeroRaport: 25,
      raport: 18,
      numeraRapport: "0001",
      officierimplique: "Taylor Moor, Mickel jackson",
      typeIncident: "usage d'arme à feu",
      emplacement: "central park",
      corpsIntervention: "test rapport intervention",
    },
  ];

  return (
    <RapportInterventionPageContainer>
      <RowAction style={{ height: "100px" }}>
        <div></div>
        <AddBtnRapporIntervention
          className="bg-btn-alt-theme-color"
          onClick={handleClickAddbtn}
        >
          Ajouter
        </AddBtnRapporIntervention>
      </RowAction>
      <DataTable
        className="table"
        columns={COLUMNS}
        isLoading={false}
        isSuccess={true}
        data={collections}
      />

      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfRapportInterventionView}
          />
        </Modal>,
        document.body
      )}
    </RapportInterventionPageContainer>
  );
};

export default RapportIntervention;
