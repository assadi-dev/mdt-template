import React, { useEffect, useState } from "react";

import DataTable from "../../../../components/DataTable";
import ActionCells from "../../../../components/DataTable/ActionCells";
import RowActionCategories from "./RowActionCategories";
import { useDispatch, useSelector } from "react-redux";
import { RetrieveGradeCategoriesPaginationAsync } from "../../../../features/GradeCategories/GradeCategoriesAsync.action";

const GradeCategories = () => {
  const [page, setPage] = useState({ current: 1, item_per_page: 5 });
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.GradeCategoriesReducer
  );

  useEffect(() => {
    const payload = {
      page: page.current,
      params: { item_per_page: page.item_per_page },
    };
    dispatch(RetrieveGradeCategoriesPaginationAsync(payload));
  }, [page.current]);

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

  return (
    <>
      <RowActionCategories />
      <DataTable
        columns={columns}
        data={collections}
        className="grades-table"
      />
    </>
  );
};

export default GradeCategories;
