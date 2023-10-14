import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 8px;
  padding: 1.3rem;
  width: 24rem;
  height: 25.5rem;
`;

export const IconCardContainer = styled.div`
  width: 160px;
  height: 110px;
  margin: 1rem auto;
  display: grid;
  place-items: center;
  svg {
    width: 45px;
    height: 45px;
    @media screen and (min-width: 992px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const CardVehiculesBody = styled.div`
  margin-top: 1rem;
  text-align: center;

  p {
    margin-bottom: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    overflow-x: hidden;
  }
`;
