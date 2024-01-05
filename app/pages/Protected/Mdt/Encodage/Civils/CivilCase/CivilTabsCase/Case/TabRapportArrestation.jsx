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
  ListAddArrestReportModalView,
} from "./Views/modal/Arrest_report/ArrestReportListView";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArrestReportAsyncCollection } from "../../../../../../../../features/Civils/Reports/ReportAsyncAction";

const TabRapportArrestation = () => {
  const { modalState, openModal, closeModal } = useModalState();
  const { idCivil } = useParams();
  const dispatch = useDispatch();

  const { collections, status, count } = useSelector(
    (state) => state.ArrestReportReducer
  );

  const columns = [
    { Header: "N° Dossier", accessor: "id" },
    { Header: "Agent", accessor: "agent" },
    { Header: "Montant", accessor: "amount" },
    { Header: "date", accessor: "created_at" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => <ActionCells canEdit={true} canDelete={true} />,
    },
  ];
  const { loaderState, toggleLoader } = useLoader();
  useDelayed(toggleLoader, 1000);

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_ARREST_REPORT,
    });
  };

  const PromiseRef = React.useRef();
  if (!idCivil) return;
  React.useEffect(() => {
    const payload = {
      idCivil,
      params: { page: 1, item_per_page: 5, search: "" },
    };
    PromiseRef.current = dispatch(fetchArrestReportAsyncCollection(payload));
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
