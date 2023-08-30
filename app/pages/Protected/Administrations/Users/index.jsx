import React from "react";
import { MainContainer, Row } from "./User.styled";
import DataTable from "../../../../components/DataTable";

const collections = [];
const columns = [
  { Header: "Discord", accessor: "name" },
  { Header: "Matricule", accessor: "category" },
  { Header: "Agent", accessor: "agent" },
  { Header: "grade", accessor: "grade" },
  { Header: "faction", accessor: "faction" },
  { Header: "Role", accessor: "role" },
  { Header: "Validation", accessor: "validate" },
  {
    Header: "Action",
    accessor: "",
    Cell: ({ row }) => (
      <ActionCells
        data={row.original}
        onEdit={handleClickEdit}
        onDelete={handleClicDelete}
      />
    ),
  },
];

const Users = () => {
  return (
    <MainContainer>
      <Row style={{ height: "100px" }}></Row>
      <DataTable
        columns={columns}
        data={collections}
        className="grades-table"
        manualPagination={true}
        /*       isLoading={status == "pending"}
        isSuccess={status == "complete"} */
        /*  onPageChange={onPageChange}
        onPageTotalCountChange={onPageTotalCountChange}
        initialStatePagination={{
          pageIndex,
          pageSize,
        }}
        totalCount={totalCount}
        onSearchValue={handleSearch} */
      />
    </MainContainer>
  );
};

export default Users;
