import styled from "styled-components";
import { ModalFormContainer } from "../../../../../../../../../../../components/Forms/FormView.styled";

export const ArrestFolderFormContainer = styled(ModalFormContainer)`
  @media screen and (min-width: 992px) {
    width: 58vw;
  }
`;

export const MainViewContainer = styled.div`
  min-height: 100px;
  max-height: 90vh;
  overflow-y: auto;
`;
