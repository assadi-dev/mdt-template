import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  status: "pending",
  error: "",
  count: 0,
};

export const fetchRookieReportsCollections = (page, params) => {
  return Api.get(`/rookie_reports/pagination/${page}`, { params });
};

export const delete_rookieReports_collections = (id) => {
  return Api.delete(`rookie_reports/${id}`);
};
