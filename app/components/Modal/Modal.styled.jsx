import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 90%;
  margin: 5% auto 0 auto;
  @media screen and (min-width: 992px) {
    width: 42rem;
  }
  :before {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
