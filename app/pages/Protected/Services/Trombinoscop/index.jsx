import React from "react";
import { PageContainer, Row } from "../../../../components/PageContainer";
import { FormControl } from "../../../../components/Forms/FormView.styled";
import {
  HeaderRow,
  TrombinoscopFormContainer,
  TrombinoscopGridCards,
  TrombinoscopeSearchInput,
} from "./Trombinoscop.styled";
import AgentCard from "./AgentCard";

const Trombinoscop = () => {
  const handeSearchinput = (value) => {
    console.log(value);
  };

  return (
    <PageContainer>
      <HeaderRow>
        <TrombinoscopeSearchInput
          className="input-theme-color"
          onSearchInput={handeSearchinput}
          placeholder="Rechercher"
        />
      </HeaderRow>
      <TrombinoscopGridCards>
        <AgentCard />
        <AgentCard />
        <AgentCard />
        <AgentCard />
        <AgentCard />
      </TrombinoscopGridCards>
    </PageContainer>
  );
};

export default Trombinoscop;
