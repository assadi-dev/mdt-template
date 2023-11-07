import api from "../../services/api/instance";

export const fetchAllAcquisitions = (page, params) => {
  return api.get(`/acquisitions/pagination/${page}`, { params });
};
