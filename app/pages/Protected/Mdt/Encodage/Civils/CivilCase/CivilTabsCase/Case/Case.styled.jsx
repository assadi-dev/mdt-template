import styled from "styled-components";
import { ModalFormContainer } from "../../../../../../../../components/Forms/FormView.styled";

export const CaseModalFormContainer = styled(ModalFormContainer)`
  @media screen and (min-width: 992px) {
    width: 52vw;
  }
`;

export const TabAccusationContainer = styled.div`
  max-height: 330px;
  overflow-y: auto;
  padding: 0 0.5rem;
  border-radius: 5px;
`;

export const ShowAmountContainer = styled.div`
  margin: 1.3rem auto;
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 25px;
  padding: 1.3rem;
  border-radius: 5px;
  p {
    width: fit-content;
    white-space: nowrap;
  }
  @media screen and (min-width: 992px) {
    min-height: 60px;
    font-size: 1.6rem;
  }
`;
