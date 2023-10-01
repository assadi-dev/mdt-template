import React from "react";
import { ActionButton } from "../DataTable/DataTable.styled";
import { RxEyeOpen } from "react-icons/rx";

const ShowActionButton = ({ ...props }) => {
  return (
    <ActionButton {...props}>
      <RxEyeOpen />{" "}
    </ActionButton>
  );
};

export default ShowActionButton;
