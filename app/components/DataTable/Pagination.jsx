import React from "react";
import { PageIndexInput, PaginationContainer } from "./DataTable.styled";
import {
  CgPushChevronLeft,
  CgPushChevronRight,
  CgChevronLeft,
  CgChevronRight,
} from "react-icons/cg";

const Pagination = ({
  pageIndex,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  canPreviousPage,
  canNextPage,
  ...props
}) => {
  const handleChangePageIndex = (e) => {
    const value = e.target.value;
    // console.log(value);
    gotoPage(value);
  };

  return (
    <PaginationContainer {...props}>
      <button
        type="button"
        className="paginate-btn "
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        <CgPushChevronLeft />{" "}
      </button>

      <button
        type="button"
        className="paginate-btn "
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        <CgChevronLeft />{" "}
      </button>
      {
        <PageIndexInput
          type="text"
          id="pageIndex"
          value={pageIndex}
          min={1}
          readOnly
        />
      }
      <button
        type="button"
        className="paginate-btn"
        onClick={() => nextPage()}
        disabled={!canNextPage}
        onChange={handleChangePageIndex}
      >
        {" "}
        <CgChevronRight />{" "}
      </button>
      <button
        type="button"
        className="paginate-btn"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {" "}
        <CgPushChevronRight />{" "}
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
