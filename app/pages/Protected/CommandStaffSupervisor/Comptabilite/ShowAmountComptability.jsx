import formatThousands from "format-thousands";
import React from "react";

const ShowAmountComptability = ({ amount = 0 }) => {
  const AMOUNT_FORMATED = formatThousands(Number(amount).toFixed(0));
  return <>{AMOUNT_FORMATED}$</>;
};

export default ShowAmountComptability;
