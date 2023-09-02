import Api from "../services/api/instance";

export const fetchGradesByFaction = (faction, signal) => {
  return Api.get(`/grades/list/${faction}`, { signal });
};
