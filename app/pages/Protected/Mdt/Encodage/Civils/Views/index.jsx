import React from "react";
import AddCivil from "./Form/AddCivil";

const View = ({ view, data, onCloseModal }) => {
  switch (view) {
    case "add-civil":
      return <AddCivil className="modal-theme-color" />;

    default:
      break;
  }
};

export default View;
