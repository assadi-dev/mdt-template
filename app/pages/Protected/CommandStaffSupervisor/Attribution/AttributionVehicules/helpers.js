import Api from "../../../../../services/api/instance";

export const save_vehicleAttribution = (data) => {
  return Api.post(`/vehicle_attributions`, data);
};
export const udpate_vehicleAttribution = (id, data) => {
  return Api.put(`/vehicle_attributions/${id}`, data);
};
export const delete_vehicleAttribution = (id) => {
  return Api.delete(`/vehicle_attributions/${id}`);
};
