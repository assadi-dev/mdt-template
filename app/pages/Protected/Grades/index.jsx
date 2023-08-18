import React from "react";

import DataTable from "../../../components/DataTable";
import ActionCells from "../../../components/DataTable/ActionCells";
import RowAction from "./RowAction";

const Grades = () => {
  const columns = [
    { Header: "Nom", accessor: "name" },
    { Header: "Categorie", accessor: "category" },
    { Header: "Faction", accessor: "faction" },
    { Header: "Total dans l'éffectifs", accessor: "nb_agents" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => <ActionCells />,
    },
  ];
  const data = [
    { name: "Rookie", category: "EFFECTIF", faction: "lspd", nb_agents: 7 },
    { name: "Rookie", category: "EFFECTIF", faction: "bcso", nb_agents: 6 },
  ];

  return (
    <>
      <RowAction />
      <DataTable columns={columns} data={data} className="grades-table" />
    </>
  );
};

export default Grades;
