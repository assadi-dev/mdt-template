import * as yup from "yup";
import { requiredMessage } from "../../../../../../config/ValidationMessage";

export const codePenalFormValue = {
  label: "",
  categorie: "",
  amount: "",
  sentence: "",
};

export const codePenalResolver = yup.object().shape({
  label: yup.string().required(requiredMessage),
  categorie: yup.string().required(requiredMessage),
  amount: yup.string().required(requiredMessage),
  sentence: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]{2,}:\d{2}$/,
      ` Veuillez renseigner la durée de peine "HH:MM"`
    )
    .required(requiredMessage),
});
