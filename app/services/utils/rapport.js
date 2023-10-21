/**
 * Affichage du numero de dossier ou numero de rapport à partir de l'id document
 * @param {*} idDocument
 * @returns {string} EX: n° 0014
 */
export const retriveDocumentNum = (idDocument) => {
  if (!idDocument) return "";
  return `n° ${idDocument}`;
};
