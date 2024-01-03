import Api from "../../../../../services/api/instance";
import {
  hoursMinFormatBySec,
  sentenceToSec,
} from "../../../../../services/utils/dateFormat";

export const saveCivil = (body) => {
  return Api.post("/civils", body);
};

// Calcule
export const calculateSentence = (
  quantity = 1,
  nominal = 1,
  sentence = "00:00"
) => {
  const sec = sentenceToSec(sentence);

  const total = sec * quantity;
  return hoursMinFormatBySec(total);
};
