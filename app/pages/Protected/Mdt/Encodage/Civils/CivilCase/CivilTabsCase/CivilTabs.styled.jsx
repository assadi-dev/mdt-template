import styled from "styled-components";
import { HeaderTabSelect } from "../../../../../../../components/Tabs/Tabs.styled";

export const TabsBody = styled.div`
  padding: 1.8rem 0;
`;

export const CivilTabsHeaderSelect = styled(HeaderTabSelect)`
  margin-top: 55px;
  .header-tab-btn {
    font-size: 1.3rem;
    font-weight: bolder;

    @media screen and (min-width: 992px) {
      font-size: 1.6rem;
      padding-left: 2.3rem;
      padding-right: 2.3rem;
    }
  }
`;

export const CivilTabsContentRowAction = styled.div`
  margin-bottom: 38px;
  width: 100%;
  display: flex;
  justify-content: end;
`;
