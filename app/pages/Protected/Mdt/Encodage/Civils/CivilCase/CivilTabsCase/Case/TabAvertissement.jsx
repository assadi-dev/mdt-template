import React, { useEffect } from "react";
import { CivilTabsContentRowAction } from "../CivilTabs.styled";
import { Button } from "../../../../../../../../components/PageContainer";
import DataTable from "../../../../../../../../components/DataTable";
import ActionCells from "../../../../../../../../components/DataTable/ActionCells";
import useDelayed from "../../../../../../../../hooks/useDelayed";
import useLoader from "../../../../../../../../hooks/useLoader";
import useModalState from "../../../../../../../../hooks/useModalState";
import Modal from "../../../../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../../../../components/Modal/RenderModalFormContent";
import {
  ADD_AVERTISSEMENT,
  ListAvertissementModalView,
} from "./Views/modal/Avertissement/AvertissementListView";
import { createPortal } from "react-dom";
import { datetimeFormatFr } from "../../../../../../../../services/utils/dateFormat";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvertissementAsyncCollection } from "../../../../../../../../features/Civils/Reports/ReportAsyncAction";
import { useParams } from "react-router-dom";

const TabAvertissement = () => {
  const { modalState, openModal, closeModal } = useModalState();

  const dispatch = useDispatch();
  const { idCivil } = useParams();

  const { idAgent, lastname, firstname, matricule } = useSelector(
    (state) => state.AuthenticateReducer
  );

  const { collections, status, count } = useSelector(
    (state) => state.AvertissementReducer
  );

  const columns = [
    { Header: "N° Dossier", accessor: "numeroAvertissement" },
    { Header: "Agent", accessor: "agent" },
    {
      Header: "date",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => <ActionCells canEdit={true} canDelete={true} />,
    },
  ];

  const handleClickAddbtn = () => {
    openModal({
      view: ADD_AVERTISSEMENT,
      data: { idCivil, idAgent, lastname, firstname, matricule },
    });
  };

  const primiseRef = React.useRef();

  useEffect(() => {
    if (!idCivil) return;
    const payload = {
      idCivil,
      params: { page: 1, item_per_page: 5, search: "" },
    };

    primiseRef.current = dispatch(fetchAvertissementAsyncCollection(payload));

    return () => {
      primiseRef.current?.abort();
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
            enumOfView={ListAvertissementModalView}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default TabAvertissement;
