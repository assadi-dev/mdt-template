import React, { useRef } from "react";
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
import { update_user } from "../../../../features/Users/Users.slice";
import View from "./Modal/View";
import Modal from "../../../../components/Modal/Modal";
import { useReducer } from "react";
import {
  CLOSE_MODAL,
  TOGGLE_MODAL,
  initialModalState,
  modalStateReducer,
} from "./reducers/ModalState.reducer";
import { createPortal } from "react-dom";
import {
  PAGE_CHANGED,
  SEARCH,
  TOTAL_COUNT_CHANGED,
  initialStatePagination,
  paginateReducer,
} from "./reducers/PaginationState.reducer";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../config/constantes";
import useModalState from "../../../../hooks/useModalState";

const Users = () => {
  const dispatch = useDispatch();

  const handleSelectRole = async (value, user) => {
    const id = user.id;
    try {
      await userupdateApi(id, { roles: [value.value] });
      toastSuccess();
      let payload = { id, roles: [value.value] };
      dispatch(update_user(payload));
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
      dispatch(update_user(payload));
    } catch (error) {
      toastError();
    }
  };

  const { modalState, toggleModal, closeModal } = useModalState();

  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  const handleClicEdit = (user) => {
    toggleModal({ view: "edit-user", data: user });
  };

  const handleClickCloseModal = () =>
    toggleModal({ view: modalState.view, data: modalState.data });

  const columns = [
    { Header: "Discord", accessor: "idDiscord" },
    { Header: "Matricule", accessor: "matricule" },
    {
      Header: "Agent",
      accessor: "agent",
      Cell: ({ row }) => {
        return cleanNameAgent(row.original.firstname, row.original.lastname);
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
          canDelete={false}
          canEdit={true}
          onEdit={() => handleClicEdit(row.original)}
          /* onDelete={handleClicDelete}*/
        />
      ),
    },
  ];

  const { collections, status, count, error } = useSelector(
    (state) => state.UsersReducer
  );
  const userPromiseRef = useRef();
  useEffect(() => {
    const main = async () => {
      let payload = {
        page: pageIndex,
        params: { item_per_page: pageSize, search: search },
      };
      userPromiseRef.current = dispatch(getUserPaginationAsync(payload));
      onPageTotalCountChange(count);
    };

    main();
    return () => {
      userPromiseRef.current?.abort();
    };
  }, [pageIndex, search]);

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
        totalCount={totalCount}
        initialStatePagination={{
          pageIndex,
          pageSize,
        }}
        onPageChange={onPageChange}
        onPageTotalCountChange={onPageTotalCountChange}
        onSearchValue={handleSearch}
      />

      {createPortal(
        <Modal isOpen={modalState.isOpen} onClose={handleClickCloseModal}>
          <View
            view={modalState.view}
            data={modalState.data}
            onCloseModal={handleClickCloseModal}
          />
        </Modal>,
        document.body
      )}
    </MainContainer>
  );
};

export default Users;
