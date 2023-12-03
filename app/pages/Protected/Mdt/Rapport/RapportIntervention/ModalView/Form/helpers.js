import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";
import Api from "../../../../../../../services/api/instance";

export const defaultFormValues = {
  agent: "",
  officiersImplicated: "",
  interventionType: "",
  location: "",
  commentText: "",
};

export const interventionReportResolver = yup.object().shape({
  officiersImplicated: yup.string().required(requiredMessage),
  interventionType: yup.string().required(requiredMessage),
  location: yup.string().required(requiredMessage),
  commentText: yup.string().required(requiredMessage),
});

export const saveCreateRapportIntervention = (body) => {
  return Api.post("/intervention_reports", body);
};
export const saveUpdateRapportIntervention = (id, body) => {
  return Api.put(`/intervention_reports/${id}`, body);
};
export const saveDeleteRapportIntervention = (id) => {
  return Api.delete(`/intervention_reports/${id}`);
};
