import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  status: "idle",
  error: "",
  count: 0,
};

export const fetchinterventionReportCollection = (page, params) => {
  return Api.get(`/interventions_reports/pagination${page}`, { params });
};
