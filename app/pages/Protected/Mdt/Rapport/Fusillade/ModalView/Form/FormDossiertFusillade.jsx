import React, { useEffect, useMemo } from "react";
import {
  ErrorSection,
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
import { requiredMessage } from "../../../../../../../config/ValidationMessage";
import useFetchAgentList from "../../../../../../../hooks/useFetchAgentList";
import SelectAsync from "../../../../../../../components/SelectAsync";
import { cleanAgentMatricule } from "../../../../../../../services/utils/user";

const FormDossiertFusillade = ({
  process = false,
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
    clearErrors,
    setError,
    reset,
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: yupResolver(GunFightResolver),
  });

  const { data, isLoading, fetchAgents, error, AbortController } =
    useFetchAgentList();

  const agentList = useMemo(() => {
    if (!data?.data) return [];
    return [...data.data].map((agent) => ({
      value: `${cleanAgentMatricule(
        agent.matricule,
        agent.firstname,
        agent.lastname
      )}`,
      label: `${cleanAgentMatricule(
        agent.matricule,
        agent.firstname,
        agent.lastname
      )}`,
      id: `${agent.id}`,
    }));
  }, [data]);
  const handleSelectLead = (value) => {
    errors.lead && clearErrors("lead");
    setValue("lead", value.value);
    console.log(value);
  };

  useEffect(() => {
    fetchAgents();
    return () => {
      AbortController?.abort();
    };
  }, []);

  const handlegetRecit = (value) => {
    errors.recit && clearErrors("recit");
    setValue("recit", value);
  };

  const handleFormSubmit = (values) => {
    if (!values.recit) {
      setError("recit", requiredMessage);
      return;
    }
    onSave(values);
  };

  const liseOfSaisie = (list) => {
    setValue("seized", list);
  };

  return (
    <FormContainer
      className="form-theme-color"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormControl>
        <label htmlFor="">Lead Terrain</label>
        <SelectAsync
          options={agentList}
          placeholder="Selectioner un agent"
          isloading={isLoading}
          onChange={handleSelectLead}
        />
        <ErrorSection>
          {errors.lead && (
            <small className="text-error">{errors.lead.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <RowGroupFusillade>
        <FormControl>
          <label htmlFor="">Groupe 1</label>
          <input {...register("firstGroup")} />
          <ErrorSection>
            {errors.firstGroup && (
              <small className="text-error">{errors.firstGroup.message}</small>
            )}
          </ErrorSection>
        </FormControl>
        <FormControl>
          <label htmlFor="">Groupe 2</label>
          <input {...register("secondGroup")} />
          <ErrorSection>
            {errors.secondGroup && (
              <small className="text-error">{errors.secondGroup.message}</small>
            )}
          </ErrorSection>
        </FormControl>
      </RowGroupFusillade>
      <FormControl>
        <label htmlFor="">Lieu(x)</label>
        <input {...register("location")} />
        <ErrorSection>
          {errors.location && (
            <small className="text-error">{errors.location.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <RecitTextContent>
          <p>Recit de l'intervention</p>
          <MarkdowTextEditor
            className="theme-text-editor"
            getOutput={handlegetRecit}
          />
        </RecitTextContent>
        <ErrorSection>
          {errors.recit && (
            <small className="text-error">{errors.recit.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <InputSaisieAction
          saisies={getValues("seized")}
          listSaisie={liseOfSaisie}
        />
        <ErrorSection>
          {errors.seized && (
            <small className="text-error">{errors.seized.message}</small>
          )}
        </ErrorSection>
      </FormControl>

      <ModalFooter>
        <ButtonWithLoader
          isLoading={process}
          labelButton={labelSaveButton}
          className="bg-btn-theme-color"
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default FormDossiertFusillade;
