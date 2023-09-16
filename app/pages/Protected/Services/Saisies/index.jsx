import React from "react";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../config/constantes";
import { useEffect } from "react";

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

  return <div>Saisie</div>;
};

export default Saisie;
