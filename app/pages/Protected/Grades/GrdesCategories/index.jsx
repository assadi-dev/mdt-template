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
import {
  PAGE_CHANGED,
  SEARCH,
  TOTAL_COUNT_CHANGED,
  initialStatePagination,
  paginateReducer,
} from "./reducer/PaginateReducer";

const GradeCategories = () => {
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.GradeCategoriesReducer
  );

  const [{ pageIndex, pageSize, totalCount, search }, dispatchPaginate] =
    useReducer(paginateReducer, initialStatePagination);

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

  const onPageChange = (pageIndex) => {
    dispatchPaginate({ type: PAGE_CHANGED, payload: pageIndex + 1 });
  };

  const onPageTotalCountChange = (count) => {
    dispatchPaginate({ type: TOTAL_COUNT_CHANGED, payload: count });
  };

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
        />
      ),
    },
  ];

  const handleClickEdit = (data) => {
    dispatchModelState({
      type: TOGGLE_MODAL,
      payload: { view: "edit-category", data },
    });
  };
  const handleClicDelete = (data) => {
    const onConfirmDelete = async (data) => {
      try {
        const res = await deleteGradeCategories(data.id);
        dispatch(removeGradeCaregory(data));
        dispatchModelState({
          type: CLOSE_MODAL,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    data = { ...data, onConfirmDelete };
    dispatchModelState({
      type: TOGGLE_MODAL,
      payload: { view: "delete-category", data },
    });
  };

  const [modalState, dispatchModelState] = useReducer(
    modalStateReducer,
    initialModalState
  );

  const handleClickCloseModal = () => {
    dispatchModelState({ type: CLOSE_MODAL });
  };

  const handleSearch = (value) => {
    dispatchPaginate({ type: SEARCH, payload: value });
  };

  return (
    <>
      <RowActionCategories
        dispatchModelState={dispatchModelState}
        onSearch={handleSearch}
      />
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
          isLoading={status == "pending"}
          isSuccess={status == "complete"}
          onPageChange={onPageChange}
          onPageTotalCountChange={onPageTotalCountChange}
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
