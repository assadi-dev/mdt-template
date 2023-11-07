import api from "../../services/api/instance";

/**
 * Récuperation des grades par pagination
 * @param {number} page numera de la page
 * @param {object} params contient les parametre à envoyer dans le header
 * ```js
 * {
 * item_per_page:5
 * }
 *
 * ```
 * @returns
 */

export const fetchTrombinoscopAgent = (page, params) => {
  return api.get(`/trombinoscop/pagination/${page}`, { params });
};
