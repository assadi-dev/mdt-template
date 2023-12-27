import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

export const formSanctionDefaultValue = {
  agent: "",
  decisionMaker: "",
  agentConcerned: "",
  agentConcernedLabel: "",
  typeSanction: "",
  comment: "",
};

export const formSanctionSchema = yup.object().shape({
  decisionMaker: yup.string().required(requiredMessage),
  agentConcerned: yup.string().required(requiredMessage),
  agentConcernedLabel: yup.string(),
  typeSanction: yup.string().required(requiredMessage),
  comment: yup.string(),
});
