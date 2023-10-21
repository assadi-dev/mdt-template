import styled from "styled-components";
import { Button, PageContainer } from "../../../../../components/PageContainer";
import { ModalFormContainer } from "../../../../../components/Forms/FormView.styled";

export const AttributionVehicule = styled(PageContainer)``;

export const AddAttributionVehiculeButton = styled(Button)`
  justify-self: end;
`;

export const ModalFormAttributionVehiculeContainer = styled(ModalFormContainer)`
  @media screen and (min-width: 992px) {
    width: 72rem;
  }
`;
