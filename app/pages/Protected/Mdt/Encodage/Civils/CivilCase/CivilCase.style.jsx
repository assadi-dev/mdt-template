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
    padding: 2.3rem 2.3rem 1rem 2.3rem;
  }
`;

export const AsideBarCivilDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .photo {
    width: 100%;
    height: 180px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 1;
    border-radius: 8px;
  }

  .photo-loader {
    border-radius: 8px;
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
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
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 2.6rem;
`;

export const ButtonDocumentContainer = styled.button`
  padding: 1rem;
  width: 75px;
  height: 55px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  position: relative;
  color: rgba(255, 255, 255, 0.5);

  svg {
    width: 35px;
    height: 35px;
  }
  &:hover {
    color: rgba(255, 255, 255, 1);

    &::after {
      opacity: 1;
      visibility: visible;
      transform: translateY(35px);
      font-size: 1.5rem;
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

export const CivilDetailLoaderContainer = styled.div`
  margin: 1.2rem 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 992px) {
    min-height: 450px;
  }
`;
