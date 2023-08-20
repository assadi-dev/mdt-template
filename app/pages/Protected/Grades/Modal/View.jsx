import React from "react";
import FormAddCategory from "./Views/FormAddCategory";

const View = ({ view, data, onCloseModal }) => {
  switch (view) {
    case "add-category":
      return (
        <FormAddCategory
          className="modal-theme-color"
          onCloseModal={onCloseModal}
        />
      );
    case "editcategory":

    case "delete-category":

    default:
      break;
  }
};

export default View;
