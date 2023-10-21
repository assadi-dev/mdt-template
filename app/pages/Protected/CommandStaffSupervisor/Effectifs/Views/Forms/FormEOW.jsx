import React from "react";
import { EowFormContainer, TextEOWCOntent } from "../../Effectifs.styled";
import {
  FormControl,
  ModalFooter,
} from "../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../components/Button/ButtonWithLoader";

const FormEOW = ({ payload, ...props }) => {
  const handlegetContentText = (value) => {
    console.log(value);
  };

  return (
    <EowFormContainer className="form-theme-color">
      <FormControl>
        <label htmlFor="dateEow">Date end of watch </label>
        <input type="date" />
      </FormControl>

      <FormControl>
        <label htmlFor="dateEow">Cause de la mort</label>
        <TextEOWCOntent
          className="theme-text-editor"
          getOutput={handlegetContentText}
        />
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          labelButton="Enregistrer"
          className="bg-btn-theme-color"
        />
      </ModalFooter>
    </EowFormContainer>
  );
};

export default FormEOW;
