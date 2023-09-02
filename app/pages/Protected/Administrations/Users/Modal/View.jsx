import React from "react";
import UserFormEditAcount from "./Form/UserFormEditAcount";

const View = ({ view, data, onCloseModal }) => {
  switch (view) {
    case "edit-user":
      return (
        <UserFormEditAcount
          className="modal-theme-color"
          userData={data}
          onCloseModal={onCloseModal}
        />
      );

    case "delete":
      return null;

    default:
      break;
  }
};

export default View;
