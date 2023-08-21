import React, { useEffect, useState, useMemo } from "react";
import {
  ErrorSection,
  FormContainer,
  HeaderModal,
  ModalContainer,
  ModalFooter,
  SubmitButton,
} from "./FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";
import { motion, AnimatePresence } from "framer-motion";
import InputGradesCategories from "./InputGradesCategories";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchOnegGades, putGrades } from "../../helper";
import { editGrade } from "../../../../../features/Grades/Grades.slice";
import SpinnerButton from "../../../../../components/Shared/Loading/SpinnerButton";

const FormEditGrade = ({ data, onCloseModal, ...props }) => {
  const [process, setProcess] = useState(false);
  const toggleprocess = () => {
    setProcess((current) => (current = !current));
  };

  const [defaultgradeCategory, setDefaultGradeCategory] = useState("");

  const dispatch = useDispatch();

  const defaultValues = {
    name: "",
    faction: "",
    category: "",
    gradeCategory: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const initDefaultValues = async (signal) => {
    try {
      const res = await fetchOnegGades(data.id, signal);
      const { name, gradeCategory } = res.data;

      setValue("name", name);
      setValue("faction", data.faction);
      setValue("gradeCategory", gradeCategory);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!data.id) return;

    const controller = new AbortController();
    const signal = controller.signal;
    initDefaultValues(signal);
    return () => {
      controller.abort();
    };
  }, [data.id]);

  const submitValues = async (values) => {
    toggleprocess();

    try {
      const { name, faction, gradeCategory, category } = values;
      const dataToDispatch = { id: data.id, name, faction, category };
      dispatch(editGrade(dataToDispatch));
      await putGrades(data.id, { name, gradeCategory, category });
      onCloseModal();
    } catch (error) {}

    toggleprocess();
  };

  return (
    <ModalContainer {...props}>
      <HeaderModal>
        <h2 className="form-title"> modifier </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormContainer
        className="form-theme-color"
        onSubmit={handleSubmit(submitValues)}
      >
        <div className="form-control">
          <label htmlFor="name">Nom</label>

          <input
            autoFocus
            type="text"
            {...register("name", { required: true })}
            placeholder="EX: OFFICIER I,SENIOR LEAD OFFICER,LIEUTENANT..."
          />
          <ErrorSection>
            <AnimatePresence>
              {errors.name && (
                <motion.small className="text-error">
                  Veuillez entrer le nom
                </motion.small>
              )}
            </AnimatePresence>
          </ErrorSection>
        </div>
        <div className="form-control">
          <label htmlFor="faction">Faction</label>

          <select type="text" {...register("faction", { required: true })}>
            <option value="lspd">LSPD</option>
            <option value="bcso"> BCSO</option>
            <option value="doj">DOJ</option>
          </select>
          <ErrorSection>
            <AnimatePresence>
              {errors.faction && (
                <motion.small className="text-error">
                  Veuillez selectionner une faction
                </motion.small>
              )}
            </AnimatePresence>
          </ErrorSection>
        </div>

        <div className="form-control">
          {watch("faction") && (
            <InputGradesCategories
              register={register}
              faction={getValues("faction")}
              errors={errors}
              setValue={setValue}
              isEditMode={true}
              defaultGradeCategory={getValues("gradeCategory")}
            />
          )}
        </div>

        <ModalFooter>
          <SubmitButton className="bg-btn-theme-color" type="submit">
            Enregistrer
            {process && <SpinnerButton />}
          </SubmitButton>
        </ModalFooter>
      </FormContainer>
    </ModalContainer>
  );
};

export default FormEditGrade;
