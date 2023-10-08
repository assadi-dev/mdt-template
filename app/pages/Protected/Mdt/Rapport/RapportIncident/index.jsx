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

const RapportIncident = () => {
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
      Cell: () => <ShowRapportIncident />,
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells data={row.original.id} canDelete={true} canEdit={true} />
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

  const handleClickAddbtn = () => {};

  return (
    <RapportIncidentPageContainer>
      <RowAction style={{ height: "100px" }}>
        <div></div>
        <AddBtnRapportIncident
          className="bg-btn-alt-theme-color"
          onClick={handleClickAddbtn}
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
  );
};

export default RapportIncident;
