import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { TrafficResolver, TrafficValues } from "./formResolver";

const TrafficForm = ({
  defaultValues = TrafficValues,
  onSubmitValue,
  process = false,
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

  return <div>TrafficForm</div>;
};

export default TrafficForm;
