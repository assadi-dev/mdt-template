import uniqid from "uniqid";
import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

export const defaultSaisievalue = {
  id: uniqid(),
  fullname: "",
  seizure: "",
  affiliation: "",
};

export const defaultFormvalues = {
  numeroReport: "",
  lead: "",
  firstGroup: "",
  secondGroup: "",
  location: "",
  recit: "",
  seized: [],
  agent: "",
};

export const GunFightResolver = yup.object().shape({
  lead: yup.string().required(requiredMessage),
  firstGroup: yup.string().required(requiredMessage),
  secondGroup: yup.string().required(requiredMessage),
  location: yup.string().required(requiredMessage),
  recit: yup.string().required(requiredMessage),
});
