/**
 * Verifie si l'utilisateur posedde le role Admin
 * @param {array} roles
 * @returns {boolean} true | false
 */
export const isAdmin = (roles) => {
  if (roles) {
    return roles.includes("ROLE_ADMIN");
  }
  if (!usercredential) return;
  return usercredential.roles.includes("ROLE_ADMIN");
};

//Obtention de la faction de l'utilisateur connecté
export const userFaction = () => {
  if (!usercredential) return;
  return usercredential.faction;
};

//Obtention du grade de l'utilisateur connecté
export const userGrade = () => {
  if (!usercredential) return;
  return usercredential.grade;
};
//Obtention de l'id grade de l'utilisateur connecté
export const userIdGrade = () => {
  if (!usercredential) return;
  return usercredential.idGrade;
};
