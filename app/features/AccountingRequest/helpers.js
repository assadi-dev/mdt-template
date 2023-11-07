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
export const fetchAccountingRequestByPage = (page, params) => {
  return api.get(`/accounting_requests/pagination/${page}`, {
    params: params,
  });
};

/**
 * Récuperation des demendes de comptabilité par pagination pour chaque agent
 * @param {number} idAgent  id de l'agent
 * @param {number} page numéra de la page
 * @param {object} params contient les parametre à envoyer dans le header
 * ```js
 * {
 * item_per_page:5
 * }
 *
 * ```
 * @returns
 */
export const fetchAccountingRequestByPageForAgent = (idAgent, page, params) => {
  return api.get(`/accounting_requests/pagination/${page}/${idAgent}`, {
    params: params,
  });
};
