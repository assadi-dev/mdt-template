import React from "react";
import { MainContainer, Row } from "./User.styled";
import DataTable from "../../../../components/DataTable";
import ActionCells from "../../../../components/DataTable/ActionCells";
import { getRoleUser } from "./helper";
import SelectRole from "./Modal/Form/SelectRole";
import ToggleValidation from "./Modal/Form/ToggleValidation";

const Users = () => {
  const handleSelectRole = (value) => {
    console.log(value);
  };

  const collections = [
    {
      id: 22,
      idDiscord: 123456,
      matricule: 22,
      agent: "Philipe Salvatore",
      grade: "rookie",
      faction: "lspd",
      role: ["ROLE_USER"],
      validate: false,
    },
  ];
  const columns = [
    { Header: "Discord", accessor: "idDiscord" },
    { Header: "Matricule", accessor: "matricule" },
    { Header: "Agent", accessor: "agent" },
    { Header: "grade", accessor: "grade" },
    { Header: "faction", accessor: "faction" },
    {
      Header: "Role",
      accessor: "role",
      Cell: ({ value }) => {
        let role = getRoleUser(value);
        return <SelectRole onChange={handleSelectRole} value={role} />;
      },
    },
    {
      Header: "Validation",
      accessor: "validate",
      Cell: ({ value }) => {
        return (
          <ToggleValidation className="toggle-custom" defaultChecked={value} />
        );
      },
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          /*   onEdit={handleClickEdit}
          onDelete={handleClicDelete} */
        />
      ),
    },
  ];

  return (
    <MainContainer>
      <Row style={{ height: "100px" }}></Row>
      <DataTable
        columns={columns}
        data={collections}
        className="users-table"
        manualPagination={true}
        isLoading={false}
        isSuccess={true}
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
