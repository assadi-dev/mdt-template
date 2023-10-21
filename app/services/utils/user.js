import { user_female, user_male } from "../../config/constantes";
import { firsLetterCapitalise } from "./textUtils";

/**
 * Verifie si l'utilisateur posedde le role Admin
 * @param {array} roles
 * @returns {boolean} true | false
 */
export const isAdmin = (roles) => {
  if (roles) {
    return roles.includes("ROLE_ADMIN");
  }
  if (!usercredential) return;
  return usercredential.roles.includes("ROLE_ADMIN");
};

//Obtention de la faction de l'utilisateur connecté
export const userFaction = () => {
  if (!usercredential) return;
  return usercredential.faction;
};

//Obtention du grade de l'utilisateur connecté
export const userGrade = () => {
  if (!usercredential) return;
  return usercredential.grade;
};
//Obtention de l'id grade de l'utilisateur connecté
export const userIdGrade = () => {
  if (!usercredential) return;
  return usercredential.idGrade;
};

/**
 * Affiche la photo en fonction du genre
 * @param {String} gender  male | female
 */
export const noPhoto = (gender) => {
  return gender == "male" ? user_male : user_female;
};

export const cleanNameAgent = (firstname, lastname) => {
  firstname = firstname ? firstname : "";
  lastname = lastname ? lastname : "";

  let fullname = `${firsLetterCapitalise(firstname)} ${firsLetterCapitalise(
    lastname
  )}`;
  return fullname;
};

export const cleanNameUser = (firstname, lastname) => {
  firstname = firstname ? firstname : "";
  lastname = lastname ? lastname : "";

  let fullname = `${firsLetterCapitalise(firstname)} ${firsLetterCapitalise(
    lastname
  )}`;
  return fullname;
};

/**
 * Retourne le nom complet de l'agent avec matricule N/A si undefined
 * @param {string} matricule
 * @param {string} firsttname
 * @param {string} lastname
 * @returns
 */
export const cleanAgentMatricule = (matricule, firsttname, lastname) => {
  if (matricule) return `${matricule}-${cleanNameUser(firsttname, lastname)}`;
  return `N/A-${cleanNameUser(firsttname, lastname)}`;
};

/**
 * Retourne le nom complet de l'agent avec matricule null si undefined
 * @param {string} matricule
 * @param {string} firsttname
 * @param {string} lastname
 * @returns
 */
export const cleanAgentNoMatricule = (matricule, firsttname, lastname) => {
  if (matricule) return `${matricule}-${cleanNameUser(firsttname, lastname)}`;
  return `${cleanNameUser(firsttname, lastname)}`;
};
