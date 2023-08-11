import Api from "../../../../../../services/api/instance";

export const fetchGradesCategoriesByFaction = (faction) => {
  return Api.get(`/grade_categories/permissions/${faction}`);
};
