import React, { useEffect, useReducer, useState } from "react";

import DataTable from "../../../../components/DataTable";
import ActionCells from "../../../../components/DataTable/ActionCells";
import RowActionCategories from "./RowActionCategories";
import { useDispatch, useSelector } from "react-redux";
import { RetrieveGradeCategoriesPaginationAsync } from "../../../../features/GradeCategories/GradeCategoriesAsync.action";
import Modal from "../../../../components/Modal/Modal";
import { createPortal } from "react-dom";
import {
  CLOSE_MODAL,
  TOGGLE_MODAL,
  initialModalState,
  modalStateReducer,
} from "./reducer/ModalReducer";
import View from "../Modal/View";
import { removeGradeCaregory } from "../../../../features/GradeCategories/GradeCategories.slice";
import { deleteGradeCategories } from "../helper";
import { toastError, toastSuccess } from "../../../../services/utils/alert";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../config/constantes";
import useModalState from "../../../../hooks/useModalState";

const GradeCategories = () => {
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.GradeCategoriesReducer
  );

  //Gestion des view Modal
  const { modalState, dispatchModalState } = useModalState();

  //gestion des paginations
  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search },
    };
    dispatch(RetrieveGradeCategoriesPaginationAsync(payload))
      .unwrap()
      .then((res) => {
        const count = res.count;
        onPageTotalCountChange(count);
      });
  }, [pageIndex, search]);

  const columns = [
    { Header: "Nom", accessor: "name" },
    { Header: "Faction", accessor: "faction" },
    { Header: "Grades associé", accessor: "nb_grades" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          onEdit={handleClickEdit}
          onDelete={handleClicDelete}
          canDelete={true}
          canEdit={true}
        />
      ),
    },
  ];

  const handleClickEdit = (data) => {
    dispatchModalState({
      type: TOGGLE_MODAL,
      payload: { view: "edit-category", data },
    });
  };
  const handleClicDelete = (data) => {
    const onConfirmDelete = async (data) => {
      try {
        const res = await deleteGradeCategories(data.id);
        dispatch(removeGradeCaregory(data));
        dispatchModalState({
          type: CLOSE_MODAL,
        });
        toastSuccess("Element supprimé");
      } catch (error) {
        console.log(error.message);
        toastError();
      }
    };

    data = { ...data, onConfirmDelete };
    dispatchModalState({
      type: TOGGLE_MODAL,
      payload: { view: "delete-category", data },
    });
  };

  const handleClickCloseModal = () => {
    dispatchModalState({ type: CLOSE_MODAL });
  };

  return (
    <>
      <RowActionCategories dispatchModalState={dispatchModalState} />
      {
        <DataTable
          columns={columns}
          data={collections}
          initialStatePagination={{
            pageIndex,
            pageSize,
          }}
          totalCount={totalCount}
          manualPagination={true}
          className="grades-table"
          isLoading={status == "pending" ? true : false}
          isSuccess={status == "complete"}
          onPageChange={onPageChange}
          onPageTotalCountChange={onPageTotalCountChange}
          onSearchValue={handleSearch}
        />
      }
      {modalState.isOpen
        ? createPortal(
            <Modal isOpen={modalState.isOpen}>
              <View
                view={modalState.view}
                onCloseModal={handleClickCloseModal}
                data={modalState.data}
              />
            </Modal>,
            document.body
          )
        : null}
    </>
  );
};

export default GradeCategories;
