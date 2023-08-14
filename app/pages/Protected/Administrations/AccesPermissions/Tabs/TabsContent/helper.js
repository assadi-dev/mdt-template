import { sidebarRoutes } from "../../../../../../routes/sidebarRoutes";
import Api from "../../../../../../services/api/instance";

export const fetchGradesCategoriesByFaction = (faction, signal) => {
  return Api.get(`/grade_categories/permissions/${faction}`, { signal });
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
            name: element.name,
            path: element.path,
            isCanAdd: false,
            isCanUpdate: false,
            isCanDelete: false,
          };
          final.push(res);
        }
      });
    } else {
      let res = {
        name: route.name,
        path: route.path,
        isCanAdd: false,
        isCanUpdate: false,
        isCanDelete: false,
      };
      final.push(res);
    }
  });
  return final;
};
