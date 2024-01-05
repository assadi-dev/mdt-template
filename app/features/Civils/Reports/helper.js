import Api from "../../../services/api/instance";

export const initialState = {
  collections: [],
  status: "",
  error: "",
  count: 0,
};

export const fetcAvertissementCollections = (page, params) => {
  return Api.get(`/avertissements/paginations/${page}`, params);
};
