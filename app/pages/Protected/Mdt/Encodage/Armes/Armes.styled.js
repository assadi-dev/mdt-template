import styled from "styled-components";
import SearchInput from "../../../../../components/Forms/SearchInput";
import { Button, Row } from "../../../../../components/PageContainer";

export const HeaderPage = styled(Row)`
  min-height: 45px;
  justify-content: center;
  margin: 2rem auto;
  grid-gap: 1.3rem;
`;

export const ArmesSearchInput = styled(SearchInput)`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 45rem;
  }
`;

export const EncodeArmesBtn = styled(Button)`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  @media screen and (min-width: 992px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const GridArmesCard = styled.div`
  display: grid;
  justify-content: center;
  min-height: 150px;
  width: 100%;
  grid-gap: 1.3rem;
  grid-template-columns: repeat(auto-fit, 24rem);
`;

export const HeaderRow = styled(Row)`
  min-height: 55px;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2.3rem;
  justify-content: space-between;
  width: 100%;
`;
