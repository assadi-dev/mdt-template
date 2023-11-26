import Api from "../../../../../services/api/instance";

export const saveVehicleEncoding = (body) => {
  return Api.post(`/vehicle_encodings`, body);
};
