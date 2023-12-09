import React, { useEffect, useMemo } from "react";
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
import useFetchRookieList from "../../../../../../../hooks/useFetchRookieList";
import debounce from "debounce";
import SelectAsync from "../../../../../../../components/SelectAsync";

const RapportRookieForm = ({
  defaultValues = rookieReportFormValues,
  process,
  submitValue,
}) => {
  const { fetchRookie, isLoading, data } = useFetchRookieList();

  useEffect(() => {
    fetchRookie();
  }, []);

  const handlegetCommentaire = (value) => {
    errors.comment && clearErrors("comment");
    setValue("comment", value);
  };

  const handleSelectRookie = (value) => {
    errors.rookie && clearErrors("rookie");
    console.log(value);
    //setValue("rookie")
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
    getValues,
    watch,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(rookieReportResolver),
  });

  const options = useMemo(() => {
    if (!data?.data) return [];
    return [...data.data].map((rookie) => {
      return {
        value: `api/agents/${rookie.idAgent}`,
        label: `${rookie.matricule}-${rookie.firstname} ${rookie.lastname}`,
        lastname: rookie.lastname,
        firstname: rookie.firstname,
        matricule: rookie.matricule,
      };
    });
  }, [data]);

  return (
    <FormContainer className="form-theme-color" onSubmit={handleSubmit(submit)}>
      <FormControl>
        <label htmlFor="">Matricule du Rookie</label>

        <SelectAsync
          options={options}
          isLoading={isLoading}
          placeholder="Selectioner le rookie"
          onChange={handleSelectRookie}
        />
        <ErrorSection>
          {errors.matriculeRookie && (
            <small className="text-error">
              {errors.matriculeRookie.message}
            </small>
          )}
        </ErrorSection>
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
