import Api from "../../../../../services/api/instance";
import {
  hoursMinFormatBySec,
  sentenceToSec,
} from "../../../../../services/utils/dateFormat";

export const saveCivil = (body) => {
  return Api.post("/civils", body);
};

// Calcule

/**
 * Calcule de la peine
 * @param {number} quantity
 * @param {number} nominal
 * @param {string} sentence
 * @returns
 */
export const calculateSentence = (
  quantity = 1,
  nominal = 1,
  sentence = "00:00",
  attempt = 1,
  complicity = 1
) => {
  const sec = sentenceToSec(sentence);
  const total = sec * nominal * quantity * attempt * complicity;
  return hoursMinFormatBySec(total);
};

export const updateInfraction = (
  infraction,
  getValues = () => {},
  setValue = () => {}
) => {
  const updatedCollection = [...getValues("infractions")].map((item) => {
    if (item.id == infraction.id) {
      return { ...item, ...infraction };
    }
    return item;
  });

  setValue("infractions", updatedCollection);
};
