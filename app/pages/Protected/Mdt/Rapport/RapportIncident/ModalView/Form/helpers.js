import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";
import Api from "../../../../../../../services/api/instance";

export const defaultFormValues = {
  agent: "",
  officerImplicated: "",
  incidentType: "",
  location: "",
  commentText: "",
};

export const inputOption = { required: true };

export const incidentReportResolver = yup.object().shape({
  officerImplicated: yup.string().required(requiredMessage),
  incidentType: yup.string().required(requiredMessage),
  location: yup.string().required(requiredMessage),
  commentText: yup.string().required(requiredMessage),
});

export const saveCreateRapportIncident = (body) => {
  return Api.post("/incident_reports", body);
};
export const saveUpdateRapportIncident = (id, body) => {
  return Api.put(`/incident_reports/${id}`, body);
};
export const saveDeleteRapportIncident = (id) => {
  return Api.delete(`/incident_reports/${id}`);
};
