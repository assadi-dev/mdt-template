import styled from "styled-components";

const colorDefault = "rgba(255, 255, 255, 0.3)";
const errorColor = "var(--red)";

export const ConnexionPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const ConnexionCard = styled.div`
  margin: 6% auto;
  display: grid;
  grid-template-rows: 80px 0.75fr;
  min-height: 200px;
  border-radius: 10px;
  background: rgba(23, 23, 23, 0.8);
  box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 15px;
  @media screen and (min-width: 992px) {
    grid-template-rows: 80px 1fr;
    width: 42rem;
    min-height: 400px;
    padding: 15px;
  }
`;

export const ConnexionCardTitleContainer = styled.div`
  display: flex;
  grid-gap: 18px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ConnexionBodyContent = styled.div`
  @media screen and (min-width: 992px) {
    width: 85%;
    margin: 10px auto;
  }
`;

export const formBodyContent = styled.div`
  width: 75%;
  margin: 10px auto;
`;

export const ConnecionCardHeaderWrapper = styled.div`
  display: flex;
  max-height: 40px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
`;

export const EmblemMini = styled.span`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    height: 45px;
    width: 45px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: ${({ img }) => (img ? `url(${img})` : ``)};
  }
`;

export const ConnecionCardHeaderTitle = styled.p`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-family: var(--font-title);
  @media screen and (min-width: 992px) {
    font-size: 1.4rem;
  }
`;

export const InputConnextionWrapper = styled.div`
  position: relative;
  & span:first-of-type {
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    color: ${colorDefault};
    & svg {
      width: 20px;
      height: 20px;
    }
  }
  & input {
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
    padding: 10px 10px 10px 45px;
    border-radius: 5px;
    width: 100%;
    transition: all 0.35s;
    &:focus {
      border: 1px solid #2b7de9;
      box-shadow: 0px 0px 10px 0px #2b7de950;
    }
    outline: #2b7de9;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 16px;
    @media screen and (min-width: 992px) {
      min-width: 280px;
    }
  }
`;

export const FormControl = styled.div`
  margin: 2rem auto 2rem auto;
`;

export const ErrorMessage = styled.div`
  color: ${errorColor};
  min-height: 45px;
  padding: 1rem 0;
  p {
    font-size: smaller;
  }
`;

export const DiscordButton = styled.button`
  display: flex;
  padding: 10px 15px;
  width: fit-content;
  height: fit-content;
  margin: 18px auto;
  background-color: #5865f2;
  border-radius: 5px;
  align-items: center;
  grid-gap: 1rem;
  transition: all 0.15s;
  text-transform: uppercase;
  //font-family: var(--font-title);
  letter-spacing: 1cap.5;
  &:hover {
    background-color: #4752c4;
  }
  &:active {
    background-color: #5865f2;
  }

  span {
    width: 25px;
    height: 25px;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media screen {
    font-size: 1.5rem;
  }
`;
