import { sidebarRoutes } from "../../../../../../routes/sidebarRoutes";
import Api from "../../../../../../services/api/instance";
import uniqid from "uniqid";

/**
 * Récuperation grade lié aux factions passé en parametre
 * @param {*} faction
 * @param {*} signal
 * @returns
 */
export const fetchGradesCategoriesByFaction = (faction, signal) => {
  return Api.get(`/grade_categories/permissions/${faction}`, { signal });
};

/**
 *
 * Récuperation de la listes des routes associé aux grades à partir de l'id du grade
 * @param {*} idGrade
 * @param {*} signal
 * @returns contient le nom ,liens et permissions
 */
export const fetchAccessRouteLists = (idGrade, signal) => {
  return Api.get(`/grades/access/${idGrade}`, { signal });
};

/**
 * Envoies les page et les permission vers la base de données
 * @param {Array} access liste des object conteneant les permissions
 * @returns
 */
export const updatePermission = (data) => {
  const { idGrade, body } = data;
  return Api.patch(`/grades/access/${idGrade}`, body);
};

export const retrievesRoutesByPgeName = (name) => {
  let route = [...sidebarRoutes].find((res) => res.name == name);

  let pathList = [];
  pathList = extractPath(route);

  return pathList;
};

export const retrievesAllName = () => {
  return [...sidebarRoutes]
    .map((sr) => sr.name)
    .filter((p) => p != "Accueil" && p != "Administrations");
};

/**
 * Extraction des liens des pages
 * @param {*} routes
 */
const extractPath = (routes) => {
  let final = [];

  routes.childrens.forEach((route) => {
    if (route.childrens) {
      route.childrens.forEach((element) => {
        if (element.childrens) {
          extractPath(element);
        } else {
          let res = {
            id: uniqid(),
            name: element.name,
            path: element.path,
            isCanAdd: false,
            isCanUpdate: false,
            isCanDelete: false,
            isShow: false,
          };
          final.push(res);
        }
      });
    } else {
      let res = {
        id: uniqid(),
        name: route.name,
        path: route.path,
        isCanAdd: false,
        isCanUpdate: false,
        isCanDelete: false,
        isShow: false,
      };
      final.push(res);
    }
  });
  return final;
};
