import Api from "../../../services/api/instance";

export const initialState = {
  collections: [],
  status: "pending",
  error: "",
  count: 0,
};

export const fetchAvertissementCollections = (page, params) => {
  return Api.get(`/avertissements/paginations/${page}`, params);
};
export const fetcTrafficsCollections = (page, params) => {
  return Api.get(`/avertissements/paginations/${page}`, params);
};
export const fetcArrestReportCollections = (page, params) => {
  return Api.get(`/arrest_reports/paginations/${page}`, params);
};
export const fetcArrestFolderCollections = (page, params) => {
  return Api.get(`/arrest_folder/paginations/${page}`, params);
};
