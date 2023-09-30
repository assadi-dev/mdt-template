import React from "react";
import { ButtonDocumentContainer } from "./CivilCase.style";

const ButtonDocument = ({ label, children, ...props }) => {
  return (
    <>
      {" "}
      <ButtonDocumentContainer {...props} label={label}>
        {children}
      </ButtonDocumentContainer>{" "}
    </>
  );
};

export default ButtonDocument;
