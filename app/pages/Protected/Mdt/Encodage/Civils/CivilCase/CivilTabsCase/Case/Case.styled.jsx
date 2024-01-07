import styled from "styled-components";
import { ModalFormContainer } from "../../../../../../../../components/Forms/FormView.styled";
import SwitchButton from "../../../../../../../../components/Button/SwitchButton";

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
  grid-gap: 1.56rem;
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
  width: 100%;
  gap: 1.8rem;

  .flex-align {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .flex-75 {
    flex: 0 75%;
  }
  .flex {
    flex: 1;
  }
  .flex-25 {
    flex: 0 25%;
  }

  @media screen and (min-width: 992px) {
    .input-form {
      min-height: 42px;
    }
  }
`;

export const SwitchAccusationBtn = styled(SwitchButton)`
  .react-toggle-track {
    height: 18px;
    width: 44px;
  }
  .react-toggle-thumb {
    height: 16px;
    width: 16px;
  }
`;

export const LawSwitchRowContainer = styled.div`
  margin: 0 auto 2.3rem auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-gap: 1.56rem;
  width: 100%;
  min-height: 35px;
  padding: 1.3rem;
  border-radius: 5px;
  p {
    white-space: nowrap;
  }
  @media screen and (min-width: 992px) {
    min-height: 60px;
    font-size: 1.3rem;
  }
`;

export const TotalSentenceContainer = styled.p`
  min-width: 115px;
  text-align: center;
`;

export const GroupedOptionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.25rem;
  width: 100%;

  /*   border-bottom: 2px solid red;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1rem 0.5rem; */
`;

export const BadgeGrouedOption = styled.span`
  background-color: #ebecf0;
  border-radius: 2em;
  color: #172b4d;
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  min-width: 1;
  padding: 0.25rem 0.5em;
  text-align: "center";
`;

export const OptionBodyContainer = styled.div`
  padding-left: 1rem;
`;
