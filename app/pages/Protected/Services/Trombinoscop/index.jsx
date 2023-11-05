import React, { Suspense, useEffect, useState, useTransition } from "react";
import { PageContainer, Row } from "../../../../components/PageContainer";
import { FormControl } from "../../../../components/Forms/FormView.styled";
import {
  HeaderRow,
  TrombinoscopFormContainer,
  TrombinoscopGridCards,
  TrombinoscopeSearchInput,
} from "./Trombinoscop.styled";
import AgentCard from "./AgentCard";
import useCustomPagination from "../../../../hooks/useCustomPagination";
import { defaultPageSize } from "../../../../config/constantes";
import { useDispatch, useSelector } from "react-redux";
import retrieveAgentTrombinoscopAsync from "../../../../features/Trombinoscop/TrombinoscopAsync.action";
import InfiniteScroll from "react-infinite-scroll-component";
import TrombinoscopGrid from "./TrombinoscopGrid";
import useDebounce from "../../../../hooks/useDebounce";
import PaginationSection from "./PaginationSection";

const Trombinoscop = () => {
  const dispatch = useDispatch();
  const { collections, status, count, error } = useSelector(
    (state) => state.TrombinoscopReducer
  );

  const [searchAgent, setSearchAgent] = useState("");
  const { debouncedValue } = useDebounce(searchAgent, 500);
  const ITEM_PER_PAGE = 10;

  const handeSearchinput = (value) => {
    setSearchAgent(value);
  };
  const [pageIndex, setPageIndex] = useState(1);
  const MAX_PAGE = Math.ceil(count / ITEM_PER_PAGE);

  const handleSetPage = (increment) => {
    setPageIndex((current) => (current += increment));
  };

  useEffect(() => {
    const payload = {
      page: pageIndex,
      params: { item_per_page: ITEM_PER_PAGE, search: debouncedValue },
    };
    let fetchTrombinoscopPromise;
    try {
      fetchTrombinoscopPromise = dispatch(
        retrieveAgentTrombinoscopAsync(payload)
      );
    } catch (error) {}

    return () => {
      fetchTrombinoscopPromise?.abort();
    };
  }, [debouncedValue, pageIndex]);

  return (
    <PageContainer>
      <HeaderRow>
        <TrombinoscopeSearchInput
          className="input-theme-color"
          onSearchInput={handeSearchinput}
          placeholder="Rechercher"
        />
      </HeaderRow>
      <HeaderRow>
        <div></div>
        <PaginationSection
          onNext={() => handleSetPage(1)}
          onPrev={() => handleSetPage(-1)}
          pageIndex={pageIndex}
          maxPage={MAX_PAGE}
        />
      </HeaderRow>

      {status == "complete" ? (
        <TrombinoscopGrid
          status={status}
          collections={collections}
          searchAgent={searchAgent}
        />
      ) : (
        "Chargement en cours"
      )}
    </PageContainer>
  );
};

export default Trombinoscop;
