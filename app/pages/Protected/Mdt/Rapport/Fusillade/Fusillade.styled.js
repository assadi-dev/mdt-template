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

export const RowSaisieDossierFusillade = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-gap: 1.3rem;
`;

export const SaisieListSection = styled.div`
  padding: 1rem 0;
`;

export const RowInputSaisielistContainer = styled.ul`
  overflow-y: auto;
  min-height: 80px;
  max-height: 240px;
  transition: all 0.25s;

  li {
    display: grid;
    grid-template-columns: 1fr 80px;
    position: relative;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const RemoveRowSaisieButtonCol = styled.div`
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  justify-self: center;
`;

export const AddRowButton = styled.button`
  display: flex;
  grid-gap: 1rem;
  align-items: center;
  svg {
    width: 15px;
    height: 15px;
  }
  :active {
    opacity: 0.5;
  }
`;

export const RemoveRowSaisieButton = styled.span`
  display: grid;
  place-content: center;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  justify-self: center;
  svg {
    width: 10px;
    height: 10px;
  }
`;

export const RowAddSaisiAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
