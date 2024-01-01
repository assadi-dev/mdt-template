import React from "react";
import { ShowAmountContainer } from "../../Case.styled";

const ShowTotalAmount = ({ amount = 0 }) => {
  return (
    <ShowAmountContainer className="border-theme-color-primary">
      <p className="mb-1">Amende</p>
      <p className="text-azonix "> {amount.toFixed(2)}</p>
    </ShowAmountContainer>
  );
};

export default ShowTotalAmount;
