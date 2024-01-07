import React from "react";
import { CivilTabsContentRowAction } from "../CivilTabs.styled";
import DataTable from "../../../../../../../../components/DataTable";
import { Button } from "../../../../../../../../components/PageContainer";
import useLoader from "../../../../../../../../hooks/useLoader";
import useDelayed from "../../../../../../../../hooks/useDelayed";
import Modal from "../../../../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../../../../components/Modal/RenderModalFormContent";
import { createPortal } from "react-dom";
import { datetimeFormatFr } from "../../../../../../../../services/utils/dateFormat";
import {
  ADD_TRAFFIC,
  DELETE_TRAFFIC,
  EDIT_TRAFFIC,
  ListTrafficModalView,
} from "./Views/modal/Traffic/TrafficListVIew";
import useModalState from "../../../../../../../../hooks/useModalState";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTraffficAsyncCollection } from "../../../../../../../../features/Civils/Reports/ReportAsyncAction";
import ActionCells from "../../../../../../../../components/DataTable/ActionCells";
import { defaultPageSize } from "../../../../../../../../config/constantes";
import useCustomPagination from "../../../../../../../../hooks/useCustomPagination";
import ShowAmount from "./Views/ShowAmount";

const TabTraffic = () => {
  const { modalState, openModal, closeModal } = useModalState();
  const { idCivil } = useParams();
  const dispatch = useDispatch();
  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );
  const { collections, status, count } = useSelector(
    (state) => state.TrafficReducer
  );

  const columns = [
    { Header: "N° Dossier", accessor: "numeroTraffic" },
    { Header: "Agent", accessor: "agent" },
    {
      Header: "Montant",
      accessor: "amount",
      Cell: ({ value }) => <ShowAmount amount={value} />,
    },
    {
      Header: "Date",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value.date),
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
    PromiseRef.current = dispatch(fetchTraffficAsyncCollection(payload));
    onPageTotalCountChange(count);

    return () => {
      PromiseRef.current?.abort();
    };
  }, [idCivil, pageIndex, search, count]);

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_TRAFFIC,
      data: { idCivil, idAgent, lastname, firstname, matricule },
    });
  };

  const handleClickEdit = (trafficData) => {
    openModal({
      view: EDIT_TRAFFIC,
      data: trafficData,
    });
  };

  const handleClickDelete = (trafficData) => {
    openModal({
      view: DELETE_TRAFFIC,
      data: trafficData,
    });
  };

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
            enumOfView={ListTrafficModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default TabTraffic;
