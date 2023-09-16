import styled from "styled-components";
import { ActionButton } from "../../../../components/PageContainer";
import { ModalFormContainer } from "../../../../components/Forms/FormView.styled";

export const AddBtn = styled(ActionButton)`
  justify-self: end;
`;

export const ContentContainer = styled(ModalFormContainer)`
  @media screen and (min-width: 992px) {
    width: 72rem;
  }
`;
