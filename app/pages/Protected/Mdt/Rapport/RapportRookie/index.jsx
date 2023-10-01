import React from "react";
import {
  AddBtnRapportRookie,
  RapportRookiePageContainer,
} from "./RapportRookie.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ShowRapportRookie from "./ShowRapportRookie";

const RapportRookie = () => {
  const handleClickAddbtn = () => {};

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
      Header: "Matricule du rookie",
      accessor: "matriculeRookie",
    },
    {
      Header: "Nom du rookie",
      accessor: "rookieName",
    },
    {
      Header: "Date et heure",
      accessor: "createdAt",
    },
    {
      Header: "Action",
      accessor: "",
      Cell: () => <ShowRapportRookie />,
    },
  ];

  return (
    <RapportRookiePageContainer>
      <RowAction style={{ height: "100px" }}>
        <div></div>
        <AddBtnRapportRookie
          className="bg-btn-alt-theme-color"
          onClick={handleClickAddbtn}
        >
          Ajouter
        </AddBtnRapportRookie>
      </RowAction>
      <DataTable
        className="table"
        columns={COLUMNS}
        isLoading={false}
        isSuccess={true}
      />
    </RapportRookiePageContainer>
  );
};

export default RapportRookie;
