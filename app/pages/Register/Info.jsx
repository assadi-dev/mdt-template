import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FormInfoContainer } from "./Register.styled";

const Info = ({ message }) => {
  return (
    <FormInfoContainer>
      {/*       <span>
        <AiOutlineInfoCircle />
      </span> */}
      <small>{message}</small>
    </FormInfoContainer>
  );
};

export default Info;
