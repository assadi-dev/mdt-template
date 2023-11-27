import Api from "../../services/api/instance";

export const fetchAllcivils = (page, params) => {
  return Api.get(`/civils/pagination/${page}`, { params });
};
export const fetchSingleCivil = (id) => {
  return Api.get(`/civils/${id}`);
};
