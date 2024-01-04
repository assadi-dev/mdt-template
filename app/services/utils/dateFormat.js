import {
  format,
  formatDuration,
  hoursToSeconds,
  minutesToSeconds,
  secondsToHours,
  secondsToMinutes,
} from "date-fns";
import { fr } from "date-fns/locale";
const timeZone = "Europe/Paris";
import sf from "seconds-formater";

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

/**
 * Conversion de la peine en seconde
 * @param {string} sentence chaine de caractere en format HH:MM
 */
export const sentenceToSec = (sentence) => {
  const reg = /^([0-9]{1,}|d{1,}):([0-9]{1,}|d{1,})$/;
  if (reg.test(sentence)) {
    const hours = Number(sentence.split(":")[0]);
    const minutes = Number(sentence.split(":")[1]);

    return hoursToSeconds(hours) + minutesToSeconds(minutes);
  } else {
    throw new Error("Format de la peine incorrect");
  }
};

/**
 * Conversion des secondes en format HH:MM ou DD:HH:MM
 * @param {number} secondes
 */
export const hoursMinFormatBySec = (seconds) => {
  const hours = secondsToHours(seconds);
  if (hours > 23) return sf.convert(seconds).format(`Dj Hh MMm`);
  return sf.convert(seconds).format("HH:MM");
};

/**
 * Conversion des secondes en format HH:MM ou DD:HH:MM
 * @param {number} secondes
 */
export const totalHoursMinFormatBySec = (seconds) => {
  const hours = secondsToHours(seconds);
  if (hours > 23)
    return sf.convert(seconds).format(`D jour${hours > 48 ? "s" : ""} H h MM`);
  return sf.convert(seconds).format("HH:MM");
};
