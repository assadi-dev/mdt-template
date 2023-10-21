import styled from "styled-components";
import { PageContainer } from "../../../../components/PageContainer";

export const ComptabiliteCsPage = styled(PageContainer)`
  .row-action {
    height: 100px;
  }

  .selected {
    opacity: 1 !important;
  }
  .accepted-btn {
    color: #fff;
    background-color: var(--green);
  }
  .rejected-btn {
    color: #fff;
    background-color: var(--red);
  }
`;

export const StateButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  display: grid;
  place-items: center;
  opacity: 0.4;
  &:hover:not(:disabled) {
    opacity: 1;
  }

  /*   &:active {
    transform: scale(0.7);
  }
 */
  &:disabled {
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  transition: all 0.35s;
`;
