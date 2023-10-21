import React from "react";
import DeleteConfirmForm from "../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";

const DeleCodepenal = ({ payload, ...props }) => {
  const confirmDelete = () => {
    //console.log(payload);
  };

  const TEXT_DELETE = `Voulez-vous supprimer  ${payload.label} ?`;

  return (
    <DeleteConfirmForm
      text={TEXT_DELETE}
      onConfirm={confirmDelete}
      {...props}
    ></DeleteConfirmForm>
  );
};

export default DeleCodepenal;
