import React from "react";
import {
  AddDossierFusillade,
  FusilladePageContainer,
} from "./Fusillade.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowDossierFussilade from "./ShowDossierFussilade";
import ActionCells from "../../../../../components/DataTable/ActionCells";

const Fusillade = () => {
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
      accessor: "numeroRaport",
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
    <FusilladePageContainer>
      <RowAction style={{ height: "100px" }}>
        <div></div>
        <AddDossierFusillade className="bg-btn-alt-theme-color">
          Ajouter
        </AddDossierFusillade>
      </RowAction>
      <DataTable
        className="table"
        columns={COLUMNS}
        isLoading={false}
        isSuccess={true}
        data={collections}
      />
    </FusilladePageContainer>
  );
};

export default Fusillade;
