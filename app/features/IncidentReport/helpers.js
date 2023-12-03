import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  status: "idle",
  error: "",
  count: 0,
};

export const fetchIncidentReportCollection = (page, params) => {
  return Api.get(`/incident_reports/pagination/${page}`, { params });
};
