import * as yup from "yup";

yup.setLocale({
  mixed: {
    notType: "Format invalid",
  },
});

export const registerShcema = yup.object().shape({
  agentIdentity: yup.string().required("Ce champs est obligatoire"),
  faction: yup.string().required("Ce champs est obligatoire"),
  phone: yup.string().required("Ce champs est obligatoire"),
  matricule: yup
    .number()
    .required("Ce champs est obligatoire")
    .positive("Le matricule doit étre un nombre positif"),
  gender: yup.string().required("Ce champs est obligatoire"),
});
