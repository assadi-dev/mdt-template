import React, { useEffect, useRef } from "react";
import { RowAction } from "../../../../components/PageContainer";
import DataTable from "../../../../components/DataTable";
import useLoader from "../../../../hooks/useLoader";
import useDelayed from "../../../../hooks/useDelayed";
import ActionCells from "../../../../components/DataTable/ActionCells";
import ActionValidate from "./ActionValidate";
import { GestionDesCompteoageContainer } from "./GestionDesCompte.styled";
import { useDispatch, useSelector } from "react-redux";
import { defaultPageSize } from "../../../../config/constantes";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { getUserPaginationAsync } from "../../../../features/Users/UsersAsync.action";
import { cleanNameAgent } from "../../../../services/utils/user";
import { datetimeFormatFr } from "../../../../services/utils/dateFormat";
import {
  udpateUser,
  update_user,
} from "../../../../features/Users/Users.slice";
import { update_user_acount } from "./helpers";
import { toastError, toastSuccess } from "../../../../services/utils/alert";
import useModalState from "../../../../hooks/useModalState";
import { DELETE_USER, listUsersView } from "./Views/listOfViews";
import Modal from "../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../components/Modal/RenderModalContent";

const GestionDesComptes = () => {
  const dispatch = useDispatch();
  const { collections, status, count } = useSelector(
    (state) => state.UsersReducer
  );

  const { modalState, openModal, closeModal } = useModalState();

  const handleClickDelete = (effectif) => {
    openModal({
      view: DELETE_USER,
      data: effectif,
    });
  };

  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  const handleValidate = async (checked, agent) => {
    try {
      const id = agent?.id;
      const payload = { isValidate: checked };
      await update_user_acount(id, payload);
      dispatch(update_user({ id, ...payload }));
      toastSuccess();
    } catch (error) {
      toastError();
    }
  };

  const COLUMNS = [
    {
      Header: "Matricule",
      accessor: "matricule",
    },
    {
      Header: "Agent",
      accessor: "agent",
      Cell: ({ row }) => {
        const { matricule, firstname, lastname } = row.original;
        return cleanNameAgent(firstname, lastname);
      },
    },
    {
      Header: "Date de création",
      accessor: "createdAt",
      Cell: ({ row }) => {
        const { date } = row.original?.createdAt;
        return datetimeFormatFr(date);
      },
    },
    {
      Header: "Validation",
      accessor: "isValidate",
      Cell: ({ row }) => (
        <ActionValidate
          agentData={row?.original}
          onValidateAction={handleValidate}
        />
      ),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row?.original}
          canDelete={true}
          onDelete={handleClickDelete}
        />
      ),
    },
  ];

  const promiseUserRef = useRef();

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };
    promiseUserRef.current = dispatch(getUserPaginationAsync(payload));

    onPageTotalCountChange(count);

    return () => {
      promiseUserRef.current?.abort();
    };
  }, [pageIndex, count, search]);

  return (
    <>
      <GestionDesCompteoageContainer>
        <RowAction className="row-action-page"></RowAction>
        <DataTable
          className="table-align-center-not-first"
          data={collections}
          columns={COLUMNS}
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
      </GestionDesCompteoageContainer>

      <Modal isOpen={modalState.isOpen}>
        <RenderModalFormContent
          view={modalState.view}
          payload={modalState.data}
          enumOfView={listUsersView}
          onCloseModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default GestionDesComptes;
