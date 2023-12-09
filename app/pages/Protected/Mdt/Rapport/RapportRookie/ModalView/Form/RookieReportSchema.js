import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

export const rookieReportFormValues = {
  agentFullname: "",
  rookieFullname: "",
  rookie: "",
  patrolType: "",
  comment: "",
  acquisitions: {
    civilRelationship: 0,
    roadControl: 0,
    procedures: 0,
    drive: 0,
    deontology: 0,
    respctingHierarchy: 0,
    spotArea: 0,
    callRadio: 0,
  },
};

export const rookieReportResolver = yup.object().shape({
  rookie: yup.string().required(requiredMessage),
  patrolType: yup.string().required(requiredMessage),
  comment: yup.string().required(requiredMessage),
});
