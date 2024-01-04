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
import { RowInputForm, TabAccusationContainer } from "../../Case.styled";
import ChefAccusationInoutSelect from "./ChefAccusationInoutSelect";
import { nominalOptionValues } from "../../../../../../../../../../config/options";
import SelectNominal from "./SelectNominal";
import AccusationTablePaginate from "../../../../../../../../../../components/AccusationsDatatable.jsx/AccusationTablePaginate";
import AccusationsDatatable from "../../../../../../../../../../components/AccusationsDatatable.jsx";
import ButtonWithLoader from "../../../../../../../../../../components/Button/ButtonWithLoader";
import ShowTotalAmount from "./ShowTotalAmount";
import SwitchButton from "../../../../../../../../../../components/Button/SwitchButton.jsx";
import {
  sumOfAmount,
  sumOfSentences,
  updateInfraction,
} from "../../../../../helpers.jsx";
import InputQuantity from "./InputQuantity.jsx";
import AttemptSwitchBtn from "./SwitchBtn/AttemptSwitchBtn.jsx";
import ComplicitySwitchBtn from "./SwitchBtn/ComplicitySwitchBtn.jsx";
import { execDelayed } from "../../../../../../../../../../services/utils/functions.js";
import TotalSentensesText from "./SwitchBtn/TotalSentensesText.jsx";
import { totalHoursMinFormatBySec } from "../../../../../../../../../../services/utils/dateFormat.js";

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
    defaultValues,
    resolver: yupResolver(ArrestReportResolver),
  });

  const infractions = getValues("infractions");

  const handleChangeInput = React.useCallback(
    (infraction) => {
      const updatedCollection = updateInfraction(infraction, infractions);
      const callback = () => setValue("infractions", updatedCollection);
      execDelayed(callback, 600);
    },
    [getValues("infractions")]
  );

  const handleSelectedInfractions = React.useCallback(
    (selected) => {
      setValue("infractions", selected);
    },
    [getValues("infractions")]
  );

  const TotalAmount = React.useMemo(() => {
    if (!getValues("infractions")) return Number("0.00");
    const sum = sumOfAmount(getValues("infractions"));
    return sum;
  }, [getValues("infractions")]);

  const TotalSentence = React.useMemo(() => {
    if (!getValues("infractions")) return "00:00";

    const sum = sumOfSentences(getValues("infractions"));

    return totalHoursMinFormatBySec(sum);
  }, [getValues("infractions")]);

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
        <AttemptSwitchBtn
          infraction={row.original}
          onChange={handleChangeInput}
        />
      ),
    },
    {
      Header: "Complicité",
      accessor: "complicity",
      Cell: ({ row }) => (
        <ComplicitySwitchBtn
          infraction={row.original}
          onChange={handleChangeInput}
        />
      ),
    },
    {
      Header: "Quantité",
      accessor: "quantity",
      Cell: ({ row }) => (
        <InputQuantity infraction={row.original} onChange={handleChangeInput} />
      ),
    },
    {
      Header: "Amende",
      accessor: "",
      Cell: ({ row }) => {
        return (
          <SelectNominal
            infraction={row.original}
            nominalOptions={nominalOptionValues}
            onChange={handleChangeInput}
          />
        );
      },
    },
    {
      Header: "Peine",
      accessor: "sentence",
      Cell: ({ row }) => <TotalSentensesText infraction={row.original} />,
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
          <div className="flex-align input-form ">
            <input type="text" {...register("location")} placeholder="Lieux" />
          </div>
          <ErrorInputSection errors={errors.location} />
        </FormControl>
        <FormControl className="flex-25">
          <label htmlFor="" className="text-center">
            Entrée cellule
          </label>
          <div className="flex-align input-form ">
            <input
              className="text-center "
              type="time"
              {...register("dateOfEntry")}
              placeholder="Entrée cellule"
            />
          </div>
          <ErrorInputSection errors={errors.dateOfEntry} />
        </FormControl>
        <FormControl className="flex-25">
          <label htmlFor="" className="text-center">
            Conversion $ -&gt; UP
          </label>
          <div className="flex-align input-form ">
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
        <ShowTotalAmount amount={TotalAmount} up={TotalSentence} />
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
