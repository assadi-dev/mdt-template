import React from "react";
import { PageContainer, Row } from "../../../../components/PageContainer";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../config/constantes";
import ActionCells from "../../../../components/DataTable/ActionCells";
import { PanicButtonDataTable } from "./PanicButton.styled";

const collections = [];
const status = "complete";
const totalCount = 0;

const PanicButton = () => {
  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  const handleClicDelete = () => {};

  const columns = [
    { Header: "Agent", accessor: "idAgent" },
    { Header: "Date", accessor: "date" },
    { Header: "Effet", accessor: "effet" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          canDelete={true}
          canEdit={false}
          onDelete={handleClicDelete}
        />
      ),
    },
  ];

  return (
    <>
      <PageContainer>
        <Row style={{ height: "100px" }}></Row>
        <PanicButtonDataTable
          columns={columns}
          data={collections}
          className="users-table"
          manualPagination={true}
          isLoading={status == "pending"}
          isSuccess={status == "complete"}
          totalCount={totalCount}
          initialStatePagination={{
            pageIndex,
            pageSize,
          }}
          onPageChange={onPageChange}
          onPageTotalCountChange={onPageTotalCountChange}
          onSearchValue={handleSearch}
        />
      </PageContainer>
    </>
  );
};

export default PanicButton;
