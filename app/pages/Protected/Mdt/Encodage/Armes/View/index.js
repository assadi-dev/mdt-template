import React from "react";
import listView from "./listsOfView";

const View = ({ view, data, onCloseModal }) => {
  if (!listView[view])
    throw new Error(`la vue ${view} est introuvable ou n'existe pas ! `);
  const Element = listView[view].element;
  return <Element className="modal-theme-color" onCloseModal={onCloseModal} />;
};

export default View;
