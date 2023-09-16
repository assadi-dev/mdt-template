import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";

//Actions
const PAGE_CHANGED = "PAGE_CHANGED";
const PAGE_SIZE_CHANGED = "PAGE_SIZE_CHANGED";
const TOTAL_COUNT_CHANGED = "TOTAL_COUNT_CHANGED";
const SEARCH = "SEARCH";

//End Action

const paginateReducer = (state, { type, payload }) => {
  switch (type) {
    case PAGE_CHANGED:
      return {
        ...state,
        pageIndex: payload,
      };
    case PAGE_SIZE_CHANGED:
      return {
        ...state,
        pageSize: payload,
      };
    case TOTAL_COUNT_CHANGED:
      return {
        ...state,
        totalCount: payload,
      };
    case SEARCH:
      return {
        ...state,
        search: payload,
      };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const useCustomPagination = (
  pageSizeValue = 5,
  pageIndexValue = 0,
  totalCountValue = 0,
  searchValue
) => {
  const [{ pageIndex, pageSize, totalCount, search }, dispatchPaginate] =
    useReducer(paginateReducer, {
      pageIndex: pageIndexValue,
      pageSize: pageSizeValue,
      totalCount: totalCountValue,
      search: searchValue,
    });

  /**
   * Met à jours la numero de la page
   * @param {number} pageIndex
   */
  const onPageChange = (pageIndex) => {
    dispatchPaginate({ type: PAGE_CHANGED, payload: pageIndex + 1 });
  };
  /**
   * met à jours le nombres count Total de la collection des donées
   * @param {number} count
   */
  const onPageTotalCountChange = (count) => {
    dispatchPaginate({ type: TOTAL_COUNT_CHANGED, payload: count });
  };

  /**
   * Met à jour la valeur recherché
   * @param {string} value
   */
  const handleSearch = (value) => {
    dispatchPaginate({ type: SEARCH, payload: value });
  };

  return {
    pageIndex,
    pageSize,
    totalCount,
    search,
    onPageChange,
    onPageTotalCountChange,
    handleSearch,
  };
};

export default useCustomPagination;
