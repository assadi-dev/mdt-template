import React, { useMemo } from "react";
import {
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

const FormSanctions = ({
  defaultFormValue = formSanctionDefaultValue,
  onSaveSanction = () => {},
}) => {
  const supervisorList = useFetchSupervisor(superviseurCategoryList);
  const officersList = useFetchAgentByCategories(officierCategory);

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
      value: `api/agents/${agent.id}`,
      label: `${agent.firstname} ${agent.lastname}`,
    }));
  }, [supervisorList.data]);

  const OFFICERS_OPTION = useMemo(() => {
    if (!officersList.data || officersList.data.length == 0) return [];
    return [...officersList.data].map((agent) => ({
      id: agent.id,
      matricule: agent.matricule,
      value: `api/agents/${agent.id}`,
      label: `${agent.firstname} ${agent.lastname}`,
    }));
  }, [officersList.data]);

  const handleSaveSanction = (values) => {
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
  };

  const handleSelectDecisionMaker = (decisionMakers) => {
    const namesOfDecisionMaker = [...decisionMakers].map(
      (maker) => maker.label
    );
    const toString = listDecisionMakerToString(namesOfDecisionMaker);
    console.log(toString);
    /*  if (errors.agentConcerned) clearErrors("agentConcerned");
    setValue("agentConcerned", agent.value); */
  };

  const inputOption = { required: true };

  return (
    <FormContainer
      onSubmit={handleSaveSanction(handleSaveSanction)}
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
        />
      </FormControl>
      <FormControl className="mb-3">
        <label htmlFor="">Agent Concerné</label>
        <SelectAsync
          options={OFFICERS_OPTION}
          isLoading={officersList.isLoading}
          placeholder="Selctionner l'agent concerné"
          onChange={handleSelectAgentConcerned}
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
