export const access = [
  {
    page: "Accueil",
    path: "/",
    isCanAdd: true,
    isCanUpdate: false,
    isCanDelete: false,
  },
  {
    page: "MDT",
    childrens: "Encodage",
    path: "/mdt/encodage/civils",
    isCanAdd: false,
    isCanUpdate: false,
    isCanDelete: false,
  },
  {
    page: "MDT",
    childrens: "Encodages",
    path: "/mdt/encodage/armes",
    isCanAdd: true,
    isCanUpdate: false,
    isCanDelete: false,
  },
  {
    page: "MDT",
    childrens: "Panic Bouton",
    path: "/mdt/panic-bouton",
    isCanAdd: true,

    isCanUpdate: false,
    isCanDelete: false,
  },
  {
    page: "MDT",
    childrens: "Encodage",
    path: "/mdt/encodage/vehicules",
    isCanAdd: true,
    isCanUpdate: false,
    isCanDelete: false,
  },
  {
    page: "Services",
    childrens: "Feuilles d'heures",
    path: "/services/feuille-d-heures",
    isCanAdd: true,
    isCanUpdate: false,
    isCanDelete: false,
  },
  {
    page: "Administrations",
    childrens: "Acces/Permissions",
    path: "/administrations/acces-permissions",
    isCanAdd: true,
    isCanUpdate: false,
    isCanDelete: false,
  },
];

/**
 * Mapping des routes avec les permission
 * @param {*} route
 * @returns
 */
export const checkRoutes = (route) => {
  if (route.childrens) {
    let test = route.childrens.map((rc) => checkRoutes(rc));
    return { name: route.name, childrens: test };
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
