import React from "react";
import { ButtonContainer } from "./button.styled";
import SpinnerButton from "../Shared/Loading/SpinnerButton";

const ButtonWithLoader = ({
  labelButton,
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <ButtonContainer {...props}>
      {labelButton} {children}{" "}
      {isLoading && <SpinnerButton className="loading-process" />}
    </ButtonContainer>
  );
};

export default ButtonWithLoader;
