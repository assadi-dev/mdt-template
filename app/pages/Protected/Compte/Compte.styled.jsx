import styled from "styled-components";
import { HeaderTabSelect } from "../../../components/Tabs/Tabs.styled";

export const HeaderTabCivilSelect = styled(HeaderTabSelect)`
  .header-tab-btn {
    font-size: 1.3rem;

    @media screen and (min-width: 992px) {
      font-size: 1.6rem;
      padding-left: 2.3rem;
      padding-right: 2.3rem;
    }
  }
`;
