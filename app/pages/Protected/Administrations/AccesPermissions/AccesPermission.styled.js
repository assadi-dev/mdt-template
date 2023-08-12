import styled from "styled-components";

export const AccessPermissionContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  padding-left: 18px;
  padding-top: 18px;
  .faction-selected {
    .tab-items {
      box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 25px 3px;
      transform: scale(1.1) translateY(-5px);
    }
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
    width: 50%;
    grid-gap: 1.5rem;
    .empblem-item {
    }
  }
`;

export const FactionSelectedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .title {
    margin-left: 5rem;
    white-space: nowrap;
    font-weight: 600;
    text-transform: uppercase;
    font-family: var(--font-title);
    text-shadow: 0 0 3px rgba(0, 0, 0, 1);
  }
`;

export const EmblemFaction = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  cursor: pointer;
  transition: all 0.35s;
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 18px 3px;
  }
  @media screen and (min-width: 992px) {
    width: 65px;
    height: 65px;
  }
`;
