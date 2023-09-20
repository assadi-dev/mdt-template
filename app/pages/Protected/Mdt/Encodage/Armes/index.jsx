import React from "react";
import DialogConfirm, {
  confirm,
} from "../../../../../components/Modal/DialogConfirm";
import DialogConfirmComponent from "../../../../../components/Modal/DialogConfirm/DialogConfirmComponent";

const EncodageArmes = () => {
  const deleteToto = async () => {
    if (await confirm()) {
      console.log("yess");
    }
  };

  return (
    <div>
      Encodage Armes
      <p>
        <button onClick={deleteToto}>Delete</button>
      </p>
      <DialogConfirm labelConfirm={"Voulez vous supprimer cette armes ?"} />
    </div>
  );
};

export default EncodageArmes;
