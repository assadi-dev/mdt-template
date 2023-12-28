import React, { useEffect } from "react";
import useLoader from "../../../../hooks/useLoader";
import useDelayed from "../../../../hooks/useDelayed";
import ActionCells from "../../../../components/DataTable/ActionCells";
import { RowAction } from "../../../../components/PageContainer";
import {
  AddCodePenalBtn,
  GestionCodePenalPage,
} from "./GestionCodePenal.styled";
import DataTable from "../../../../components/DataTable";
import useModalState from "../../../../hooks/useModalState";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../components/Modal/RenderModalFormContent";
import {
  ADD_CODE_PENAL,
  DELETE_CODE_PENAL,
  EDIT_CODE_PENAL,
  LIST_OF_VIEWs_CODE_PENAL,
} from "./ModalView/listOfgCodePenalView";
import uniqid from "uniqid";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { useDispatch, useSelector } from "react-redux";
import { defaultPageSize } from "../../../../config/constantes";
import { retrieveCodePenalCollectionsAsync } from "../../../../features/CodePenals/CodePenalAsynAction";

const GestionCodePenal = () => {
  const dispatch = useDispatch();
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);

  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");
  const { collections, count, status, error } = useSelector(
    (state) => state.CodePenalReducer
  );

  const { modalState, openModal, closeModal } = useModalState();

  const handelClickEdit = (codePenal) => {
    openModal({
      view: EDIT_CODE_PENAL,
      data: codePenal,
    });
  };
  const handelClickAdd = () => {
    openModal({
      view: ADD_CODE_PENAL,
    });
  };
  const handelClickDelete = (codePenal) => {
    openModal({
      view: DELETE_CODE_PENAL,
      data: codePenal,
    });
  };

  const COLUMNS = [
    {
      Header: "Infraction",
      accessor: "label",
    },
    {
      Header: "Categorie",
      accessor: "categorie",
    },
    {
      Header: "Amendes",
      accessor: "amount",
      Cell: ({ value }) => <span>{value} $</span>,
    },
    {
      Header: "Peine",
      accessor: "sentence",
    },

    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canEdit={true}
          canDelete={true}
          onEdit={handelClickEdit}
          onDelete={handelClickDelete}
        />
      ),
    },
  ];

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };

    dispatch(retrieveCodePenalCollectionsAsync(payload));
    onPageTotalCountChange(count);
  }, [pageIndex, count, search]);

  return (
    <>
      <GestionCodePenalPage>
        <RowAction className="row-action-page">
          <div></div>
          <AddCodePenalBtn
            className="bg-btn-alt-theme-color"
            onClick={handelClickAdd}
          >
            Ajouter
          </AddCodePenalBtn>
        </RowAction>
        <DataTable
          manualPagination={true}
          className="table-align-center-not-first"
          columns={COLUMNS}
          data={collections}
          isLoading={status == "pending"}
          isSuccess={status == "complete"}
          onPageTotalCountChange={onPageTotalCountChange}
          onSearchValue={handleSearch}
          onPageChange={onPageChange}
          initialStatePagination={{
            pageIndex,
            pageSize,
          }}
          totalCount={totalCount}
        />
      </GestionCodePenalPage>
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            enumOfView={LIST_OF_VIEWs_CODE_PENAL}
            onCloseModal={closeModal}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default GestionCodePenal;
