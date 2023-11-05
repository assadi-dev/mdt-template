import React, { useEffect, useMemo, useState } from "react";
import {
  AddDemandeBtn,
  DemandeCompatibiliteContainer,
} from "./DemandeComptabilite.styled";

import useModalState from "../../../../hooks/useModalState";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal/Modal";
import DataTable from "../../../../components/DataTable";
import { PageContainer, RowAction } from "../../../../components/PageContainer";
import StatusCell from "./StatusCell";
import RenderModalFormContent from "../../../../components/Modal/RenderModalContent";
import listOfView, { ADD_DEMANDE } from "./ViewsModal/listOfView";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAccountingRequest } from "../../../../features/AccountingRequest/AccountingRequestAsyn.action";
import { defaultPageSize } from "../../../../config/constantes";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { cleanAgentNoMatricule } from "../../../../services/utils/user";

const DemandeComptability = () => {
  const dispatch = useDispatch();

  const { collections, status, count } = useSelector(
    (state) => state.AccountingRequestByPageReducer
  );
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
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
    if (!idAgent) return;
    const payload = {
      idAgent,
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };
    const fetchPromise = dispatch(retrieveAccountingRequest(payload));

    if (collections.length > 0) onPageTotalCountChange(count);

    return () => {
      fetchPromise.abort();
    };
  }, [pageIndex, idAgent, search]);

  const ShowAgent = (agent) => {
    const { matricule, firstname, lastname } = agent;
    return cleanAgentNoMatricule(matricule, firstname, lastname);
  };

  const columns = [
    { Header: "Matricule", accessor: "matricule" },
    { Header: "Agent", Cell: ({ row }) => ShowAgent(row.original) },
    { Header: "Objet de la demande", accessor: "subject" },
    { Header: "Montant", accessor: "amount" },
    { Header: "Date et Heures", accessor: "date" },
    {
      Header: "Status",
      accessor: "requestState",
      Cell: ({ value }) => <StatusCell status={value} />,
    },
  ];

  const handleClickAdd = () => {
    toggleModal({
      view: ADD_DEMANDE,
      data: { idAgent, lastname, firstname, matricule },
    });
  };

  return (
    <>
      <PageContainer>
        <RowAction style={{ height: "100px" }}>
          <div></div>
          <AddDemandeBtn
            className="bg-btn-alt-theme-color"
            onClick={handleClickAdd}
          >
            Ajouter
          </AddDemandeBtn>
        </RowAction>
        <DemandeCompatibiliteContainer>
          <DataTable
            data={collections}
            className="table_omptablility"
            columns={columns}
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
        </DemandeCompatibiliteContainer>
      </PageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen} onClose={closeModal}>
          <RenderModalFormContent
            enumOfView={listOfView}
            view={modalState.view}
            onCloseModal={closeModal}
            payload={modalState.data}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default DemandeComptability;
