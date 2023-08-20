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
  initialModalState,
  modalStateReducer,
} from "./reducer/ModalReducer";
import View from "../Modal/View";

const GradeCategories = () => {
  const [page, setPage] = useState({ current: 1, item_per_page: 5 });
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.GradeCategoriesReducer
  );

  useEffect(() => {
    const payload = {
      page: page.current,
      params: { item_per_page: page.item_per_page },
    };
    dispatch(RetrieveGradeCategoriesPaginationAsync(payload));
  }, [page.current]);

  const columns = [
    { Header: "Nom", accessor: "name" },
    { Header: "Faction", accessor: "faction" },
    { Header: "Grades associé", accessor: "nb_grades" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => <ActionCells />,
    },
  ];

  const [modalState, dispatchModelState] = useReducer(
    modalStateReducer,
    initialModalState
  );

  const handleClickCloseModal = () => {
    dispatchModelState({ type: CLOSE_MODAL });
  };

  return (
    <>
      <RowActionCategories dispatchModelState={dispatchModelState} />
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

export default GradeCategories;
