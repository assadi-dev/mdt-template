import api from "../../../../../services/api/instance";

export const update_effectif = (id, data) => {
  return api.put(`/agents/${id}`, data);
};

export const extractIdgrade = (gradesApi) => {
  let numbers = gradesApi.match(/\d+/g);
  return Number(numbers[0]);
};

export const objectCredential = (values) => {
  return {
    firstname: values.firstname.trim(),
    lastname: values.lastname.trim(),
    grade: values.grade,
    idGrade: values.gradeId,
    matricule: values.matricule.trim(),
  };
};
