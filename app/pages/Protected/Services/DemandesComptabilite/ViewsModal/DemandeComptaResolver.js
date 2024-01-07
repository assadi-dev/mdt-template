import * as yup from "yup";
import { requiredMessage } from "../../../../../config/ValidationMessage";

export const FormValueResolver = yup.object().shape({
  subject: yup.string().required(requiredMessage),
  date: yup.string(),
  reason: yup.string().required(requiredMessage),
  amount: yup
    .string()
    .matches(
      /^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/,
      "Le montant doit être un nombre"
    ),
});
