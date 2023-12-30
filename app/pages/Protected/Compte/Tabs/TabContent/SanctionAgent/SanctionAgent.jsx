import React from "react";
import { SanctionPageContainer } from "./SanctionAgent.styled";
import DataTable from "../../../../../../components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { useGetSanctionByAgentQuery } from "../../../../../../features/Sanctions/SanctionApi";
import { defaultPageSize } from "../../../../../../config/constantes";
import useCustomPagination from "../../../../../../hooks/useCustomPagination";
import ActionCells from "../../../../../../components/DataTable/ActionCells";
import ShowSanction from "../../../../CommandStaffSupervisor/Attribution/Sanctions/ShowSanction";
import { datetimeFormatFr } from "../../../../../../services/utils/dateFormat";
import Modal from "../../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../../components/Modal/RenderModalContent";
import {
  SHOW_ATTRIBUTION_SANCTION,
  listOfViewSanction,
} from "../../../../CommandStaffSupervisor/Attribution/Sanctions/Views/listOfViews";
import { createPortal } from "react-dom";
import useModalState from "../../../../../../hooks/useModalState";

const SanctionAgent = () => {
  const { idAgent } = useSelector((state) => state.AuthenticateReducer);

  const [skip, setSkip] = React.useState(true);
  const { modalState, openModal, closeModal } = useModalState();
  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");
  const payload = {
    idAgent: 37,
    params: {
      page: pageIndex,
      search: search,
      item_per_page: defaultPageSize,
    },
  };
  const { data, isLoading, isSuccess } = useGetSanctionByAgentQuery(payload, {
    skip,
    refetchOnMountOrArgChange: true,
  });

  const handleClikShowSanction = (sanctionData) => {
    openModal({
      view: SHOW_ATTRIBUTION_SANCTION,
      data: sanctionData,
    });
  };

  const COLUMNS = [
    {
      Header: "Date",
      Cell: ({ row }) => {
        const createdAt = row.original.createdAt;
        return datetimeFormatFr(createdAt?.date);
      },
    },
    {
      Header: "Agent Concerné",
      accessor: "agentConcerned",
    },
    {
      Header: "Decideur(s)",
      accessor: "decisionMaker",
    },
    {
      Header: "Raison",
      accessor: "",
      Cell: ({ row }) => (
        <ShowSanction
          className="bg-show-btn"
          sanctionData={row.original}
          onShowSanction={handleClikShowSanction}
        />
      ),
    },
  ];

  React.useEffect(() => {
    if (!idAgent) return;
    setSkip(false);
  }, [idAgent]);

  return (
    <>
      <SanctionPageContainer>
        {
          <DataTable
            className="table-align-center-not-first"
            columns={COLUMNS}
            data={data?.data}
            isLoading={isLoading}
            isSuccess={isSuccess}
            manualPagination={true}
            onPageTotalCountChange={onPageTotalCountChange}
            onSearchValue={handleSearch}
            onPageChange={onPageChange}
            initialStatePagination={{
              pageIndex,
              pageSize,
            }}
            totalCount={totalCount}
          />
        }
      </SanctionPageContainer>

      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfViewSanction}
          />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default SanctionAgent;
