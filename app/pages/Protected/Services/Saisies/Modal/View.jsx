import React from "react";
import Add from "./Form/Add";
import Edit from "./Form/Edit";

const View = ({ view, data, onCloseModal }) => {
  switch (view) {
    case "add-saisie":
      return (
        <Add
          className="modal-theme-color"
          payload={data}
          onCloseModal={onCloseModal}
        />
      );
    case "edit-saisie":
      return (
        <Edit
          className="modal-theme-color"
          payload={data}
          onCloseModal={onCloseModal}
        />
      );
      break;
    case "delete-saisie":
      break;

    default:
      throw new Error(`Unhandled action view: ${type}`);
  }
};

export default View;
