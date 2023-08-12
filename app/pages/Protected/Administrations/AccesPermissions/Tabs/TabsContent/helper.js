import Api from "../../../../../../services/api/instance";

export const fetchGradesCategoriesByFaction = (faction, signal) => {
  return Api.get(`/grade_categories/permissions/${faction}`, { signal });
};
