import React from "react";
import {
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import {
  RecitTextContent,
  RowAddSaisiAction,
  RowGroupFusillade,
  RowInputSaisielistContainer,
  RowSaisieDossierFusillade,
} from "../../Fusillade.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import { useForm } from "react-hook-form";
import RowInputSaisie from "./RowInputSaisie";
import InputSaisieAction from "./InputSaisieAction";
import { GunFightResolver, defaultFormvalues } from "./formDefaultvalue";
import { yupResolver } from "@hookform/resolvers/yup";
import MarkdowTextEditor from "../../../../../../../components/TextEditor/MarkdowTextEditor";

const FormDossiertFusillade = ({
  defaultValues = defaultFormvalues,
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
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: yupResolver(GunFightResolver),
  });

  const handlegetRecit = () => {};

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
        <input {...register("lead")} />
      </FormControl>
      <RowGroupFusillade>
        <FormControl>
          <label htmlFor="">Groupe 1</label>
          <input {...register("firstGroup")} />
        </FormControl>
        <FormControl>
          <label htmlFor="">Groupe 2</label>
          <input {...register("secondGroup")} />
        </FormControl>
      </RowGroupFusillade>
      <FormControl>
        <label htmlFor="">Lieu(x)</label>
        <input {...register("location")} />
      </FormControl>
      <FormControl>
        <RecitTextContent>
          <p>Recit de l'intervention</p>
          <MarkdowTextEditor
            className="theme-text-editor"
            getOutput={handlegetRecit}
          />
        </RecitTextContent>
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
