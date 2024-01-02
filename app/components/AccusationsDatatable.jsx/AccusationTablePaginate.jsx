import React from "react";
import { TablePageContainer } from "./AccusationDatatable.styled";
import {
  CgPushChevronLeft,
  CgPushChevronRight,
  CgChevronLeft,
  CgChevronRight,
} from "react-icons/cg";

const AccusationTablePaginate = ({
  pageIndex = 1,
  instance,
  prevBtnRef,
  nextBtnRef,
}) => {
  const handleClickNext = () => {
    instance?.nextPage();
  };
  const handleClickPrev = () => {
    instance?.previousPage();
  };

  return (
    <TablePageContainer>
      {
        <button
          type="button"
          onClick={handleClickPrev}
          ref={prevBtnRef}
          className="bg-btn-theme-color"
        >
          <CgChevronLeft />
        </button>
      }

      <button
        type="button"
        onClick={handleClickNext}
        ref={nextBtnRef}
        className="bg-btn-theme-color"
      >
        <CgChevronRight />
      </button>
    </TablePageContainer>
  );
};

export default AccusationTablePaginate;
