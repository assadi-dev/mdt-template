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
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(TrafficResolver),
  });

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
        return <SelectNominal />;
      },
    },
  ];

  const infractions = [
    {
      id: 1,
      label: "Atteinte à la pudeur",
      quantity: 1,
      amount: "800",
    },
    {
      id: 2,
      label: "Conduite dangereuse mineur",
      quantity: 1,
      amount: "1000",
    },
  ];

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
        <ChefAccusationInoutSelect placeholder="Séléctionnez les chef d'accusations" />
        <ErrorInputSection errors={errors.infractions} />
      </FormControl>
      <FormControl>
        <AccusationsDatatable
          columns={TRAFFIC_COLUMNS}
          infractions={infractions}
          className="dataTable-theme-color"
        />
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
