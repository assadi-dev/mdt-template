import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  status: "idle",
  error: null,
  count: 0,
};

export const fetchPlaintsCollections = (page, params) => {
  return Api.get(`/plaints/pagination/${page}`);
};
