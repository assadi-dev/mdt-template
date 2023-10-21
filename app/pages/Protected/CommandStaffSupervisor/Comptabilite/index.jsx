import React from "react";
import { ComptabiliteCsPage } from "./Comptabilite.styled";
import { RowAction } from "../../../../components/PageContainer";
import DataTable from "../../../../components/DataTable";
import useDelayed from "../../../../hooks/useDelayed";
import useLoader from "../../../../hooks/useLoader";
import ActionCell from "./ActionCell";
import ShowDemandeComptability from "./ShowDemandeComptability";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../hooks/useModalState";
import { SHOW_DEMANDE_COMPTABILITE, listOfView } from "./View/ListOfView";

const Comptabilite = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);
  const { modalState, openModal, closeModal } = useModalState();

  const handleShowRapport = (rapport) => {
    console.log(rapport);
    openModal({
      view: SHOW_DEMANDE_COMPTABILITE,
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
      Header: "Objet de la demande",
      accessor: "objetDemande",
    },
    {
      Header: "Montant",
      accessor: "amount",
    },
    {
      Header: "Rapport",
      accessor: "",
      Cell: ({ row }) => (
        <ShowDemandeComptability
          rapport={row.original}
          onShowDemande={handleShowRapport}
        />
      ),
    },
    {
      Header: "Date et Heure",
      accessor: "createdAt",
    },
    {
      Header: "Actions",
      accessor: "demandeState",
      Cell: ({ value }) => <ActionCell demandeState={value} />,
    },
  ];

  const collections = [
    {
      matricule: 209,
      agent: "Alyson Finley",
      objetDemande: "Remboursement Voiture GND",
      amount: 3006,
      demandeState: "pending",
      createdAt: "30/09/2023 à 15:00",
    },

    {
      matricule: 209,
      agent: "Alyson Finley",
      objetDemande: "Remboursement Kevlar",
      amount: 1500,
      demandeState: "rejected",
      createdAt: "30/09/2023 à 15:00",
    },
    {
      matricule: 209,
      agent: "Alyson Finley",
      objetDemande: "Remboursement Voiture GND",
      amount: 3006,
      demandeState: "accepted",
      createdAt: "30/09/2023 à 15:00",
    },
  ];

  return (
    <ComptabiliteCsPage>
      <RowAction className="row-action-page"></RowAction>
      <DataTable
        className="table-align-center-not-first"
        columns={COLUMNS}
        data={collections}
        isLoading={loaderState}
        manualPagination={true}
        isSuccess={!loaderState}
      />
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfView}
          />
        </Modal>,
        document.body
      )}
    </ComptabiliteCsPage>
  );
};

export default Comptabilite;
