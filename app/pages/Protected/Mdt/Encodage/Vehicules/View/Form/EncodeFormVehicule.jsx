import React from "react";
import useProcess from "../../../../../../../hooks/useProcess";
import { useForm } from "react-hook-form";

const EncodeFormVehicule = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();

  const defaultValues = {
    name: "",
    firstname: "",
    typeArme: "",
    numeroSerie: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const submitFormArme = (values) => {
    toggleProcess();
    console.log(values);
  };

  return <div>EncodeFormVehicule</div>;
};

export default EncodeFormVehicule;
