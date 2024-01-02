import React from "react";
import { ArrestReportResolver, ArrestReportrValues } from "./formResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../../../../components/Forms/FormView.styled";
import ErrorInputSection from "../../../../../../../../../../components/Forms/ErrorInputSection";
import {
  RowInputForm,
  SwitchAccusationBtn,
  TabAccusationContainer,
  switchAccusationBtn,
} from "../../Case.styled";
import ChefAccusationInoutSelect from "./ChefAccusationInoutSelect";
import { nominalOptionValues } from "../../../../../../../../../../config/options";
import SelectNominal from "./Selectnominal";
import AccusationTablePaginate from "../../../../../../../../../../components/AccusationsDatatable.jsx/AccusationTablePaginate";
import AccusationsDatatable from "../../../../../../../../../../components/AccusationsDatatable.jsx";
import ButtonWithLoader from "../../../../../../../../../../components/Button/ButtonWithLoader";
import ShowTotalAmount from "./ShowTotalAmount";
import SwitchButton from "../../../../../../../../../../components/Button/SwitchButton.jsx";

const ArrestReportForm = ({
  defaultValues = ArrestReportrValues,
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
    defaultValues: ArrestReportrValues,
    resolver: yupResolver(ArrestReportResolver),
  });

  const handleSelectnominal = (value) => {
    console.log(value);
  };

  const infractions = getValues("infractions");

  const handleSelectedInfractions = (infraction) => {
    setValue("infractions", infraction);
  };

  const submit = (values) => {
    onSubmitValue(values);
  };

  const ARREST_REPORT_COLUMNS = [
    {
      Header: "Chef d'accusation",
      accessor: "label",
    },
    {
      Header: "Tentative",
      accessor: "tentative",
      Cell: ({ row }) => (
        <SwitchAccusationBtn className="mx-auto text-center toggle-custom" />
      ),
    },
    {
      Header: "Complicité",
      accessor: "complicity",
      Cell: ({ row }) => (
        <SwitchAccusationBtn className="mx-auto text-center toggle-custom" />
      ),
    },
    {
      Header: "Quantité",
      accessor: "quantity",
      Cell: ({ row }) => (
        <input type="number" defaultValue={row.original.quantity} />
      ),
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
    {
      Header: "Peine",
      accessor: "sentence",
    },
  ];

  /**
   * Tableau des chef d'accusation
   */
  const tableInstanceRef = React.useRef({});
  const prevBtnRef = React.useRef(<button></button>);
  const nextBtnRef = React.useRef(<button></button>);

  const initTableInstance = (instance) => {
    tableInstanceRef.current = instance;
    tableInstanceRef.current?.canPreviousPage
      ? prevBtnRef.current.removeAttribute("disabled")
      : prevBtnRef.current.setAttribute("disabled", "");

    tableInstanceRef.current?.canNextPage
      ? nextBtnRef.current.removeAttribute("disabled")
      : nextBtnRef.current.setAttribute("disabled", "");
  };

  return (
    <FormContainer className="form-theme-color" onSubmit={handleSubmit(submit)}>
      <RowInputForm>
        <FormControl className="flex">
          <label className="text-center" htmlFor="">
            Lieux
          </label>
          <input type="text" {...register("location")} placeholder="Lieux" />
          <ErrorInputSection errors={errors.location} />
        </FormControl>
        <FormControl className="flex-25">
          <label htmlFor="" className="text-center">
            Entrée cellule
          </label>
          <input
            className="text-center "
            type="time"
            {...register("dateOfEntry")}
            placeholder="Entrée cellule"
          />
          <ErrorInputSection errors={errors.dateOfEntry} />
        </FormControl>
        <FormControl className="flex-25">
          <label htmlFor="" className="text-center">
            Conversion $ -&gt; UP
          </label>
          <div className="d-flex justify-center mt-2">
            <SwitchButton className="mx-auto text-center toggle-custom" />
          </div>
        </FormControl>
      </RowInputForm>
      <FormControl>
        <ChefAccusationInoutSelect
          defaultValue={getValues("infractions")}
          placeholder="Séléctionnez les chef d'accusations"
          onSelected={handleSelectedInfractions}
        />
        <ErrorInputSection errors={errors.infractions} />
      </FormControl>
      <FormControl>
        <div className="d-flex justify-content-end">
          <AccusationTablePaginate
            pageIndex={tableInstanceRef.current?.pageIndex}
            instance={tableInstanceRef.current}
            prevBtnRef={prevBtnRef}
            nextBtnRef={nextBtnRef}
          />
        </div>
        <TabAccusationContainer className="border-theme-color-primary">
          <AccusationsDatatable
            columns={ARREST_REPORT_COLUMNS}
            infractions={watch("infractions") && infractions}
            className="dataTable-theme-color"
            getTablePagingationInstance={initTableInstance}
          />
        </TabAccusationContainer>
      </FormControl>
      <FormControl>
        <ShowTotalAmount up={"00:00:25"} />
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

export default ArrestReportForm;
