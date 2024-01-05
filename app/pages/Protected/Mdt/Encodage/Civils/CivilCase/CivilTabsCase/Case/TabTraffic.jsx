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
  ListTrafficModalView,
} from "./Views/modal/Traffic/TrafficListVIew";
import useModalState from "../../../../../../../../hooks/useModalState";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TabTraffic = () => {
  const { modalState, openModal, closeModal } = useModalState();
  const { idCivil } = useParams();
  /*   const { collections, status, count } = useSelector(
    (state) => state.TrafficReducer
  ); */

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
      view: ADD_TRAFFIC,
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
        isLoading={loaderState}
        isSuccess={!loaderState}
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
