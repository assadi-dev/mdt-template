import React from "react";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../config/constantes";
import { useEffect } from "react";
import {
  ActionButton,
  PageContainer,
  Row,
  RowAction,
} from "../../../../components/PageContainer";
import { AddBtn } from "./Saisie.styled";
import DataTable from "../../../../components/DataTable";

const Saisie = () => {
  const {
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
    pageIndex,
    search,
    totalCount,
    pageSize,
  } = useCustomPagination(defaultPageSize, 0, 0, "");

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: pageSize, search },
    };
  }, [pageIndex, search]);

  const collections = [];
  const columns = [
    { Header: "Agent", accessor: "name" },
    { Header: "Date de saisie", accessor: "faction" },
    { Header: "Poste", accessor: "nb_grades" },
    { Header: "Dépôt", accessor: "depot" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <ActionCells
          data={row.original}
          onEdit={handleClickEdit}
          onDelete={handleClicDelete}
          canDelete={true}
          canEdit={true}
        />
      ),
    },
  ];

  return (
    <PageContainer>
      <h1>Saisie</h1>
      <RowAction style={{ height: "100px" }}>
        <div></div>
        <AddBtn className="bg-btn-alt-theme-color">Ajouter</AddBtn>
      </RowAction>
      <DataTable
        columns={columns}
        data={collections}
        initialStatePagination={{
          pageIndex,
          pageSize,
        }}
        totalCount={totalCount}
        manualPagination={true}
        isLoading={false}
        isSuccess={true}
        onPageChange={onPageChange}
        onPageTotalCountChange={onPageTotalCountChange}
        onSearchValue={handleSearch}
      />
    </PageContainer>
  );
};

export default Saisie;
