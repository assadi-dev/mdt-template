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

const Saisie = () => {
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
      params: { item_per_page: pageSize, search },
    };
  }, [pageIndex, search]);

  const collections = [
    { agent: "tedd", date: "13-11-2023 à 10:15", post: "set" },
  ];
  const columns = [
    { Header: "Agent", accessor: "agent" },
    { Header: "Date de saisie", accessor: "date" },
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
        <ActionCells data={row.original} canDelete={true} canEdit={true} />
      ),
    },
  ];

  /**Action btn **/
  const handleClickAddbtn = () => {
    toggleModal({ view: "add-saisie", data: null });
  };

  const handleClickShowDepot = (data) => {
    console.log(data);
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
          isLoading={false}
          isSuccess={true}
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
