import React, { Children } from "react";
import { UploadFormZoneContainer } from "./FormView.styled";

const UploadZone = ({ children, ...props }) => {
  return (
    <UploadFormZoneContainer {...props}>{Children}</UploadFormZoneContainer>
  );
};

export default UploadZone;
