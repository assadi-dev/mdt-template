import React from "react";
import {
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import { RowGroupFusillade } from "../../Fusillade.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";

const FormDossiertFusillade = ({
  defaultValues,
  labelSaveButton = "Ajouter",
  onSave,
}) => {
  return (
    <FormContainer className="form-theme-color">
      <FormControl>
        <label htmlFor="">Lead Terrain</label>
        <input />
      </FormControl>
      <RowGroupFusillade>
        <FormControl>
          <label htmlFor="">groupe 1</label>
          <input />
        </FormControl>
        <FormControl>
          <label htmlFor="">groupe 2</label>
          <input />
        </FormControl>
      </RowGroupFusillade>
      <FormControl>
        <label htmlFor="">lieu(x)</label>
        <input />
      </FormControl>
      <FormControl>
        <label htmlFor="">récit de l'intervention</label>
        <textarea style={{ resize: "none" }} />
      </FormControl>
      <FormControl>
        <label htmlFor="">Saisie</label>
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          labelButton={labelSaveButton}
          className="bg-btn-theme-color"
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default FormDossiertFusillade;
