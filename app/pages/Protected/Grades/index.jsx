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

const Grades = () => {
  const [page, setPage] = useState({ current: 1, item_per_page: 10 });
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.GradeReducer
  );

  useEffect(() => {
    const payload = {
      page: page.current,
      params: { item_per_page: page.item_per_page },
    };
    dispatch(retrievesGradesPaginationAsync(payload));
  }, [page.current]);

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
        />
      ),
    },
  ];

  const handleClickEdit = (data) => {
    dispatchModelState({
      type: TOGGLE_MODAL,
      payload: { view: "edit-grade", data },
    });
  };

  //Dispatch Delete
  const onConfirmDelete = async (data) => {
    try {
      dispatch(removeGrade(data));
      deleteGrades(data.id);
      dispatchModelState({ type: CLOSE_MODAL });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClicDelete = (data) => {
    data = { ...data, onConfirmDelete };

    dispatchModelState({
      type: TOGGLE_MODAL,
      payload: { view: "delete-grade", data },
    });
  };

  const [modalState, dispatchModelState] = useReducer(
    modalStateReducer,
    initialModalState
  );

  const handleClickCloseModal = () => {
    dispatchModelState({ type: CLOSE_MODAL });
  };

  return (
    <>
      <RowAction dispatchModelState={dispatchModelState} />
      <DataTable
        columns={columns}
        data={collections}
        className="grades-table"
      />

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

export default Grades;
