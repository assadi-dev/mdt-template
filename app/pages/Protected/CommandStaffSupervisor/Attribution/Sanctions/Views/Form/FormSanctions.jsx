import React, { useMemo } from "react";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import { useForm } from "react-hook-form";

import { SanctionTextContent } from "../../AttributionSanction.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import useFetchSupervisor from "../../../../../../../hooks/useFetchSupervisor";
import {
  listDecisionMakerToString,
  officierCategory,
  superviseurCategoryList,
} from "../../helpers";
import SelectAsync from "../../../../../../../components/SelectAsync";
import useFetchAgentByCategories from "../../../../../../../hooks/useFetchAgentByCategories";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  formSanctionDefaultValue,
  formSanctionSchema,
} from "./sanctionFormResolver";
import { requiredMessage } from "../../../../../../../config/ValidationMessage";

const FormSanctions = ({
  defaultFormValue = formSanctionDefaultValue,
  onSaveSanction = () => {},
  process = false,
  labelSubmiButton,
}) => {
  const supervisorList = useFetchSupervisor(superviseurCategoryList);
  const officersList = useFetchAgentByCategories(officierCategory);
  const LABEL_SUBMIT_BTN = labelSubmiButton ? labelSubmiButton : "Ajouter";

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
    resolver: yupResolver(formSanctionSchema),
  });

  const SUPERVISORS_OPTION = useMemo(() => {
    if (supervisorList.data.length == 0) return [];
    return [...supervisorList.data].map((agent) => ({
      id: agent.id,
      matricule: agent.matricule,
      iri: `api/agents/${agent.id}`,
      label: `${agent.matricule}-${agent.firstname} ${agent.lastname}`,
      value: `${agent.matricule}-${agent.firstname} ${agent.lastname}`,
    }));
  }, [supervisorList.data]);

  const DEFAULT_DECIDEUR = useMemo(() => {
    if (!defaultFormValue.decisionMaker) return "";
    const toArray = defaultFormValue.decisionMaker.split(",");
    return toArray.map((decisionMaker) => ({
      label: decisionMaker.trim(),
      value: decisionMaker.trim(),
    }));
  }, [defaultFormValue.decisionMaker]);

  const OFFICERS_OPTION = useMemo(() => {
    if (!officersList.data || officersList.data.length == 0) return [];
    return [...officersList.data].map((agent) => ({
      id: agent.id,
      matricule: agent.matricule,
      value: `api/agents/${agent.id}`,
      label: `${agent.matricule}-${agent.firstname} ${agent.lastname}`,
    }));
  }, [officersList.data]);

  const DEFAULT_AGENT_CONCERNED = useMemo(() => {
    if (!defaultFormValue.agentConcerned) return {};
    return { label: defaultFormValue.agentConcerned };
  }, [defaultFormValue.agentConcerned, OFFICERS_OPTION]);

  const handleSaveSanction = (values) => {
    if (!getValues("comment")) {
      setError("comment", { message: requiredMessage });
      return;
    }
    if (defaultFormValue.agentConcerned) {
      const findAgent = OFFICERS_OPTION?.find(
        (agent) => agent.label == getValues("agentConcerned")
      );
      findAgent && setValue("agentConcerned", findAgent.value);
    }

    onSaveSanction(values);
  };

  const getDetailSanction = (content) => {
    if (errors.comment) {
      clearErrors("comment");
    }
    setValue("comment", content);
  };

  const handleSelectAgentConcerned = (agent) => {
    if (errors.agentConcerned) clearErrors("agentConcerned");
    setValue("agentConcerned", agent.value);
    setValue("agentConcernedLabel", agent.label);
  };

  const handleSelectDecisionMaker = (decisionMakers) => {
    const namesOfDecisionMaker = [...decisionMakers].map(
      (maker) => maker.label
    );
    const toString = listDecisionMakerToString(namesOfDecisionMaker);
    if (errors.decisionMaker) clearErrors("decisionMaker");
    setValue("decisionMaker", toString);
  };

  return (
    <FormContainer
      onSubmit={handleSubmit(handleSaveSanction)}
      className="form-theme-color"
    >
      <FormControl className="mb-3">
        <label htmlFor="">Décideur</label>
        <SelectAsync
          options={SUPERVISORS_OPTION}
          isLoading={supervisorList.isLoading}
          isMulti
          placeholder="Selctionner les décideurs"
          closeMenuOnSelect={false}
          onChange={handleSelectDecisionMaker}
          defaultValue={DEFAULT_DECIDEUR}
        />
        <ErrorSection>
          {errors.decisionMaker && (
            <small className="text-error">{errors.decisionMaker.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl className="mb-3">
        <label htmlFor="">Agent Concerné</label>
        <SelectAsync
          options={OFFICERS_OPTION}
          isLoading={officersList.isLoading}
          placeholder="Selctionner l'agent concerné"
          onChange={handleSelectAgentConcerned}
          defaultValue={DEFAULT_AGENT_CONCERNED}
        />
        <ErrorSection>
          {errors.agentConcerned && (
            <small className="text-error">
              {errors.agentConcerned.message}
            </small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl className="mb-3">
        <label htmlFor="">Type de sanction</label>
        <input placeholder="Ex: Blame I" {...register("typeSanction")} />
        <ErrorSection>
          {errors.typeSanction && (
            <small className="text-error">{errors.typeSanction.message}</small>
          )}
        </ErrorSection>
      </FormControl>

      <FormControl className="mb-3">
        <label htmlFor="">Détails de la sanction</label>
        <SanctionTextContent
          className="theme-text-editor"
          getOutput={getDetailSanction}
          defaultValue={getValues("comment")}
        />
        <ErrorSection>
          {errors.comment && (
            <small className="text-error">{errors.comment.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <ModalFooter>
        <ButtonWithLoader
          labelButton={LABEL_SUBMIT_BTN}
          className="bg-btn-theme-color"
          type="submit"
          isLoading={process}
        />
      </ModalFooter>
    </FormContainer>
  );
};

export default FormSanctions;
