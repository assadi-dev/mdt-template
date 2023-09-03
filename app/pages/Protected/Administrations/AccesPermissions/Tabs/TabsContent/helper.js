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

  routes.childrens
    ? routes.childrens.forEach((route) => {
        if (route.childrens) {
          let res = extractNestedPath(route.childrens, "path");
          if (res.length > 0) {
            res.forEach((child) => {
              let res = {
                id: uniqid(),
                name: child.name,
                path: child.path,
                isCanAdd: false,
                isCanUpdate: false,
                isCanDelete: false,
                isShow: false,
              };
              final.push(res);
            });
          }
        }
        if (route.path) {
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
      })
    : final.push({
        id: uniqid(),
        name: routes.name,
        path: routes.path,
        isCanAdd: false,
        isCanUpdate: false,
        isCanDelete: false,
        isShow: false,
      });

  return final;
};

/**
 * Extraction des objets cintenant des routes imbriqués
 * @param {*} objet
 * @param {*} propriete
 * @returns
 */
function extractNestedPath(objet, propriete) {
  if (typeof objet !== "object") {
    return [];
  }

  const valeurs = [];

  for (const key in objet) {
    if (objet.hasOwnProperty(key)) {
      if (typeof objet[key] === "object") {
        valeurs.push(...extractNestedPath(objet[key], propriete));
      } else if (key === propriete) {
        valeurs.push({ name: objet["name"], path: objet["path"] });
      }
    }
  }

  console.log(valeurs);
  return valeurs;
}
