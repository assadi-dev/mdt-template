import React, { useEffect, useState } from "react";
import { PageContainer } from "../../../components/PageContainer";
import { EndOfWatchSearchInput, HeaderRow } from "./EndOFWatch.styled";
import useDebounce from "../../../hooks/useDebounce";
import PaginateOriginal from "../../../components/Pagination/PaginateOriginal";
import EndOfWatchGrid from "./EndOfWatchGrid";

const EndOfWatch = () => {
  const [searchAgent, setSearchAgent] = useState("");
  const { debouncedValue } = useDebounce(searchAgent, 500);
  const ITEM_PER_PAGE = 25;
  const handeSearchinput = (value) => {
    setSearchAgent(value);
  };
  const [pageIndex, setPageIndex] = useState(1);
  const MAX_PAGE = 1; //Math.ceil(count / ITEM_PER_PAGE);

  const handleSetPage = (increment) => {
    setPageIndex((current) => (current += increment));
  };

  useEffect(() => {
    try {
      const payload = {
        page: pageIndex,
        params: { item_per_page: ITEM_PER_PAGE, search: debouncedValue },
      };
      //Fetch End of Watch
    } catch (error) {}
  }, []);

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

      <EndOfWatchGrid />
    </PageContainer>
  );
};

export default EndOfWatch;
