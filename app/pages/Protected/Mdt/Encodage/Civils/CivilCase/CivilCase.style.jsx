import styled from "styled-components";

export const CivilCasePageContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const CivilCasGridContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 350px 1fr;
  }
`;

export const AsideBarCivilContainer = styled.div`
  width: 240px;
  padding: 2.3rem 2rem;
  border-radius: 8px;
  min-height: 75vh;
  @media screen and (min-width: 992px) {
    padding: 2.3rem 3.2rem;
  }
`;

export const AsideBarCivilDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .photo {
    width: 100%;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 1;
    border-radius: 8px;
  }

  .civil-name {
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 2rem 0;
    text-align: center;
    @media screen and (min-width: 992px) {
      font-size: 1.8rem;
    }
  }

  .info-detailed {
    margin-top: 1.3rem;
    font-size: 1.3rem;
    li:not(:last-of-type) {
      margin-bottom: 1rem;
    }

    li {
    }

    p {
      max-width: 100%;
      margin-bottom: 0.3rem;
    }
  }

  .label {
    font-weight: bold;
    margin-right: 0.4rem;
  }
`;

export const RowAction = styled.div`
  margin: 28px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/** Main Section **/

export const CivilMainSection = styled.div`
  padding: 1rem;
`;

export const RowButtonDocument = styled.div`
  width: 90%;
  margin: 16px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 2.6rem;
`;

export const ButtonDocumentContainer = styled.div`
  padding: 1rem;
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  position: relative;
  svg {
    width: 35px;
    height: 35px;
  }
  &:hover {
    &::after {
      opacity: 1;

      visibility: visible;
      transform: translateY(35px);
    }
  }
  &::after {
    content: "${(props) => (props.label ? props.label : " ")}";
    position: absolute;
    bottom: 0;
    transform: translateY(10px);
    z-index: -1;
    visibility: hidden;
    transition: all 0.25s;
    opacity: 0;
  }
`;
