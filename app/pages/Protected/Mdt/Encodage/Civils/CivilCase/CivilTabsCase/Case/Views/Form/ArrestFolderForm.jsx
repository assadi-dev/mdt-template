import React from "react";
import { ArrestFolderResolver, ArrestFolderValues } from "./formResolver.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  FormControl,
  ModalFooter,
} from "../../../../../../../../../../components/Forms/FormView.styled.jsx";
import ErrorInputSection from "../../../../../../../../../../components/Forms/ErrorInputSection.jsx";
import {
  LawSwitchRowContainer,
  RowInputForm,
  SwitchAccusationBtn,
  TabAccusationContainer,
} from "../../Case.styled.jsx";
import ChefAccusationInoutSelect from "./ChefAccusationInoutSelect.jsx";
import { nominalOptionValues } from "../../../../../../../../../../config/options.js";
import SelectNominal from "./SelectNominal.jsx";
import AccusationTablePaginate from "../../../../../../../../../../components/AccusationsDatatable.jsx/AccusationTablePaginate.jsx";
import AccusationsDatatable from "../../../../../../../../../../components/AccusationsDatatable.jsx/index.jsx";
import ButtonWithLoader from "../../../../../../../../../../components/Button/ButtonWithLoader.jsx";
import ShowTotalAmount from "./ShowTotalAmount.jsx";
import SwitchButton from "../../../../../../../../../../components/Button/SwitchButton.jsx";
import {
  cleanInfractionCollection,
  sumOfAmount,
  sumOfSentences,
  updateInfraction,
} from "../../../../../helpers.jsx";
import { totalHoursMinFormatBySec } from "../../../../../../../../../../services/utils/dateFormat.js";
import AttemptSwitchBtn from "./SwitchBtn/AttemptSwitchBtn.jsx";
import ComplicitySwitchBtn from "./SwitchBtn/ComplicitySwitchBtn.jsx";
import { execDelayed } from "../../../../../../../../../../services/utils/functions.js";
import InputQuantity from "./InputQuantity.jsx";
import TotalSentensesText from "./SwitchBtn/TotalSentensesText.jsx";

const ArrestFolderForm = ({
  defaultValues = ArrestFolderValues,
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
    resolver: yupResolver(ArrestFolderResolver),
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
      const cleanCollection = cleanInfractionCollection(
        getValues("infractions"),
        selected
      );

      setValue("infractions", cleanCollection);
    },
    [getValues("infractions")]
  );

  const TotalAmount = React.useMemo(() => {
    if (!getValues("infractions")) return Number("0.00");
    const sum = sumOfAmount(getValues("infractions"));
    setValue("amount", sum.toFixed(2));
    return sum;
  }, [getValues("infractions")]);

  const TotalSentence = React.useMemo(() => {
    if (!getValues("infractions")) return "00:00";
    const sum = sumOfSentences(getValues("infractions"));
    const toHourMinString = totalHoursMinFormatBySec(sum);
    setValue("sentence", toHourMinString);
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
      accessor: "attempt",
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
        <FormControl className="flex-75">
          <label className="text-center" htmlFor="">
            Lieux
          </label>
          <div className="flex-align input-form">
            <input type="text" {...register("location")} placeholder="Lieux" />
          </div>
          <ErrorInputSection errors={errors.location} />
        </FormControl>
        <FormControl className="flex-25">
          <label htmlFor="" className="text-center">
            Entrée cellule
          </label>
          <div className="flex-align input-form">
            <input
              className="text-center "
              type="time"
              {...register("dateOfEntry")}
              placeholder="Entrée cellule"
            />
          </div>
          <ErrorInputSection errors={errors.dateOfEntry} />
        </FormControl>
      </RowInputForm>

      <LawSwitchRowContainer className="border-theme-color-primary">
        <FormControl className="text-center">
          <label htmlFor="">Droit Miranda</label>
          <SwitchButton className="toggle-custom" />
        </FormControl>
        <FormControl className="text-center">
          <label htmlFor="">Soins</label>
          <SwitchButton className="toggle-custom" />
        </FormControl>
        <FormControl className="text-center">
          <label htmlFor="">Nouriture</label>
          <SwitchButton className="toggle-custom" />
        </FormControl>
        <FormControl className="text-center">
          <label htmlFor="">Avocat</label>
          <SwitchButton className="toggle-custom" />
        </FormControl>
      </LawSwitchRowContainer>

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

export default ArrestFolderForm;
