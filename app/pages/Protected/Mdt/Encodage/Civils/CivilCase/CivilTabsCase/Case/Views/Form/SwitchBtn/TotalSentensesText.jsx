import React from "react";
import { TotalSentenceContainer } from "../../../Case.styled";
import { calculateSentence } from "../../../../../../helpers";

const TotalSentensesText = ({ infraction }) => {
  const { sentence, nominal, quantity, attempt, complicity } = infraction;

  const result = calculateSentence(
    quantity,
    nominal,
    sentence,
    attempt,
    complicity
  );

  return <TotalSentenceContainer>{result}</TotalSentenceContainer>;
};

export default TotalSentensesText;
