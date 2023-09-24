import styled from "styled-components";
import { Button, Row } from "../../../../components/PageContainer";
import SearchInput from "../../../../components/Forms/SearchInput";

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
