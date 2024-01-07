import formatThousands from "format-thousands";
import React from "react";

const ShowAmount = ({ amount = 0 }) => {
  const AMOUNT_FORMATED = formatThousands(Number(amount).toFixed(0));
  return <span>{AMOUNT_FORMATED}$</span>;
};

export default ShowAmount;
