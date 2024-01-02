import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { TrafficResolver, TrafficValues } from "./formResolver";
import {
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../../../../components/Forms/FormView.styled";
import ButtonWithLoader from "../../../../../../../../../../components/Button/ButtonWithLoader";
import ErrorInputSection from "../../../../../../../../../../components/Forms/ErrorInputSection";
import ChefAccusationInoutSelect from "./ChefAccusationInoutSelect";
import AccusationsDatatable from "../../../../../../../../../../components/AccusationsDatatable.jsx";
import { TabAccusationContainer } from "../../Case.styled.jsx";
import ShowTotalAmount from "./ShowTotalAmount.jsx";
import { nominalOptionValues } from "../../../../../../../../../../config/options.js";
import SelectNominal from "./Selectnominal.jsx";

const TrafficForm = ({
  defaultValues = TrafficValues,
  onSubmitValue,
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
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(TrafficResolver),
  });

  const handleSelectnominal = (value) => {
    console.log(value);
  };

  const TRAFFIC_COLUMNS = [
    {
      Header: "Chef d'accusation",
      accessor: "label",
    },
    {
      Header: "Quantité",
      accessor: "quantity",
      Cell: ({ value }) => <input type="number" defaultValue={value} />,
    },
    {
      Header: "Amende",
      accessor: "",
      Cell: ({ row }) => {
        return (
          <SelectNominal
            nominalOptions={nominalOptionValues}
            value={nominalOptionValues[3]}
            onChange={handleSelectnominal}
          />
        );
      },
    },
  ];

  const infractions = getValues("infractions");

  const handleSelectedInfractions = (infraction) => {
    setValue("infractions", infraction);
  };

  const submit = (values) => {
    onSubmitValue(values);
  };

  return (
    <FormContainer className="form-theme-color" onSubmit={handleSubmit(submit)}>
      <FormControl>
        <input type="text" {...register("location")} placeholder="Lieux" />
        <ErrorInputSection errors={errors.location} />
      </FormControl>
      <FormControl>
        <ChefAccusationInoutSelect
          defaultValue={getValues("infractions")}
          placeholder="Séléctionnez les chef d'accusations"
          onSelected={handleSelectedInfractions}
        />
        <ErrorInputSection errors={errors.infractions} />
      </FormControl>
      <FormControl>
        <TabAccusationContainer className="border-theme-color-primary">
          <AccusationsDatatable
            columns={TRAFFIC_COLUMNS}
            infractions={watch("infractions") && infractions}
            className="dataTable-theme-color"
          />
        </TabAccusationContainer>
      </FormControl>
      <FormControl>
        <ShowTotalAmount />
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

export default TrafficForm;
