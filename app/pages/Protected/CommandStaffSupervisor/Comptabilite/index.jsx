import React from "react";
import { ComptabiliteCsPage } from "./Comptabilite.styled";
import { RowAction } from "../../../../components/PageContainer";
import DataTable from "../../../../components/DataTable";
import useDelayed from "../../../../hooks/useDelayed";
import useLoader from "../../../../hooks/useLoader";
import ActionCell from "./ActionCell";
import ShowDemandeComptability from "./ShowDemandeComptability";

const Comptabilite = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);

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
      Cell: () => <ShowDemandeComptability />,
    },
    {
      Header: "Date et Heure",
      accessor: "createdAt",
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => <ActionCell />,
    },
  ];

  const collections = [
    {
      matricule: 209,
      agent: "Alyson Finley",
      objetDemande: "Remboursement Kevlar",
      amount: 1500,
      createdAt: "30/09/2023 à 15:00",
    },
    {
      matricule: 209,
      agent: "Alyson Finley",
      objetDemande: "Remboursement Voiture GND",
      amount: 3006,
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
    </ComptabiliteCsPage>
  );
};

export default Comptabilite;
