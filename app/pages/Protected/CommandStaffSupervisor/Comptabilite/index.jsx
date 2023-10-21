import React, { useState } from "react";
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
import {
  SHOW_DEMANDE_COMPTABILITE,
  collections,
  listOfView,
} from "./View/ListOfView";

const Comptabilite = () => {
  const [data, setData] = useState(collections);

  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);
  const { modalState, openModal, closeModal } = useModalState();

  const handleShowRapport = (rapport) => {
    openModal({
      view: SHOW_DEMANDE_COMPTABILITE,
      data: rapport,
    });
  };

  const handleClickStateDemande = (payload, state) => {
    setData((current) => {
      current = [...current].map((demande) => {
        if (demande.id == payload.id) {
          return { ...demande, demandeState: state };
        }
        return demande;
      });
      return current;
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
      Cell: ({ row }) => (
        <ActionCell
          demande={row.original}
          onSelectState={handleClickStateDemande}
        />
      ),
    },
  ];

  return (
    <ComptabiliteCsPage>
      <RowAction className="row-action-page"></RowAction>
      <DataTable
        className="table-align-center-not-first"
        columns={COLUMNS}
        data={data}
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
