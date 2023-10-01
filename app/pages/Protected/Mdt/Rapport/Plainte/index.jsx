import React from "react";
import { AddBtn, PlaintPageContainer } from "./Plainte.styled";
import {
  ActionButton,
  RowAction,
} from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import Showplainte from "./Showplainte";
import StatePlainte from "./StatePlainte";

const Plainte = () => {
  const COLUMNS = [
    { Header: "Matricule", accessor: "matricule" },
    { Header: "Agent", accessor: "agent" },
    { Header: "Dépositaire", accessor: "depositaire" },
    { Header: "Accusé", accessor: "accused" },
    { Header: "Date et Heure", accessor: "createdAt" },
    { Header: "Action", accessor: "", Cell: () => <Showplainte /> },
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

  const handleClickAddbtn = () => {};

  return (
    <PlaintPageContainer>
      <RowAction style={{ height: "100px" }}>
        <div></div>
        <AddBtn className="bg-btn-alt-theme-color" onClick={handleClickAddbtn}>
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
  );
};

export default Plainte;
