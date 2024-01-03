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

export const updateInfraction = (infraction, infractionsCollections = []) => {
  const updatedCollection = [...infractionsCollections].map((item) => {
    if (item.id == infraction.id) {
      return { ...item, ...infraction };
    }
    return item;
  });

  return updatedCollection;
};

//Atempt = 0.25
//Complicity = 0.6

/**
 * Permert d'optenir la vleur en UP
 * @param {number} amounts montant total des amendes
 * @param {string} sentences temps totals des peines
 * @returns
 */
export const conversionUP = (amounts, sentences) => {
  const nominal = 1;

  //conversion sentence en secondes
  sentences;

  const toSecondes = ((amounts * 30) / 5000) * 60;

  const result = toSecondes * nominal + sentences;
  console.log(result);

  // return unixToTime(result);
};
