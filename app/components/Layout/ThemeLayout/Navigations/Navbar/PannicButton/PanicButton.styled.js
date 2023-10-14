import styled from "styled-components";

export const PanicAlertContainer = styled.div`
  position: absolute;
  min-width: 350px;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  border-radius: 8px;
  background: #ff1900;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 45px;
  top: 50%;
  left: 50%;
  align-items: center;
  transform: translate(-50%, -50%);
  color: #131b26;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 992px) {
    max-width: 640px;
  }
`;

export const UsercAtivate = styled.p`
  text-transform: uppercase;
  font-family: var(--font-title);
  width: 100%;
  white-space: nowrap;
`;

export const IconContainer = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
`;
