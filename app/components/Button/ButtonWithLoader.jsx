import React from "react";
import { ButtonContainer } from "./button.styled";
import SpinnerButton from "../Shared/Loading/SpinnerButton";

const ButtonWithLoader = ({
  labelButton,
  isLoading = false,
  children,
  ...props
}) => {
  const DISABLE_BTN = isLoading == true ? "true" : null;

  return (
    <ButtonContainer {...props} disabled={DISABLE_BTN}>
      {labelButton} {children}{" "}
      {isLoading && <SpinnerButton className="loading-process" />}
    </ButtonContainer>
  );
};

export default ButtonWithLoader;
