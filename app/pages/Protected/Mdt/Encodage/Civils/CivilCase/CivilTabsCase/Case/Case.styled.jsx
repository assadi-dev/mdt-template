import styled from "styled-components";
import { ModalFormContainer } from "../../../../../../../../components/Forms/FormView.styled";

export const CaseModalFormContainer = styled(ModalFormContainer)`
  @media screen and (min-width: 992px) {
    width: 52vw;
  }
`;

export const TabAccusationContainer = styled.div`
  min-height: 330px;

  //max-height: 330px;
  // overflow-y: auto;

  padding: 0 0.5rem;
  border-radius: 5px;
`;

export const ShowAmountContainer = styled.div`
  margin: 1.3rem auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  grid-gap: 1.3rem;
  width: 100%;
  min-height: 35px;
  padding: 1.3rem;
  border-radius: 5px;
  p {
    white-space: nowrap;
  }
  @media screen and (min-width: 992px) {
    min-height: 60px;
    font-size: 1.6rem;
    flex-direction: row;
  }
`;

export const RowInputForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  .flex {
    flex: 1;
  }
  .flex-25 {
    flex: 0 25%;
  }
`;
