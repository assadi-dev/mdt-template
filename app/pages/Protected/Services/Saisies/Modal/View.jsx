import React from "react";
import Add from "./Form/Add";

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
      break;
    case "delete-saisie":
      break;

    default:
      throw new Error(`Unhandled action view: ${type}`);
  }
};

export default View;
