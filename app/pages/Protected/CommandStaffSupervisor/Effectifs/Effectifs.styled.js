import styled from "styled-components";
import { PageContainer } from "../../../../components/PageContainer";
import { ModalFormContainer } from "../../../../components/Forms/FormView.styled";

export const EffectifPageContainer = styled(PageContainer)``;

export const EffectModalCOntainer = styled(ModalFormContainer)`
  .row-label {
    display: flex !important;
    align-items: center;
    grid-gap: 1rem;
  }
  @media screen and (min-width: 990px) {
    width: 72rem;
  }
`;

/*** Form  ***/

export const GridRowHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  .grid-a {
    justify-self: start;
    width: 100%;
  }
  .grid-b {
    justify-self: end;
    width: 180px;
    height: 180px;
    @media screen and (min-width: 992px) {
      width: 240px;
      height: 240px;
    }
  }
`;

export const PhotoAgent = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 3px;
`;

/**** Form ****/
