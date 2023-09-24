import React from "react";

/**
 * Composant permet de retourner la vue située dans la corps de la modal
 * @param {string} view Nom de la vue que l'on souhaite affiché
 * @param {object} payload Objet contenant les type de paramettre qu'on souhaite transmettre à la vue
 * @param {object} enumOfView Objet contenant les vue à affiché en fonction du props view passé en argument tableau attendu
 *
 * ```js
 *  {"nom-de-la-vue":{element:"ComposantDelaVue"}}
 *
 * ```
 * @returns
 */
const RenderModalFormContent = ({
  view,
  payload,
  onCloseModal,
  enumOfView,
}) => {
  if (!enumOfView[view])
    throw new Error(`la vue ${view} est introuvable ou n'existe pas ! `);
  const Element = enumOfView[view].element;
  return <Element className="modal-theme-color" onCloseModal={onCloseModal} />;
};

export default RenderModalFormContent;
