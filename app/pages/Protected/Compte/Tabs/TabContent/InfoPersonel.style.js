import styled from "styled-components";
import { FormControl } from "../../../../../components/Forms/FormView.styled";

export const UserFormContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 2.6rem;
  border-radius: 8px;
  border: none !important;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.35) !important;
`;

export const RowInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.3rem;
`;

export const FormBottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.6rem 0;
`;

export const PhoneContainer = styled(FormControl)`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;
