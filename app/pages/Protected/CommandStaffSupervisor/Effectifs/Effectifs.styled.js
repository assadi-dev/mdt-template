import styled from "styled-components";
import { PageContainer } from "../../../../components/PageContainer";
import {
  FormContainer,
  ModalFormContainer,
} from "../../../../components/Forms/FormView.styled";
import MarkdowTextEditor from "../../../../components/TextEditor/MarkdowTextEditor";

export const EffectifPageContainer = styled(PageContainer)``;

export const EffectModalCOntainer = styled(ModalFormContainer)`
  min-height: 715px;
  .row-label {
    display: flex !important;
    align-items: center;
    grid-gap: 1rem;
  }

  .tab-header-list {
    margin: 1.3rem auto;
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

/*** EOW ***/

export const EowFormContainer = styled(FormContainer)`
  margin-top: 2rem;
  width: 100%;
`;

export const TextEOWCOntent = styled(MarkdowTextEditor)`
  margin: 0;
`;

/**** Form ****/
