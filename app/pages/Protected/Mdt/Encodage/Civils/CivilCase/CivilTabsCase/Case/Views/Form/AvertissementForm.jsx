import React from "react";
import { useForm } from "react-hook-form";
import { AvertissemenValues, AvertissementResolver } from "./formResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../../../../../components/Button/ButtonWithLoader";
import MarkdowTextEditor from "../../../../../../../../../../components/TextEditor/MarkdowTextEditor";
import ErrorInputSection from "../../../../../../../../../../components/Forms/ErrorInputSection";

const AvertissementForm = ({
  defaultValues = AvertissemenValues,
  onSubmitValue = () => {},
  process = false,
  labelSubmit = "Ajouter",
  ...props
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(AvertissementResolver),
  });

  const submit = (values) => {
    onSubmitValue(values);
  };

  const handleChangeText = (value) => {
    if (errors.description) clearErrors("description");
    setValue("description", value);
  };

  return (
    <FormContainer className="form-theme-color" onSubmit={handleSubmit(submit)}>
      <FormControl>
        <label htmlFor="body">lieux</label>
        <input type="text" {...register("location")} placeholder="Lieux" />
        <ErrorInputSection errors={errors.location} />
      </FormControl>

      <FormControl>
        <label htmlFor="body">Déscription</label>
        <MarkdowTextEditor
          id="body"
          className="theme-text-editor mb-0"
          getOutput={handleChangeText}
          defaultValue={getValues("description")}
        />
        <ErrorInputSection errors={errors.description} />
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          labelButton={labelSubmit}
          isLoading={process}
          className="bg-btn-theme-color"
          type="submit"
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default AvertissementForm;
