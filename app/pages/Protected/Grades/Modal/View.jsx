import React from "react";
import FormAddCategory from "./Views/FormAddCategory";
import FormAddGrade from "./Views/FormAddGrade";

const View = ({ view, data, onCloseModal }) => {
  switch (view) {
    case "add-category":
      return (
        <FormAddCategory
          className="modal-theme-color"
          onCloseModal={onCloseModal}
        />
      );
    case "edit-category":

    case "delete-category":

    case "add-grade":
      return (
        <FormAddGrade
          className="modal-theme-color"
          onCloseModal={onCloseModal}
        />
      );

    default:
      break;
  }
};

export default View;
