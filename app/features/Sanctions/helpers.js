import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  error: "",
  status: "pending",
  count: 0,
};

export const fetchSanctionCollections = (page, params) => {
  return Api.get(`/sanctions/pagination/${page}`, { params });
};
