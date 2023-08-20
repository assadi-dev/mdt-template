import React, { useEffect, useMemo, useState } from "react";
import { ErrorSection } from "./FormView.styled";
import { motion, AnimatePresence } from "framer-motion";
import useGradeCategoriesOptions from "../../../../../hooks/useGradeCategoriesOption";
import SpinnerButton from "../../../../../components/Shared/Loading/SpinnerButton";

const InputGradesCategories = ({
  faction,
  register,
  setValue,
  errors,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const listOfgradesCategories = useGradeCategoriesOptions(faction);

  useEffect(() => {
    if (!faction) return;

    if (listOfgradesCategories.status == "fulfilled") {
      setLoading((current) => (current = false));
    }
    return () => {
      setLoading((current) => (current = true));
    };
  }, [faction, listOfgradesCategories.status]);

  const gradeCategoriesOption = useMemo(() => {
    if (!listOfgradesCategories.data) return [];

    let result = [...listOfgradesCategories.data].map((gradeCategory) => ({
      id: gradeCategory.id,
      label: gradeCategory.name,
      value: `/api/grade_categories/${gradeCategory.id}`,
    }));

    result[0] && setValue && setValue("gradeCategory", result[0].value);

    return result;
  }, [listOfgradesCategories.data, faction]);

  return (
    <>
      <label htmlFor="gradeCategory" className="row-label">
        Categorie {loading ? <SpinnerButton /> : ""}
      </label>

      <select
        type="text"
        {...register("gradeCategory", { required: true })}
        {...props}
        defaultValue={
          gradeCategoriesOption.length > 0 ? gradeCategoriesOption[0].value : ""
        }
      >
        {gradeCategoriesOption.length > 0 &&
          gradeCategoriesOption.map((gradeCategory) => (
            <option key={gradeCategory.id} value={gradeCategory.value}>
              {gradeCategory.label}
            </option>
          ))}{" "}
      </select>
      <ErrorSection>
        <AnimatePresence>
          {errors.gradeCategory && (
            <motion.small className="text-error">
              Veuillez définir sa categorie
            </motion.small>
          )}
        </AnimatePresence>
      </ErrorSection>
    </>
  );
};

export default InputGradesCategories;
