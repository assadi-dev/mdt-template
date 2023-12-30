import React, { useEffect, useState } from "react";
import { PageContainer } from "../../../components/PageContainer";
import { EndOfWatchSearchInput, HeaderRow } from "./EndOFWatch.styled";
import useDebounce from "../../../hooks/useDebounce";
import PaginateOriginal from "../../../components/Pagination/PaginateOriginal";
import EndOfWatchGrid from "./EndOfWatchGrid";
import { useGetEndOfWatchCollectionsQuery } from "../../../features/EndOFWatch/EndOfWatchApi";

const EndOfWatch = () => {
  const [searchAgent, setSearchAgent] = useState("");
  const { debouncedValue } = useDebounce(searchAgent, 500);
  const ITEM_PER_PAGE = 25;
  const handeSearchinput = (value) => {
    setSearchAgent(value);
  };
  const [pageIndex, setPageIndex] = useState(1);

  const handleSetPage = (increment) => {
    setPageIndex((current) => (current += increment));
  };

  const { data, isSuccess, isLoading, error } =
    useGetEndOfWatchCollectionsQuery(pageIndex, {
      item_per_page: ITEM_PER_PAGE,
      search: debouncedValue,
    });

  const MAX_PAGE = Math.ceil(data?.count / ITEM_PER_PAGE) || 1;

  return (
    <PageContainer>
      <HeaderRow>
        <EndOfWatchSearchInput
          className="input-theme-color"
          onSearchInput={handeSearchinput}
          placeholder="Rechercher"
        />
      </HeaderRow>
      <HeaderRow>
        <div></div>
        <PaginateOriginal
          onNext={() => handleSetPage(1)}
          onPrev={() => handleSetPage(-1)}
          pageIndex={pageIndex}
          maxPage={MAX_PAGE}
        />
      </HeaderRow>

      <EndOfWatchGrid collections={data?.data} />
    </PageContainer>
  );
};

export default EndOfWatch;
