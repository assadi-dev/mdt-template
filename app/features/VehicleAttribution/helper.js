import Api from "../../services/api/instance";
export const initialState = {
  collections: [],
  status: "pending",
  error: "",
  count: 0,
};

export const fetchVehicleAttributionCollection = (page, params) => {
  return Api.get(`/vehicle_attributions/pagination/${page}`, { params });
};
