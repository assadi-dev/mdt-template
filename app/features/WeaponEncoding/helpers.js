import Api from "../../services/api/instance";

export const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

export const fetchWeaponCivilCollection = (page, params) => {
  return Api.get(`/weapon_encoding/pagination/${page}`, { params });
};
