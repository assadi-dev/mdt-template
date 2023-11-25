import * as yup from "yup";
import {
  positivNumberMessage,
  requiredMessage,
} from "../../config/ValidationMessage";

yup.setLocale({
  mixed: {
    notType: "Format invalid",
  },
});

export const registerShcema = yup.object().shape({
  agentIdentity: yup.string().required(requiredMessage),
  faction: yup.string().required(requiredMessage),
  phone: yup.string().required(requiredMessage),
  matricule: yup
    .number()
    .required(requiredMessage)
    .positive(`Le matricule ${positivNumberMessage}`),
  gender: yup.string().required(requiredMessage),
});
