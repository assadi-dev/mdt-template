import React from "react";
import { TablePageContainer } from "./AccusationDatatable.styled";

const AccusationTablePaginate = ({
  pageIndex = 1,
  instance,
  prevBtnRef,
  nextBtnRef,
}) => {
  console.log(instance);

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
          {"<"}
        </button>
      }

      <button
        type="button"
        onClick={handleClickNext}
        ref={nextBtnRef}
        className="bg-btn-theme-color"
      >
        {">"}
      </button>
    </TablePageContainer>
  );
};

export default AccusationTablePaginate;
