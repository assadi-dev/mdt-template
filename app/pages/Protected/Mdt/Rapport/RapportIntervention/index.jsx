import React from "react";
import {
  AddBtnRapporIncident,
  RapportInterventionPageContainer,
} from "./RapportIntervention.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowRapportIntervention from "./ShowRapportIntervention";
import ActionCells from "../../../../../components/DataTable/ActionCells";

const RapportIntervention = () => {
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
        <ActionCells data={row.original} canDelete={true} canEdit={true} />
      ),
    },
  ];

  const handleClickAddbtn = () => {};

  const collections = [
    {
      id: 15,
      matricule: "103",
      agent: "Alyson Finley",
      createdAt: "01-10-2023 à 22:35",
      numeroRaport: 25,
      rapport: "",
    },
  ];

  return (
    <RapportInterventionPageContainer>
      <RowAction style={{ height: "100px" }}>
        <div></div>
        <AddBtnRapporIncident
          className="bg-btn-alt-theme-color"
          onClick={handleClickAddbtn}
        >
          Ajouter
        </AddBtnRapporIncident>
      </RowAction>
      <DataTable
        className="table"
        columns={COLUMNS}
        isLoading={false}
        isSuccess={true}
        data={collections}
      />
    </RapportInterventionPageContainer>
  );
};

export default RapportIntervention;
