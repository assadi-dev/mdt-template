import styled from "styled-components";

export const AccessPermissionContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  .faction-selected {
    box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 25px 3px;
    transform: scale(1.1) translateY(-25px);
  }
`;

export const AccessPermisssionHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 25px;
  width: 100%;
  .faction-tab-list {
    display: flex;
    align-items: center;
    min-height: 25px;
    width: 100%;
    grid-gap: 1.2rem;
    .empblem-item {
    }
  }
`;
