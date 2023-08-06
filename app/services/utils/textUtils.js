/**
 *
 * @param {number} count le nombre
 * @param {string} singular mot a afficher au singulier
 * @param {string} plural mot à afficher au pluriel
 * @returns {string} retoune le pluriel ou le singulier du mot en fonction du nombres definit en parametres
 */
export const getPlurialWord = (count, singular, plural) => {
  return count > 1 ? plural : singular;
};

/**
 *
 * @param {*} string
 *
 */
export const firsLetterCapitalise = (string) => {
  let newString = null;

  for (let letter in string) {
    if (letter == 0) {
      newString = string[letter].toLocaleUpperCase();
    } else {
      newString += string[letter];
    }
  }

  return newString;
};

/**
 * Text à afficher en cas de valeurs null
 * @param {*} value
 * @param {string} text
 */
export const textForNullValue = (value, text) => {
  if (!value || value == null || value == undefined) return text;
};
