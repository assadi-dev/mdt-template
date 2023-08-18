import React, { useState, useEffect } from "react";

import DataTable from "../../../components/DataTable";
import ActionCells from "../../../components/DataTable/ActionCells";
import RowAction from "./RowAction";
import { useDispatch, useSelector } from "react-redux";
import { retrievesGradesPaginationAsync } from "../../../features/Grades/GradesAsync.action";

const Grades = () => {
  const [page, setPage] = useState({ current: 1, item_per_page: 5 });
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.GradeReducer
  );

  useEffect(() => {
    const payload = {
      page: page.current,
      params: { item_per_page: page.item_per_page },
    };
    dispatch(retrievesGradesPaginationAsync(payload));
  }, [page.current]);

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

  return (
    <>
      <RowAction />
      <DataTable
        columns={columns}
        data={collections}
        className="grades-table"
      />
    </>
  );
};

export default Grades;
