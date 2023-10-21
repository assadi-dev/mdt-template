import styled from "styled-components";
import { Button, PageContainer } from "../../../../../components/PageContainer";
import { ModalFormContainer } from "../../../../../components/Forms/FormView.styled";
import MarkdowTextEditor from "../../../../../components/TextEditor/MarkdowTextEditor";

export const AttributionSanctionPageContainer = styled(PageContainer)``;

export const AddSanctionBtn = styled(Button)`
  justify-self: end;
`;

export const ModalFormSanctionContainer = styled(ModalFormContainer)`
  @media screen and (min-width: 992px) {
    width: 72rem;
  }
`;

export const SanctionTextContent = styled(MarkdowTextEditor)`
  margin: 0 !important;
`;
