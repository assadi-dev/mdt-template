import React from "react";
import { AddBtn, PlaintPageContainer } from "./Plainte.styled";
import {
  ActionButton,
  RowAction,
} from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import Showplainte from "./Showplainte";
import StatePlainte from "./StatePlainte";
import useModalState from "../../../../../hooks/useModalState";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalContent from "../../../../../components/Modal/RenderModalFormContent";
import { createPortal } from "react-dom";
import {
  ADD_PLAINTE,
  ListPlaintModalView,
  SHOW_PLAINTE,
} from "./Modal/ListPlaintModalView";

const Plainte = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const showPlainte = (plainte) => {
    openModal({
      view: SHOW_PLAINTE,
      data: plainte,
    });
  };

  const COLUMNS = [
    { Header: "Matricule", accessor: "matricule" },
    { Header: "Agent", accessor: "agent" },
    { Header: "Dépositaire", accessor: "depositaire" },
    { Header: "Accusé", accessor: "accused" },
    { Header: "Date et Heure", accessor: "createdAt" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <Showplainte
          plainte={row?.original}
          onShowPreviewPlainte={showPlainte}
        />
      ),
    },
    {
      Header: "Affaire classé",
      accessor: "",
      Cell: () => <StatePlainte className="toggle-custom" />,
    },
  ];

  const collections = [
    {
      id: 1,
      matricule: "23",
      agent: "Alyson Finley",
      depositaire: "Alvaro Martinez",
      accused: "Pedro Alonzo",
      createdAt: "30/09/2023 à 14:43",
    },
  ];

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_PLAINTE,
    });
  };

  return (
    <>
      <PlaintPageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickAddbtn}
          >
            Ajouter
          </AddBtn>
        </RowAction>

        <DataTable
          data={collections}
          className="table"
          columns={COLUMNS}
          isLoading={false}
          isSuccess={true}
        />
      </PlaintPageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={ListPlaintModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default Plainte;
