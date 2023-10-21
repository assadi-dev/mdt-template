import React from "react";
import {
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import { useForm } from "react-hook-form";
import { formSanctionSchema } from "../listOfViews";
import { SanctionTextContent } from "../../AttributionSanction.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";

const FormSanctions = ({
  defaultFormValue = formSanctionSchema,
  onSaveSanction = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    getValues,
    setValue,
  } = useForm({
    defaultValues: { ...defaultFormValue },
  });

  const handleSaveSanction = (values) => {
    onSaveSanction(values);
  };

  const getDetailSanction = (content) => {
    if (errors.typeSanction) {
      clearErrors("detailSanction");
    }
    setValue("typeSanction", content);
  };

  const inputOption = { required: true };

  return (
    <FormContainer
      onSubmit={handleSaveSanction(handleSaveSanction)}
      className="form-theme-color"
    >
      <FormControl className="mb-3">
        <label htmlFor="">Décideur</label>
        <input
          placeholder="Ex: Glenn Powell"
          {...register("decideur", inputOption)}
        />
      </FormControl>
      <FormControl className="mb-3">
        <label htmlFor="">Agent Concerné</label>
        <input
          placeholder="Ex: Kayline Moreno"
          {...register("agentConcerne", inputOption)}
        />
      </FormControl>
      <FormControl className="mb-3">
        <label htmlFor="">Type de sanction</label>
        <input
          placeholder="Ex: Blame I"
          {...register("typeSanction", inputOption)}
        />
      </FormControl>

      <FormControl className="mb-3">
        <label htmlFor="">Détails de la sanction</label>
        <SanctionTextContent
          className="theme-text-editor"
          getOutput={getDetailSanction}
          defaultValue={getValues("raison")}
        />
      </FormControl>
      <ModalFooter>
        <ButtonWithLoader
          labelButton={"Ajouter"}
          className="bg-btn-theme-color"
          type="submit"
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default FormSanctions;
