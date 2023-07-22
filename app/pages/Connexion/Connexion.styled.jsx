import styled from "styled-components";

export const ConnexionCard = styled.div`
  grid-template-rows: 80px 0.75fr;
  width: 42rem;
  margin: 10% auto;
  padding: 15px;
  border-radius: 10px;
  background: rgba(23, 23, 23, 0.8);
  box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 15px;
`;

export const ConnexionCardTitleContainer = styled.div`
  display: flex;
  grid-gap: 18px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ConnexionBodyContent = styled.div`
  @media screen and (min-width: 992px) {
    width: 75%;
    margin: 10px auto;
  }
`;
