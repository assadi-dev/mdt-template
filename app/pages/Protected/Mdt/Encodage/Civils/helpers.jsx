import Api from "../../../../../services/api/instance";
import {
  hoursMinFormatBySec,
  sentenceToSec,
} from "../../../../../services/utils/dateFormat";

export const saveCivil = (body) => {
  return Api.post("/civils", body);
};

// Calcule
//Atempt = 0.25
//Complicity = 0.6

/**
 * Calcule de la peine
 * @param {number} quantity
 * @param {number} nominal
 * @param {string} sentence
 * @param {number} attempt
 * @param {number} complicity
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

/**
 * Calcule du montant de l'infraction
 * @param {number} amount
 * @param {number} quantity
 * @param {number} nominal
 * @param {number} attempt
 * @param {number} complicity
 * @returns
 */
export const calculateAmount = (
  amount = 0,
  quantity = 1,
  nominal = 1,
  attempt = 1,
  complicity = 1
) => {
  const total = amount * nominal * quantity * attempt * complicity;
  return total;
};

/**
 * mise à jour de la listes des infractions
 * @param {*} infraction
 * @param {*} infractionsCollections
 * @returns
 */
export const updateInfraction = (infraction, infractionsCollections = []) => {
  const updatedCollection = [...infractionsCollections].map((item) => {
    if (item.id == infraction.id) {
      return { ...item, ...infraction };
    }
    return item;
  });

  return updatedCollection;
};

/**
 * Total des montants des infraction
 * @param {*} infractions
 */
export const sumOfAmount = (infractions) => {
  const listofAmount = [...infractions].map((infraction) => {
    const { amount, quantity, nominal, attempt, complicity } = infraction;
    return calculateAmount(
      Number(amount),
      quantity,
      nominal,
      attempt,
      complicity
    );
  });
  return listofAmount.length > 0
    ? Number([...listofAmount].reduce((a, b) => a + b))
    : 0;
};

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
