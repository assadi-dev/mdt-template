import styled from "styled-components";

const colorDefault = "rgba(255, 255, 255, 0.3)";
const errorColor = "var(--red)";

export const FormControl = styled.div`
  margin: 1rem auto 1rem auto;
`;

export const ErrorMessage = styled.div`
  color: ${errorColor};
  min-height: 35px;
  padding: 1rem 0;
  p {
    font-size: smaller;
  }
`;

export const SelectInputWrapper = styled.div`
  position: relative;

  & span {
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
  & select {
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
    padding: 10px 25px 10px 45px;
    border-radius: 5px;
    transition: all 0.35s;
    &:focus {
      border: 1px solid #2b7de9;
      box-shadow: 0px 0px 13px 0px #2b7de950;
    }
    outline: #2b7de9;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 16px;
    @media screen and (min-width: 992px) {
      min-width: 180px;
    }
    option {
      color: #444;
    }
  }
`;

export const SubmittButton = styled.button`
  display: flex;
  padding: 10px 15px;
  width: fit-content;
  height: fit-content;
  margin: 18px auto;
  background-color: var(--color-blue-primary);
  border-radius: 5px;
  align-items: center;
  grid-gap: 1rem;
  transition: all 0.15s;
  text-transform: uppercase;
  //font-family: var(--font-title);
  letter-spacing: 1cap.5;
  &:hover {
    background-color: var(--color-blue-primary);
  }
  &:active {
    background-color: var(--color-blue-primary);
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
    font-size: 1.2rem;
  }
`;

export const FormInfoContainer = styled.div`
  margin: 1.4rem 0;
  display: flex;
  grid-gap: 1rem;
  align-items: center;
  max-height: 30px;
  line-height: 18px;
  letter-spacing: 1.05px;
  color: rgba(255, 255, 255, 0.5);
  small {
    font-size: 1.2rem;
  }
  span {
    width: 25px;
    height: 25px;
    svg: {
      width: 25px;
      height: 25px;
    }
  }
`;
