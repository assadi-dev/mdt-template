import { sidebarRoutes } from "../../../../../../routes/sidebarRoutes";
import Api from "../../../../../../services/api/instance";

export const fetchGradesCategoriesByFaction = (faction, signal) => {
  return Api.get(`/grade_categories/permissions/${faction}`, { signal });
};

export const retrievesRoutesByPgeName = (name) => {
  let route = [...sidebarRoutes].find((res) => res.name == name);

  let pathList = [];

  if (route.childrens) {
    route.childrens.forEach((r) => {
      let res = extractPath(r);
      pathList.push(res);
    });
  }
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
  if (routes.childrens) {
    routes.childrens.forEach((element) => {
      let res = extractPath(element);
      final = res;
    });
  } else {
    if (routes.path) {
      let res = {
        name: routes.name,
        path: routes.path,
        isCanAdd: false,
        isCanUpdate: false,
        isCanDelete: false,
      };
      final = res;
    }
  }
  return final;
};
