import React from "react";
import { ErrorSection } from "./FormView.styled";

const ErrorInputSection = ({ errors }) => {
  return (
    <ErrorSection>
      {errors && <small className="text-error">{errors.message}</small>}
    </ErrorSection>
  );
};

export default ErrorInputSection;
