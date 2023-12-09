import React, { useEffect, useRef } from "react";
import { PageContainer, Row } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import ActionCell from "./ActionCell";
import { createPortal } from "react-dom";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../../hooks/useModalState";
import listRapportView, {
  DELETE_RAPPORT,
  SHOW_RAPPORT,
} from "./ModalView/listRapportView";
import useCustomPagination from "../../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../../config/constantes";
import { useDispatch, useSelector } from "react-redux";
import { retieaveRookieReportAsync } from "../../../../../features/RookieReport/RookieReportAsynAction";
import { datetimeFormatFr } from "../../../../../services/utils/dateFormat";

const ConsultationRapportRookie = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const dispatch = useDispatch();
  const { collections, status, error, count } = useSelector(
    (state) => state.RookieReportReducer
  );
  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  const PromiseRef = useRef(new AbortController());

  const showRapport = (raport) => {
    openModal({ view: SHOW_RAPPORT, data: raport });
  };
  const deleteRapport = (raport) => {
    openModal({ view: DELETE_RAPPORT, data: raport });
  };

  const columns = [
    {
      Header: "N° Rapport",
      accessor: "numeroReport",
    },
    {
      Header: "Agent",
      accessor: "agentFullname",
    },

    {
      Header: "Rookie concerné",
      accessor: "rookieFullname",
    },
    {
      Header: "Date et heure",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCell
          onShowRapport={showRapport}
          onDelete={deleteRapport}
          rapportdata={row.original}
        />
      ),
    },
  ];

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search: search },
    };

    PromiseRef.current = dispatch(retieaveRookieReportAsync(payload));
    onPageTotalCountChange(count);

    return () => {
      PromiseRef.current?.abort();
    };
  }, [pageIndex, count, search]);

  return (
    <>
      <PageContainer>
        <Row style={{ height: "100px" }}></Row>
        <DataTable
          data={collections}
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
      </PageContainer>
      {createPortal(
        <Modal isOpen={modalState.isOpen} onClose={closeModal}>
          <RenderModalFormContent
            view={modalState.view}
            onCloseModal={closeModal}
            payload={modalState.data}
            enumOfView={listRapportView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default ConsultationRapportRookie;
