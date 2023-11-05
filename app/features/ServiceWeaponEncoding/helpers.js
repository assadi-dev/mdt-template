import api from "../../services/api/instance";

export const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

export const postServiceWeaponEncoding = (body) => {
  return api.post(`/service_weapon_encodings`, body);
};
export const getServiceWeaponEncoding = (page, params) => {
  return api.get(`/service_weapon_encodings/pagination/${page}`, { params });
};
export const updateServiceWeaponEncoding = (id, data) => {
  return api.put(`/service_weapon_encodings/${id}`, data);
};
export const deleteServiceWeaponEncoding = (id) => {
  return api.delete(`/service_weapon_encodings/${id}`);
};
