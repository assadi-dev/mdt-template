import React from "react";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../config/constantes";
import { useEffect } from "react";
import {
  ActionButton,
  PageContainer,
  Row,
  RowAction,
} from "../../../../components/PageContainer";
import { AddBtn } from "./Saisie.styled";
import DataTable from "../../../../components/DataTable";
import useModalState, { TOGGLE_MODAL } from "../../../../hooks/useModalState";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import View from "./Modal/View";
import ActionCells from "../../../../components/DataTable/ActionCells";
import DepotBtn from "./Modal/DepotBtn";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAcquisitionsAsync } from "../../../../features/Acquisitions/AcquisitionAsync";
import { ShowAgent } from "./helpers";

const Saisie = () => {
  const { modalState, toggleModal, closeModal } = useModalState();
  const { collections, status, error, count } = useSelector(
    (state) => state.AcquisitionsReducer
  );

  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );

  const dispatch = useDispatch();

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
    try {
      const payload = {
        page: pageIndex,
        params: { item_per_page: pageSize, search },
      };

      const AcquisitionfetchPromise = dispatch(
        retrieveAcquisitionsAsync(payload)
      );
      onPageTotalCountChange(count);

      return () => {
        AcquisitionfetchPromise.abort();
      };
    } catch (error) {
      console.log(error);
    }
  }, [pageIndex, search, count]);

  const columns = [
    { Header: "Agent", Cell: ({ row }) => ShowAgent(row.original) },
    { Header: "Date de saisie", accessor: "dateOfAcquisition" },
    { Header: "Poste", accessor: "post" },
    {
      Header: "Dépôt",
      Cell: ({ row }) => (
        <DepotBtn data={row.original} onClickShowDepot={handleClickShowDepot} />
      ),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canDelete={true}
          canEdit={true}
          onEdit={handleClickEditbtn}
        />
      ),
    },
  ];

  /**Action btn **/
  const handleClickAddbtn = () => {
    const payload = { idAgent, lastname, firstname, matricule };
    toggleModal({ view: "add-saisie", data: payload });
  };
  const handleClickEditbtn = (acquisition) => {
    const payload = { idAgent, lastname, firstname, matricule, ...acquisition };
    toggleModal({ view: "edit-saisie", data: payload });
  };

  const handleClickShowDepot = (data) => {
    console.log(data);
    toggleModal({ view: "show-acquisition", data });
  };

  return (
    <>
      <PageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickAddbtn}
          >
            Ajouter
          </AddBtn>
        </RowAction>
        <DataTable
          columns={columns}
          data={collections}
          initialStatePagination={{
            pageIndex,
            pageSize,
          }}
          totalCount={totalCount}
          manualPagination={true}
          isLoading={status == "pending"}
          isSuccess={status == "complete"}
          onPageChange={onPageChange}
          onPageTotalCountChange={onPageTotalCountChange}
          onSearchValue={handleSearch}
        />
      </PageContainer>

      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <View
            view={modalState.view}
            onCloseModal={closeModal}
            data={modalState.data}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default Saisie;
