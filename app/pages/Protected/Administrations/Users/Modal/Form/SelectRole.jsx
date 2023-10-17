import React from "react";
import ReactDropdown from "react-dropdown";

const roleOptions = [
  { label: "Utilisateur", value: "ROLE_USER" },
  { label: "Administrateur", value: "ROLE_ADMIN" },
];

const SelectRole = ({ ...props }) => {
  return (
    <ReactDropdown
      {...props}
      options={roleOptions}
      placeholder="Definir un role"
      className="dropdown-select-custom"
    />
  );
};

export default SelectRole;
