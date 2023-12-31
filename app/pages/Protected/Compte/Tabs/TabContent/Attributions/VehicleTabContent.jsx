import React from "react";
import DataTable from "../../../../../../components/DataTable";
import { datetimeFormatFr } from "../../../../../../services/utils/dateFormat";
import { defaultPageSize } from "../../../../../../config/constantes";
import useCustomPagination from "../../../../../../hooks/useCustomPagination";
import { useGetvehicleAttributionQuery } from "../../../../../../features/VehicleAttribution/VehicleAttributionApi";

const VehicleTabContent = ({ idAgent }) => {
  const [skip, setSkip] = React.useState(true);
  React.useEffect(() => {
    if (!idAgent) return;
    setSkip(false);
  }, [idAgent]);

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

  const { data, isLoading, isSuccess } = useGetvehicleAttributionQuery(payload);

  const COLUMN = [
    {
      Header: "Type véhicule",
      accessor: "typeVehicle",
    },
    {
      Header: "ID véhicule",
      accessor: "idVehicle",
    },
    {
      Header: "Immatriculation véhicule",
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
        data={data?.data}
        isLoading={isLoading}
        isSuccess={isSuccess}
        manualPagination={true}
        onSearchValue={handleSearch}
        onPageChange={onPageChange}
        initialStatePagination={{
          pageIndex,
          pageSize,
        }}
        totalCount={data?.count}
      />
    </div>
  );
};

export default VehicleTabContent;
