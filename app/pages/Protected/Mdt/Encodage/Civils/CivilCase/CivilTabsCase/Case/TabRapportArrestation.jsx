import React from "react";
import { CivilTabsContentRowAction } from "../CivilTabs.styled";
import { Button } from "../../../../../../../../components/PageContainer";
import DataTable from "../../../../../../../../components/DataTable";
import useDelayed from "../../../../../../../../hooks/useDelayed";
import useLoader from "../../../../../../../../hooks/useLoader";
import { createPortal } from "react-dom";
import useModalState from "../../../../../../../../hooks/useModalState";
import { datetimeFormatFr } from "../../../../../../../../services/utils/dateFormat";
import Modal from "../../../../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../../../../components/Modal/RenderModalFormContent";
import {
  ADD_ARREST_REPORT,
  DELETE_ARREST_REPORT,
  EDIT_ARREST_REPORT,
  ListAddArrestReportModalView,
} from "./Views/modal/Arrest_report/ArrestReportListView";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArrestReportAsyncCollection } from "../../../../../../../../features/Civils/Reports/ReportAsyncAction";
import ActionCells from "../../../../../../../../components/DataTable/ActionCells";
import { defaultPageSize } from "../../../../../../../../config/constantes";
import useCustomPagination from "../../../../../../../../hooks/useCustomPagination";

const TabRapportArrestation = () => {
  const { modalState, openModal, closeModal } = useModalState();
  const { idCivil } = useParams();
  const dispatch = useDispatch();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const { collections, status, count } = useSelector(
    (state) => state.ArrestReportReducer
  );

  const columns = [
    { Header: "N° Dossier", accessor: "id" },
    { Header: "Agent", accessor: "agent" },
    { Header: "Montant", accessor: "amount" },
    {
      Header: "Date",
      accessor: "dateOfEntry",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          onEdit={handleClickEdit}
          onDelete={handleClickDelete}
          canEdit={true}
          canDelete={true}
        />
      ),
    },
  ];

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_ARREST_REPORT,
      data: { idCivil, idAgent, lastname, firstname, matricule },
    });
  };

  const handleClickDelete = (arrestData) => {
    openModal({
      view: DELETE_ARREST_REPORT,
      data: arrestData,
    });
  };
  const handleClickEdit = (arrestData) => {
    openModal({
      view: EDIT_ARREST_REPORT,
      data: arrestData,
    });
  };

  const PromiseRef = React.useRef();

  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  React.useEffect(() => {
    if (!idCivil) return;
    const payload = {
      idCivil,
      params: { page: pageIndex, item_per_page: defaultPageSize, search },
    };
    PromiseRef.current = dispatch(fetchArrestReportAsyncCollection(payload));
    onPageTotalCountChange(count);
    return () => {
      PromiseRef.current?.abort();
    };
  }, [idCivil]);

  return (
    <>
      <CivilTabsContentRowAction>
        <Button className="bg-btn-alt-theme-color" onClick={handleClickAddbtn}>
          Ajouter
        </Button>
      </CivilTabsContentRowAction>
      <DataTable
        columns={columns}
        className="case-table"
        manualPagination={true}
        data={collections}
        isLoading={status != "complete"}
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
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={ListAddArrestReportModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default TabRapportArrestation;
