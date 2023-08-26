import React from "react";

export const initialStatePagination = {
  pageIndex: 0,
  pageSize: 5,
  totalCount: 0,
  canPrevPage: false,
  canNextpage: false,
};

export const PAGE_CHANGED = "PAGE_CHANGED";
export const PAGE_SIZE_CHANGED = "PAGE_SIZE_CHANGED";
export const TOTAL_COUNT_CHANGED = "TOTAL_COUNT_CHANGED";

export const paginateReducer = (state, { type, payload }) => {
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
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
