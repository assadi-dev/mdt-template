import React from "react";
import { ShowAmountContainer } from "../../Case.styled";
import formatThousands from "format-thousands";

const ShowTotalAmount = ({ amount = 0, up }) => {
  const FORMAT_AMOUNT = formatThousands(amount.toFixed(0));

  return (
    <ShowAmountContainer className="border-theme-color-primary">
      <div className="text-center">
        <p className="mb-1">Amende</p>
        {/*   <p className="text-azonix "> {amount.toFixed(2)}</p> */}
        <p className="text-azonix">{FORMAT_AMOUNT} $</p>
      </div>
      {up && (
        <div className="text-center">
          <p className="mb-1">UP</p>
          <p className="text-azonix "> {up}</p>
        </div>
      )}
    </ShowAmountContainer>
  );
};

export default ShowTotalAmount;
