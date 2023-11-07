import React from "react";
import {
  CgPushChevronLeft,
  CgPushChevronRight,
  CgChevronLeft,
  CgChevronRight,
} from "react-icons/cg";
import {
  ButtonPagination,
  PaginationSectionContainer,
  PangIndicator,
} from "./Trombinoscop.styled";

const PaginationSection = ({
  onPrev = () => {},
  onNext = () => {},
  pageIndex = 1,
  onStart = () => {},
  OnEnd = () => {},
  maxPage = 2,

  ...props
}) => {
  const canPrev = Number(pageIndex) < 2;
  const canNext = Number(pageIndex) >= maxPage;

  return (
    <PaginationSectionContainer>
      <ButtonPagination
        type="button"
        className="bg-btn-alt-theme-color"
        onClick={onStart}
        disabled={canPrev}
      >
        <CgPushChevronLeft />
      </ButtonPagination>
      <ButtonPagination
        type="button"
        className="bg-btn-alt-theme-color"
        onClick={onPrev}
        disabled={canPrev}
      >
        <CgChevronLeft />
      </ButtonPagination>
      <PangIndicator> {pageIndex}</PangIndicator>
      <ButtonPagination
        type="button"
        className="bg-btn-alt-theme-color"
        onClick={onNext}
        disabled={canNext}
      >
        <CgChevronRight />
      </ButtonPagination>
      <ButtonPagination
        type="button"
        className="bg-btn-alt-theme-color"
        onClick={OnEnd}
        disabled={canNext}
      >
        <CgPushChevronRight />
      </ButtonPagination>
    </PaginationSectionContainer>
  );
};

export default PaginationSection;
