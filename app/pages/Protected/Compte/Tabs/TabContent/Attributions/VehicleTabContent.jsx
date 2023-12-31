import React from "react";
import DataTable from "../../../../../../components/DataTable";
import { datetimeFormatFr } from "../../../../../../services/utils/dateFormat";
import { defaultPageSize } from "../../../../../../config/constantes";
import useCustomPagination from "../../../../../../hooks/useCustomPagination";

const VehicleTabContent = ({ idAgent }) => {
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
    idAgent,
    params: {
      page: pageIndex,
      search: search,
      item_per_page: defaultPageSize,
    },
  };

  const COLUMN = [
    {
      Header: "Type véhivule",
      accessor: "typeVehicle",
    },
    {
      Header: "ID véhicule",
      accessor: "idVehicle",
    },
    {
      Header: "Immatriiculation véhicule",
      accessor: "immatriculation",
    },
    {
      Header: "Date d'attribution",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },
  ];

  return (
    <div>
      <DataTable
        className="table-align-center-not-first"
        columns={COLUMN}
        // data={data?.data}
        isLoading={false}
        isSuccess={true}
        manualPagination={true}
        onSearchValue={handleSearch}
        onPageChange={onPageChange}
        initialStatePagination={{
          pageIndex,
          pageSize,
        }}
        // totalCount={data?.count}
      />
    </div>
  );
};

export default VehicleTabContent;
