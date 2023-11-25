import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

export const fetchVehicleCivilCollection = (page, params) => {
  return Api.get(`/${page}`, { params });
};
