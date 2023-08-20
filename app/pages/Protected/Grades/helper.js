import Api from "../../../services/api/instance";

/**Api Ajout de gradeCategories**/
export const postGradeCategories = (data) => {
  return Api.post(`/grade_categories`, data);
};
/**Api suppression du gradeCategory**/
export const deleteGradeCategories = (id) => {
  return Api.delete(`/grade_categories/${id}`);
};

/**Api modification du gradeCategory**/
export const editGradeCategories = (id, data) => {
  return Api.delete(`/grade_categories/${id}`, data);
};

/**Api Ajout de grade**/
export const postGrades = (data) => {
  return Api.post(`/grades`, data);
};
/**Api suppression du grade**/
export const deleteGrades = (id) => {
  return Api.delete(`/grades/${id}`);
};

/**Api modification du grade**/
export const editGrades = (id, data) => {
  return Api.delete(`/grades/${id}`, data);
};
