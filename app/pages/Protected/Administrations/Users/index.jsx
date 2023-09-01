import React from "react";
import { MainContainer, Row } from "./User.styled";
import DataTable from "../../../../components/DataTable";
import ActionCells from "../../../../components/DataTable/ActionCells";
import { cleanNameAgent, getRoleUser } from "./helper";
import SelectRole from "./Modal/Form/SelectRole";
import ToggleValidation from "./Modal/Form/ToggleValidation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPaginationAsync } from "../../../../features/Users/UsersAsync.action";
import { firsLetterCapitalise } from "../../../../services/utils/textUtils";

const Users = () => {
  const handleSelectRole = (value) => {
    console.log(value);
  };

  const handleCheckValidation = (e) => {
    let value = e.target.checked;
    console.log(value);
  };

  const columns = [
    { Header: "Discord", accessor: "idDiscord" },
    { Header: "Matricule", accessor: "matricule" },
    {
      Header: "Agent",
      accessor: "agent",
      Cell: ({ row }) => {
        return cleanNameAgent(row.original.firstname, row.original.name);
      },
    },
    { Header: "grade", accessor: "grade" },
    { Header: "faction", accessor: "faction" },
    {
      Header: "Role",
      accessor: "roles",
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
          <ToggleValidation
            className="toggle-custom"
            defaultChecked={value}
            onChange={handleCheckValidation}
          />
        );
      },
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canDelete={true}
          /*onEdit={handleClickEdit}
          onDelete={handleClicDelete}*/
        />
      ),
    },
  ];

  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.UsersReducer
  );

  useEffect(() => {
    let res = null;
    let payload = { page: 1, params: { item_per_page: 5, search: "" } };
    res = dispatch(getUserPaginationAsync(payload));

    return () => {
      res && res.abort();
    };
  }, []);

  return (
    <MainContainer>
      <Row style={{ height: "100px" }}></Row>
      <DataTable
        columns={columns}
        data={collections}
        className="users-table"
        manualPagination={true}
        isLoading={status == "pending"}
        isSuccess={status == "complete"}
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
