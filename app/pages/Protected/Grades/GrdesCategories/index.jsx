import React from "react";

import DataTable from "../../../../components/DataTable";
import ActionCells from "../../../../components/DataTable/ActionCells";
import RowActionCategories from "./RowActionCategories";

const GradeCategories = () => {
  const columns = [
    { Header: "Nom", accessor: "name" },
    { Header: "Faction", accessor: "faction" },
    { Header: "Grades associé", accessor: "nb_grades" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => <ActionCells />,
    },
  ];
  const data = [
    { name: "Effectif", faction: "lspd", nb_grades: 7 },
    { name: "Effectif", faction: "bcso", nb_grades: 6 },
  ];

  return (
    <>
      <RowActionCategories />
      <DataTable columns={columns} data={data} className="grades-table" />
    </>
  );
};

export default GradeCategories;
