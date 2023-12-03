import * as yup from "yup";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

export const plaintDefaultValues = {
  agent: "api/agents/:id",
  depository: "",
  accused: "",
  depositionText: "",
};

export const plaintsResolver = yup.object().shape({
  depository: yup.string().required(requiredMessage),
  accused: yup.string().required(requiredMessage),
  depositionText: yup.string().required(requiredMessage),
});
