import { format } from "date-fns";
import { fr } from "date-fns/locale";
const timeZone = "Europe/Paris";

/**
 * Retourne la date au format suivant YYYY-MM-DD
 * @param {*} date
 */
export const dateFormatISO8601 = (date = "") => {
  return format(new Date(date), "yyyy-MM-dd");
};

/**
 * Retourne la date et l'heure au format suivant YYYY-MM-DD HH:MM:SS
 * @param {*} date
 */
export const datetimeFormatISO8601 = (date = "") => {
  return format(new Date(date), "yyyy-MM-dd HH:mm:ss");
};

/**
 * Retourne la date et l'heure au format suivant DD-MM-YYYY HH:MM:SS
 * @param {*} date
 */
export const datetimeFormatFr = (date = "") => {
  return format(new Date(date), "dd-MM-yyyy à HH:mm");
};

/**
 * Retourne la date et l'heure au format suivant DD-MM-YYYY HH:MM:SS
 * @param {*} date
 */
export const datetimeFormatWithSec = (date = "") => {
  return format(new Date(date), "dd-MM-yyyy  HH:mm:ss");
};

/**
 * Retourne la date au format suivant DD-MM-YYYY
 * @param {*} date
 * @returns
 */
export const formatDatefrWithoutHour = (date) => {
  if (!date) return "";
  return format(new Date(date), "dd-MM-yyyy");
};

/**
 * Retourne la date au format suivant 29 juillet 2023
 * @param {*} date
 * @returns
 */
export const formatDateFullMonth = (date) => {
  if (!date) return "";
  return format(new Date(date), "dd MMMM yyyy", { locale: fr });
};
