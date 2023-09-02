import React from "react";
import { MainContainer, Row } from "./User.styled";
import DataTable from "../../../../components/DataTable";
import ActionCells from "../../../../components/DataTable/ActionCells";
import { cleanNameAgent, getRoleUser, userupdateApi } from "./helper";
import SelectRole from "./Modal/Form/SelectRole";
import ToggleValidation from "./Modal/Form/ToggleValidation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPaginationAsync } from "../../../../features/Users/UsersAsync.action";
import { firsLetterCapitalise } from "../../../../services/utils/textUtils";
import { toastError, toastSuccess } from "../../../../services/utils/alert";
import { udpateUser } from "../../../../features/Users/Users.slice";

const Users = () => {
  const dispatch = useDispatch();

  const handleSelectRole = async (value, user) => {
    const id = user.id;

    try {
      await userupdateApi(id, { roles: [value.value] });
      toastSuccess();
      let payload = { id, roles: [value.value] };
      dispatch(udpateUser(payload));
    } catch (error) {
      toastError();
    }
  };

  const handleCheckValidation = async (e, user) => {
    let value = e.target.checked;
    const id = user.id;

    try {
      await userupdateApi(id, { isValidate: value });
      toastSuccess();
      let payload = { id, isValidate: value };
      dispatch(udpateUser(payload));
    } catch (error) {
      toastError();
    }
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
      Cell: ({ row }) => {
        let role = getRoleUser(row.original.roles);
        return (
          <SelectRole
            onChange={(e) => handleSelectRole(e, row.original)}
            value={role}
          />
        );
      },
    },
    {
      Header: "Validation",
      accessor: "validate",
      Cell: ({ row }) => {
        return (
          <ToggleValidation
            className="toggle-custom"
            defaultChecked={row.original.isValidate}
            onChange={(e) => handleCheckValidation(e, row.original)}
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
