import React from "react";
import DataTable from "../../../../../../components/DataTable";
import { datetimeFormatFr } from "../../../../../../services/utils/dateFormat";
import { defaultPageSize } from "../../../../../../config/constantes";
import useCustomPagination from "../../../../../../hooks/useCustomPagination";
import { useGetServiceWeaponEncodingQuery } from "../../../../../../features/ServiceWeaponEncoding/ServiceWeaponEncodingApi";

const ArmesTabContent = ({ idAgent }) => {
  const [skip, setSkip] = React.useState(true);
  React.useEffect(() => {
    if (!idAgent) return;
    setSkip(false);
  }, [idAgent]);

  const COLUMN = [
    {
      Header: "Type Arme",
      accessor: "type",
    },
    {
      Header: "N° Série",
      accessor: "serialNumber",
    },
    {
      Header: "Date d'attribution",
      accessor: "createdAt",
      Cell: ({ value }) => datetimeFormatFr(value?.date),
    },
  ];

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
  const { data, isLoading, isSuccess } = useGetServiceWeaponEncodingQuery(
    payload,
    { skip, refetchOnMountOrArgChange: true }
  );
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

export default ArmesTabContent;
