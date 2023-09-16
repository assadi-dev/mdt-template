import React from "react";
import Add from "./Form/Add";

const View = ({ view, data, onCloseModal }) => {
  console.log(view);
  switch (view) {
    case "add-saisie":
      return <Add onCloseModal={onCloseModal} />;
    case "edit-saisie":
      break;
    case "delete-saisie":
      break;

    default:
      break;
  }
};

export default View;
