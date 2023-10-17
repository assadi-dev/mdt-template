import styled from "styled-components";
import {
  ActionButton,
  PageContainer,
} from "../../../../../components/PageContainer";
import {
  FormContainer,
  ModalContainer,
} from "../../../../../components/Forms/FormView.styled";

export const FusilladePageContainer = styled(PageContainer)`
  .table {
    th:not(:first-of-type),
    td:not(:first-of-type) {
      text-align: center;
    }
  }
`;

export const AddDossierFusilladeBtn = styled(ActionButton)`
  justify-self: end;
`;

export const DossierFusilladeFormContainer = styled(ModalContainer)`
  @media screen and (min-width: 992px) {
    width: 72rem;
  }
`;

export const RowGroupFusillade = styled.div`
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    grid-gap: 2rem;
    label {
      text-align: center;
    }
  }
`;
