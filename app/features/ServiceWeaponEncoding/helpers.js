import api from "../../services/api/instance";

export const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

export const getServiceWeaponEncoding = (page, params) => {
  return api.get(`/service_weapon_encodings/pagination/${page}`, { params });
};
