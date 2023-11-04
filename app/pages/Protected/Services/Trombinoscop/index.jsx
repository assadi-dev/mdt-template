import React, { Suspense, useEffect, useTransition } from "react";
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

const Trombinoscop = () => {
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.TrombinoscopReducer
  );

  const handeSearchinput = (value) => {
    // console.log(value);
  };

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
      params: { item_per_page: pageSize, search: search },
    };

    const fetchTrombinoscopPromise = dispatch(
      retrieveAgentTrombinoscopAsync(payload)
    );

    return () => {
      fetchTrombinoscopPromise.abort();
    };
  }, []);

  return (
    <PageContainer>
      <HeaderRow>
        <TrombinoscopeSearchInput
          className="input-theme-color"
          onSearchInput={handeSearchinput}
          placeholder="Rechercher"
        />
      </HeaderRow>

      {status == "complete" ? (
        <TrombinoscopGrid status={status} collections={collections} />
      ) : (
        "Chargement en cours"
      )}
    </PageContainer>
  );
};

export default Trombinoscop;
