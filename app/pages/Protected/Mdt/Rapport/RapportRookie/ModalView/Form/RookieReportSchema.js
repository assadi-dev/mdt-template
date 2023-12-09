import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

export const rookieReportFormValues = {
  matriculeRookie: "",
  rookieName: "",
  rookie: "",
  patrolType: "",
  comment: "",
  acquisitions: {
    civilRelationship: "bad",
    roadControl: "bad",
    procedures: "bad",
    drive: "bad",
    deontology: "bad",
    respctingHierarchy: "bad",
    spotArea: "bad",
    callRadio: "bad",
  },
};

export const rookieReportResolver = yup.object().shape({
  rookie: yup.string().required(requiredMessage),
  patrolType: yup.string().required(requiredMessage),
  comment: yup.string().required(requiredMessage),
});
