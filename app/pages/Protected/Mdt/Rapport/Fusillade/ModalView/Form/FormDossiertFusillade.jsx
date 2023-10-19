import React from "react";
import {
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import {
  RowAddSaisiAction,
  RowGroupFusillade,
  RowInputSaisielistContainer,
  RowSaisieDossierFusillade,
} from "../../Fusillade.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import { useForm } from "react-hook-form";
import RowInputSaisie from "./RowInputSaisie";
import InputSaisieAction from "./InputSaisieAction";
import { defaultFormvalues } from "./formDefaultvalue";

const FormDossiertFusillade = ({
  defaultValues,
  labelSaveButton = "Ajouter",
  onSave = () => {},
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
    reset,
  } = useForm({ defaultValues: defaultFormvalues });

  const handleFormSubmit = (values) => {
    onSave(values);
  };

  const liseOfSaisie = (list) => {
    console.log(list);
  };

  return (
    <FormContainer
      className="form-theme-color"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
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
        <InputSaisieAction
          saisies={getValues("saisies")}
          listSaisie={liseOfSaisie}
        />
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
