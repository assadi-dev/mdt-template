import React, { useState } from "react";
import {
  RemoveRowSaisieButton,
  RemoveRowSaisieButtonCol,
  RowSaisieDossierFusillade,
} from "../../Fusillade.styled";
import { FormControl } from "../../../../../../../components/Forms/FormView.styled";
import { CrossIcon, TrashIcon } from "../../../../../../../components/Svg";
import { motion } from "framer-motion";
import { listeSaisieAnimation } from "./Animation";

const RowInputSaisie = ({
  saisie = null,
  onUpdate = () => {},
  onRemove = () => {},
  ...props
}) => {
  const handelClickRemove = () => {
    onRemove(saisie.id);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = saisie.id;
    onUpdate(id, name, value);
  };

  return (
    <motion.li
      variants={listeSaisieAnimation}
      initial={"hidden"}
      animate="show"
      exit="hidden"
      {...props}
    >
      <RowSaisieDossierFusillade>
        <FormControl className="m-0">
          <input
            type="text"
            placeholder="Nom et Prénom"
            name="fullname"
            onChange={handleChange}
            defaultValue={saisie?.fullname}
          />
        </FormControl>
        <FormControl className="m-0">
          <input
            type="text"
            placeholder="Saisie"
            name="seizure"
            onChange={handleChange}
            defaultValue={saisie?.seizure}
          />
        </FormControl>
        <FormControl className="m-0">
          <input
            type="text"
            placeholder="Appartenence"
            name="affiliation"
            onChange={handleChange}
            defaultValue={saisie?.affiliation}
          />
        </FormControl>
      </RowSaisieDossierFusillade>
      {onRemove && (
        <RemoveRowSaisieButton
          type="button"
          className="remove-row-saisie-btn"
          onClick={handelClickRemove}
        >
          <CrossIcon />
        </RemoveRowSaisieButton>
      )}
    </motion.li>
  );
};

export default RowInputSaisie;
