import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  status: "pending",
  error: "",
  count: 0,
};

export const fetchCodePenalCollections = (page, params) => {
  return Api.get(`/code_penals/pagination/${page}`, { params });
};
