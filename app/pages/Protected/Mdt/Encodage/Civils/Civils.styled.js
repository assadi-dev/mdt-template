import styled from "styled-components";
import {
  ActionButton,
  Button,
  Row,
} from "../../../../../components/PageContainer";
import SearchInputUser from "../../../../../components/Forms/SearchBarUser";
import { ModalFormContainer } from "../../../../../components/Forms/FormView.styled";
import { Link } from "react-router-dom";

export const HeaderPage = styled(Row)`
  min-height: 45px;
  justify-content: center;
  margin: 2rem auto;
  grid-gap: 1.3rem;
`;

export const CivilSearchInput = styled(SearchInputUser)`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 45rem;
  }
`;

export const EncodeCivilBtn = styled(Button)`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
`;

export const GridCivilCard = styled.div`
  display: grid;
  justify-content: center;
  min-height: 150px;
  width: 100%;
  padding-top: 2.3rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, 320px);
    grid-gap: 1.6rem;
  }
`;

/*** Form ****/

export const AddBtn = styled(ActionButton)`
  justify-self: end;
`;

export const ContentContainer = styled(ModalFormContainer)`
  @media screen and (min-width: 992px) {
    width: 850px;

    label {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const BodyContainer = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  width: 100%;
  padding: 0 1rem;
`;

export const HeaderGridForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.8rem;
  .start {
    width: 100%;
    justify-self: start;
  }
  .end {
    width: 100%;
    justify-self: end;
  }
`;

export const BodyGridForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.8rem;
  .start {
    width: 100%;
    justify-self: start;
  }
  .end {
    width: 100%;
    justify-self: end;
  }
`;

/** Photo Civil Form */

export const CivilFormPhotoContainer = styled.div`
  width: 190px;
  height: 190px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: grid;
  place-items: center;
  align-self: center;
  justify-self: center;
  font-style: italic;
  border-radius: 5px;
`;

/** CIVIL CARD **/

export const CivilCardContainer = styled(Link)`
  border-radius: 5px;
  padding: 1.3rem;
  display: flex;
  grid-gap: 1.3rem;
  width: 100%;
`;

export const CivilCardPhoto = styled.div`
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  border-radius: 5px;
`;

export const CivilCardInfo = styled.div`
  p:not(:last-of-type) {
    margin-bottom: 1.3rem;
  }
`;
