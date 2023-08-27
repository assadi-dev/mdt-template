import api from "../../services/api/instance";

/**
 * Récuperation des Categorie des grades par pagination
 * @param {number} page numero de la page
 * @param {object} params contient les parametre à envoyer dans le header
 *
 * ```js
 * {item_per_page:5}
 * ```
 * @returns
 */
export const fetchGradeCategorieByPage = (page, params) => {
  return api.get(`/grade_categories/pagination/${page}`, {
    params: params,
  });
};
