import React from "react";
import { TfiClose } from "react-icons/tfi";
import { CloseBtnContainer } from "./Modal.styled";

const CloseModalBtn = ({ ...props }) => {
  return (
    <CloseBtnContainer {...props}>
      <TfiClose />
    </CloseBtnContainer>
  );
};

export default CloseModalBtn;
