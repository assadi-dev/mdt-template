import React from "react";
import DeleteConfirmForm from "../../../../../../components/Modal/DialogConfirm/DeleteConfirmForm";

const DeleCodepenal = ({ payload, ...props }) => {
  const confirmDelete = () => {
    console.log(payload);
  };
  return (
    <DeleteConfirmForm
      text="Voulez-vous supprimer"
      onConfirm={confirmDelete}
      {...props}
    >
      <p className="text-center my-1">{payload?.label} ?</p>
    </DeleteConfirmForm>
  );
};

export default DeleCodepenal;
