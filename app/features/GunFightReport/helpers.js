import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  status: "pending",
  error: "",
  count: 0,
};

export const fetchGunFightReportCollections = (page, params) => {
  return Api.get(`/gunfight_reports/pagination/${page}`, { params });
};
