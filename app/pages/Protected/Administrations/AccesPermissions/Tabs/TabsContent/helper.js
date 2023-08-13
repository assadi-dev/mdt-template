import { sidebarRoutes } from "../../../../../../routes/sidebarRoutes";
import Api from "../../../../../../services/api/instance";

export const fetchGradesCategoriesByFaction = (faction, signal) => {
  return Api.get(`/grade_categories/permissions/${faction}`, { signal });
};

export const rtrievesRoutesByPgeName = (name) => {
  sidebarRoutes;
};

export const retrievesAllName = () => {
  return [...sidebarRoutes].map((sr) => sr.name).filter((p) => p != "Accueil");
};
