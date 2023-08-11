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

export const userFaction = () => {
  if (!usercredential) return;
  return usercredential.faction;
};
