import React from "react";
import {
  AddDossierFusilladeBtn,
  FusilladePageContainer,
} from "./Fusillade.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowDossierFussilade from "./ShowDossierFussilade";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import useModalState from "../../../../../hooks/useModalState";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import { createPortal } from "react-dom";
import {
  ADD_DOSSIER_FUSILLADE,
  DELETE_DOSSIER_FUSILLADE,
  EDIT_DOSSIER_FUSILLADE,
  listOfDossierFusilladeView,
} from "./ModalView/ListDossierFusillade";

const Fusillade = () => {
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
      Header: "Date et heure de la fusillade",
      accessor: "createdAt",
    },
    {
      Header: "N° du rapport",
      accessor: "numeroDossier",
    },
    {
      Header: "Rapport",
      accessor: "",
      Cell: () => <ShowDossierFussilade />,
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canDelete={true}
          canEdit={true}
          onDelete={() => handleClickDelete(row.original)}
          onEdit={() => handleClickEdit(row.original)}
        />
      ),
    },
  ];

  const collections = [
    {
      id: 15,
      matricule: "103",
      agent: "Alyson Finley",
      createdAt: "01-10-2023 à 22:35",
      numeroDossier: 25,
      rapport: "",
      firstGroupe: "groupe1",
      secondGroupe: "groupe2",
      lieux: "Central Park",
      recit: "Ras",
      saisies: [
        {
          id: 1456,
          fullname: "Hernade Lucas",
          saisie: "2 x pochon",
          appartenance: "Ballas",
        },
        {
          id: 1459,
          fullname: "Hernade Martinez",
          saisie: "25 x pochon",
          appartenance: "Ballas",
        },
      ],
    },
  ];

  const handleClickAdd = () => {
    openModal({
      view: ADD_DOSSIER_FUSILLADE,
    });
  };

  const handleClickDelete = (dossierFusillade) => {
    openModal({
      view: DELETE_DOSSIER_FUSILLADE,
      data: dossierFusillade,
    });
  };
  const handleClickEdit = (dossierFusillade) => {
    openModal({
      view: EDIT_DOSSIER_FUSILLADE,
      data: dossierFusillade,
    });
  };

  return (
    <>
      <FusilladePageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddDossierFusilladeBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickAdd}
          >
            Ajouter
          </AddDossierFusilladeBtn>
        </RowAction>
        <DataTable
          className="table"
          columns={COLUMNS}
          isLoading={false}
          isSuccess={true}
          data={collections}
        />
      </FusilladePageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfDossierFusilladeView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default Fusillade;
