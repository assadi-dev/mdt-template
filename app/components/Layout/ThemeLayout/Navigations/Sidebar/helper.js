/**
 * Mapping des routes avec les permission
 * @param {*} route
 * @returns
 */
export const checkRoutes = (route, access) => {
  if (!access) return [];

  if (route.childrens) {
    let routesConfig = route.childrens.map((rc) => checkRoutes(rc, access));
    return { name: route.name, childrens: routesConfig };
  } else {
    if (route.path) {
      let fa = access.find((ra) => ra.path == route.path);
      if (!fa) return [];
      const { isCanAdd, isCanDelete, isCanUpdate } = fa;
      return { ...route, isCanAdd, isCanDelete, isCanUpdate };
    }
  }
};

/**
 * Suppression des routes avec enfant vides
 * @param {*} route
 * @returns
 */
export const filtrerEmptyObjets = (route) => {
  return route.filter((objet) => {
    if (Object.keys(objet).length == 0) {
      return false;
    }
    if (objet.childrens && Array.isArray(objet.childrens)) {
      objet.childrens = filtrerEmptyObjets(objet.childrens);
      return objet.childrens.length > 0;
    }
    return true;
  });
};

/**
 * Verifie si l'utilisateur posedde le role Admin
 * @param {array} roles
 * @returns {boolean} true | false
 */
export const isAdmin = (roles) => {
  if (roles) {
    return roles.includes("ROLE_ADMIN");
  }
  return usercredential.roles.includes("ROLE_ADMIN");
};
