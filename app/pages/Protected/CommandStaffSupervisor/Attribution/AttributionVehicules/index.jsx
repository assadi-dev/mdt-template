import React, { useEffect, useRef } from "react";
import {
  AddAttributionVehiculeButton,
  AttributionVehicule,
} from "./AttributionVehicules.styled";
import { RowAction } from "../../../../../components/PageContainer";
import DataTable from "../../../../../components/DataTable";
import useLoader from "../../../../../hooks/useLoader";
import useDelayed from "../../../../../hooks/useDelayed";
import ActionCells from "../../../../../components/DataTable/ActionCells";
import {
  ADD_ATTRIBUTION_VEHICULE,
  DELETE_ATTRIBUTION_VEHICULE,
  EDIT_ATTRIBUTION_VEHICULE,
  SHOW_ATTRIBUTION_VEHICULE,
  listOfAttributionVehicule,
} from "./Views/ListOfViews";
import useModalState from "../../../../../hooks/useModalState";
import Modal from "../../../../../components/Modal/Modal";
import RenderModalFormContent from "../../../../../components/Modal/RenderModalFormContent";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { retrieveVehicleAttributionAsync } from "../../../../../features/VehicleAttribution/VehicleAsynAction";
import { defaultPageSize } from "../../../../../config/constantes";
import useCustomPagination from "../../../../../hooks/useCustomPagination";

const AttributionVehicules = () => {
  const { endLoader, loaderState } = useLoader();
  useDelayed(endLoader, 1000);
  const dispatch = useDispatch();
  const { collections, count, status, error } = useSelector(
    (state) => state.VehicleAttributionReducer
  );

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

  const COLUMNS = [
    {
      Header: "N° Attribution",
      accessor: "numeroAttribution",
    },
    {
      Header: "Agent",
      accessor: "agentAttributed",
    },
    {
      Header: "Grades",
      accessor: "grade",
    },
    {
      Header: "Type de vehicule",
      accessor: "typeVehicle",
    },
    {
      Header: "ID Vehicule",
      accessor: "idVehicle",
    },
    {
      Header: "Plaque du véhicule",
      accessor: "immatriculation",
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          canEdit={true}
          canDelete={true}
          onEdit={handleClikEditAttributionVehicule}
          onDelete={handleClikDeletAttributionVehicule}
        />
      ),
    },
  ];

  const promiseVehicleAttributionRef = useRef(new AbortController());

  useEffect(() => {
    try {
      const payload = {
        page: pageIndex,
        params: { item_per_page: pageSize, search: search },
      };
      promiseVehicleAttributionRef.current = dispatch(
        retrieveVehicleAttributionAsync(payload)
      );
      onPageTotalCountChange(count);

      return () => {
        promiseVehicleAttributionRef.current?.abort();
      };
    } catch (error) {}
  }, [pageIndex, count, search]);

  const handleClikAddAttributionVehicule = () => {
    openModal({
      view: ADD_ATTRIBUTION_VEHICULE,
    });
  };
  const handleClikEditAttributionVehicule = (attributionVehicule) => {
    openModal({
      view: EDIT_ATTRIBUTION_VEHICULE,
      data: attributionVehicule,
    });
  };
  const handleClikDeletAttributionVehicule = (attributionVehicule) => {
    openModal({
      view: DELETE_ATTRIBUTION_VEHICULE,
      data: attributionVehicule,
    });
  };

  return (
    <AttributionVehicule>
      <RowAction className="row-action-page">
        <div></div>
        <AddAttributionVehiculeButton
          className="bg-btn-alt-theme-color"
          onClick={handleClikAddAttributionVehicule}
        >
          Attribuer un véhicule
        </AddAttributionVehiculeButton>
      </RowAction>
      <DataTable
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
      {createPortal(
        <Modal isOpen={modalState.isOpen}>
          <RenderModalFormContent
            view={modalState.view}
            payload={modalState.data}
            onCloseModal={closeModal}
            enumOfView={listOfAttributionVehicule}
          />
        </Modal>,
        document.body
      )}
    </AttributionVehicule>
  );
};

export default AttributionVehicules;
