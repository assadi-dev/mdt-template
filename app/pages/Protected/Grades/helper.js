import Api from "../../../services/api/instance";

/**Api recuperation du gradeCategories par id **/
export const fetchOneGradeCategory = (id, signal) => {
  return Api.get(`/grade_categories/${id}`);
};

/**Api Ajout de gradeCategories**/
export const postGradeCategories = (data) => {
  return Api.post(`/grade_categories`, data);
};
/**Api suppression du gradeCategory**/
export const deleteGradeCategories = (id) => {
  return Api.delete(`/grade_categories/${id}`);
};

/**Api modification du gradeCategory**/
export const putGradeCategories = (id, data) => {
  return Api.put(`/grade_categories/${id}`, data);
};

/**Api recuperation du grade par id **/
export const fetchOnegGades = (id, signal) => {
  return Api.get(`/grades/${id}`);
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
export const putGrades = (id, data) => {
  return Api.put(`/grades/${id}`, data);
};
