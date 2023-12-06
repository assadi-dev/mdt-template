import React from "react";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import { useForm } from "react-hook-form";

import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import { TextContent } from "../../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import MarkdowTextEditor from "../../../../../../../components/TextEditor/MarkdowTextEditor";
import AcquisitionSection from "../Form/AcquisitionSection";
import {
  CommentTextContent,
  ReportRookieModalFooter,
} from "../../RapportRookie.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  rookieReportFormValues,
  rookieReportResolver,
} from "./RookieReportSchema";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

const RapportRookieForm = ({
  defaultValues = rookieReportFormValues,
  process,
  submitValue,
}) => {
  const handlegetCommentaire = (value) => {
    errors.comment && clearErrors("comment");
    setValue("comment", value);
  };

  const submit = (values) => {
    if (!values.comment) {
      setError("comment", { message: requiredMessage });
      return;
    }
    submitValue(values);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(rookieReportResolver),
  });

  return (
    <FormContainer className="form-theme-color" onSubmit={handleSubmit(submit)}>
      <FormControl>
        <label htmlFor="">Matricule du Rookie</label>
        <input type="text" {...register("matriculeRookie")} />
        <ErrorSection>
          {errors.matriculeRookie && (
            <small className="text-error">
              {errors.matriculeRookie.message}
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="">Nom Prénom du Rookie</label>
        <input type="text" {...register("rookieName")} readOnly />
      </FormControl>
      <FormControl>
        <label htmlFor="">Type de patrouille</label>
        <input type="text" {...register("patrolType")} />
        <ErrorSection>
          {errors.patrolType && (
            <small className="text-error">{errors.patrolType.message}</small>
          )}
        </ErrorSection>
      </FormControl>

      <AcquisitionSection />

      <CommentTextContent>
        <p className="mb-1">Commentaire</p>
        <MarkdowTextEditor
          className="theme-text-editor"
          getOutput={handlegetCommentaire}
        />
      </CommentTextContent>
      <ErrorSection>
        {errors.comment && (
          <small className="text-error">{errors.comment.message}</small>
        )}
      </ErrorSection>

      <ReportRookieModalFooter>
        <ButtonWithLoader
          isLoading={process}
          className="bg-btn-theme-color"
          type="submit"
        >
          Ajouter
        </ButtonWithLoader>
      </ReportRookieModalFooter>
    </FormContainer>
  );
};

export default RapportRookieForm;
