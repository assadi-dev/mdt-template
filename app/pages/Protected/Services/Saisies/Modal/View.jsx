import React from "react";
import Add from "./Form/Add";
import Edit from "./Form/Edit";
import PreviewAcquisition from "./Form/PreviewAcquisition";

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

    case "delete-saisie":
      break;

    case "show-acquisition":
      return (
        <PreviewAcquisition
          className="modal-theme-color"
          payload={data}
          onCloseModal={onCloseModal}
        />
      );
    default:
      throw new Error(`Unhandled action view: ${view}`);
  }
};

export default View;
