import React, { useEffect } from "react";
import { EffectifPageContainer } from "./Effectifs.styled";
import { RowAction } from "../../../../components/PageContainer";
import DataTable from "../../../../components/DataTable";
import useLoader from "../../../../hooks/useLoader";
import useDelayed from "../../../../hooks/useDelayed";
import ActionCells from "../../../../components/DataTable/ActionCells";
import Modal from "../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../components/Modal/RenderModalContent";
import useModalState from "../../../../hooks/useModalState";
import {
  DELETE_EFFECTIF,
  EDIT_EFFECTIF,
  listEffectifView,
} from "./Views/ListOfEffectifsView";
import { cleanNameAgent } from "../../../../services/utils/user";
import { useSelector, useDispatch } from "react-redux";
import { defaultPageSize } from "../../../../config/constantes";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { retrieveEffectifCollectionsAsync } from "../../../../features/Effectifs/EffectifsAsyncAction";

const Effectifs = () => {
  const { loaderState, toggleLoader } = useLoader();

  const dispatch = useDispatch();

  const { collections, status, count, error } = useSelector(
    (state) => state.EffectifsReducer
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

  const { modalState, openModal, closeModal } = useModalState();

  const handleClickEdit = (effectif) => {
    openModal({
      view: EDIT_EFFECTIF,
      data: effectif,
    });
  };
  const handleClickDelete = (effectif) => {
    openModal({
      view: DELETE_EFFECTIF,
      data: effectif,
    });
  };

  const COLUMNS = [
    {
      Header: "Matricule",
      accessor: "matricule",
    },
    {
      Header: "Agent",
      Cell: ({ row }) =>
        `${cleanNameAgent(row.original?.firstname, row.original?.lastname)}`,
    },
    {
      Header: "N°de téléphone",
      accessor: "phone",
    },
    {
      Header: "IBAN",
      accessor: "iban",
    },
    {
      Header: "Grade",
      accessor: "grade",
    },
    {
      Header: "Divisions",
      accessor: "division",
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canEdit={true}
          canDelete={false}
          onEdit={handleClickEdit}
          onDelete={handleClickDelete}
        />
      ),
    },
  ];

  const promiseEffectifsRef = React.useRef();

  useEffect(() => {
    try {
      const payload = {
        page: pageIndex,
        params: { item_per_page: pageSize, search: search },
      };
      promiseEffectifsRef.current = dispatch(
        retrieveEffectifCollectionsAsync(payload)
      );
      onPageTotalCountChange(count);
      return () => {
        promiseEffectifsRef.current?.abort();
      };
    } catch (error) {}
  }, [search, pageIndex, count]);

  return (
    <>
      <EffectifPageContainer>
        <RowAction className="row-action-page"></RowAction>
        <DataTable
          className="table-align-center-not-first"
          columns={COLUMNS}
          data={collections}
          isLoading={status == "pending"}
          isSuccess={status == "complete"}
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
      </EffectifPageContainer>
      <Modal isOpen={modalState.isOpen}>
        <RenderModalFormContent
          view={modalState.view}
          payload={modalState.data}
          enumOfView={listEffectifView}
          onCloseModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default Effectifs;
