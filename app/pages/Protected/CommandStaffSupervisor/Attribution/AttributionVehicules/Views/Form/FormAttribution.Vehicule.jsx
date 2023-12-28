import React, { useMemo } from "react";

import { useForm } from "react-hook-form";
import {
  ErrorSection,
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../../components/Button/ButtonWithLoader";
import useFetchAgentByCategories from "../../../../../../../hooks/useFetchAgentByCategories";
import {
  officierCategory,
  saspOfficer,
  superviseurCategoryList,
} from "../../../Sanctions/helpers";
import SelectAsync from "../../../../../../../components/SelectAsync";
import {
  formAtrributionVehicule,
  vehicleAttributionResolver,
} from "./VehicleFormResolver";
import { yupResolver } from "@hookform/resolvers/yup";

const FormAttributionVehicule = ({
  defaultFormValues = formAtrributionVehicule,
  onSaveAttribution,
  process = false,
  labelSubmiButton,
}) => {
  const LABEL_SUBMIT_BTN = labelSubmiButton ? labelSubmiButton : "Ajouter";

  const {
    register,
    getValues,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValues,
    resolver: yupResolver(vehicleAttributionResolver),
  });

  const onSave = (values) => {
    onSaveAttribution(values);
  };
  const officersList = useFetchAgentByCategories(saspOfficer);
  const AGENT_OPTION = useMemo(() => {
    if (officersList.data.length == 0) return [];
    return [...officersList.data].map((agent) => ({
      id: agent.id,
      matricule: agent.matricule,
      iri: `api/agents/${agent.id}`,
      label: `${agent.matricule}-${agent.firstname} ${agent.lastname}`,
      value: `api/agents/${agent.id}`,
      grade: agent.grade,
    }));
  }, [officersList.data.length]);

  const DEFAULT_AGENT_ATTRIBUTED = useMemo(() => {
    if (defaultFormValues.agentAttributed) {
      const findAgent = [...AGENT_OPTION].find(
        (list) => list.label == defaultFormValues.agentAttributed
      );
      findAgent && setValue("agentAttributed", findAgent?.value);
      findAgent && setValue("agentAttributedLabel", findAgent?.label);
      return {
        label: defaultFormValues.agentAttributed,
      };
    }
    return null;
  }, [officersList.data, AGENT_OPTION.length]);

  const handleSelectAgent = (value) => {
    if (errors.agentAttributed) clearErrors("agentAttributed");
    setValue("agentAttributed", value.value);
    setValue("agentAttributedLabel", value.label);
    setValue("grade", value.grade);
  };

  return (
    <FormContainer className="form-theme-color" onSubmit={handleSubmit(onSave)}>
      <FormControl>
        <label htmlFor="">Agent</label>
        <SelectAsync
          options={AGENT_OPTION}
          isLoading={officersList.isLoading}
          placeholder="Selctionner l'agent"
          onChange={handleSelectAgent}
          defaultValue={DEFAULT_AGENT_ATTRIBUTED}
        />
        {
          <ErrorSection>
            {errors.agentAttributed && (
              <small className="text-error">
                {errors.agentAttributed.message}
              </small>
            )}
          </ErrorSection>
        }
      </FormControl>
      <FormControl>
        <label htmlFor="">Grade</label>
        <input placeholder="Ex: Sergent" {...register("grade")} readOnly />
      </FormControl>
      <FormControl>
        <label htmlFor="">Type du vehicule</label>
        <input placeholder="Ex: buffalo Stx" {...register("typeVehicle")} />
        <ErrorSection>
          {errors.typeVehicle && (
            <small className="text-error">{errors.typeVehicle.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="">Plaque du véhicule</label>
        <input placeholder="Ex: 49GHT256" {...register("immatriculation")} />
        <ErrorSection>
          {errors.typeVehicle && (
            <small className="text-error">{errors.typeVehicle.message}</small>
          )}
        </ErrorSection>
      </FormControl>
      <FormControl>
        <label htmlFor="">ID du Véhicule</label>
        <input placeholder="Ex: 569810" {...register("idVehicle")} />
        <ErrorSection>
          {errors.idVehicle && (
            <small className="text-error">{errors.idVehicle.message}</small>
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

export default FormAttributionVehicule;
