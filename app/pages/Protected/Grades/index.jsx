import React, { useState, useEffect, useReducer } from "react";

import DataTable from "../../../components/DataTable";
import ActionCells from "../../../components/DataTable/ActionCells";
import RowAction from "./RowAction";
import { useDispatch, useSelector } from "react-redux";
import { retrievesGradesPaginationAsync } from "../../../features/Grades/GradesAsync.action";
import {
  CLOSE_MODAL,
  TOGGLE_MODAL,
  initialModalState,
  modalStateReducer,
} from "./GrdesCategories/reducer/ModalReducer";
import { createPortal } from "react-dom";
import Modal from "../../../components/Modal/Modal";
import View from "./Modal/View";
import { removeGrade } from "../../../features/Grades/Grades.slice";
import { deleteGrades } from "./helper";
import { toastError, toastSuccess } from "../../../services/utils/alert";
import useCustomPagination from "../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../config/constantes";
import useModalState from "../../../hooks/useModalState";

const Grades = () => {
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.GradeReducer
  );

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

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };
    dispatch(retrievesGradesPaginationAsync(payload))
      .unwrap()
      .then((res) => {
        const count = res.count;
        onPageTotalCountChange(count);
      });
  }, [pageIndex, search, collections.length]);

  const columns = [
    { Header: "Nom", accessor: "name" },
    { Header: "Categorie", accessor: "category" },
    { Header: "Faction", accessor: "faction" },
    { Header: "Total dans l'éffectifs", accessor: "nb_agents" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          onEdit={handleClickEdit}
          onDelete={handleClicDelete}
          canEdit={true}
          canDelete={true}
        />
      ),
    },
  ];

  const handleClickEdit = (data) => {
    toggleModal({ view: "edit-grade", data });
  };

  //Dispatch Delete
  const onConfirmDelete = async (data) => {
    try {
      dispatch(removeGrade(data));
      await deleteGrades(data.id);

      toastSuccess("Element supprimé");
    } catch (error) {
      console.log(error.message);
      toastError();
    } finally {
      closeModal();
    }
  };

  const handleClicDelete = (data) => {
    data = { ...data, onConfirmDelete };

    toggleModal({ view: "delete-grade", data });
  };

  const handleClickCloseModal = () => {
    closeModal();
  };

  const handleClickAddGrade = () => {
    toggleModal({ view: "add-grade", data: null });
  };

  return (
    <>
      <RowAction handleClickAddGrade={handleClickAddGrade} />
      <DataTable
        columns={columns}
        data={collections}
        className="grades-table"
        manualPagination={true}
        isLoading={status == "pending"}
        isSuccess={status == "complete"}
        onPageChange={onPageChange}
        onPageTotalCountChange={onPageTotalCountChange}
        initialStatePagination={{
          pageIndex,
          pageSize,
        }}
        totalCount={totalCount}
        onSearchValue={handleSearch}
      />

      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <View
            view={modalState.view}
            onCloseModal={handleClickCloseModal}
            data={modalState.data}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default Grades;
