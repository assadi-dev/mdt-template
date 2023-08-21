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
  isEditMode = false,
  defaultGradeCategory,

  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const listOfgradesCategories = useGradeCategoriesOptions(faction);

  const handleChageGradeCategory = (e) => {
    const value = e.target.value;
    if (!gradeCategoriesOption) return;
    let findCategory = gradeCategoriesOption.find((cat) => cat.value == value);
    setValue("category", findCategory.label);
  };

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
    let result = [];
    result = [...listOfgradesCategories.data].map((gradeCategory) => ({
      id: gradeCategory.id,
      label: gradeCategory.name,
      value: `/api/grade_categories/${gradeCategory.id}`,
    }));

    if (defaultGradeCategory && result.length > 0) {
      let findGradeCat = result.find(
        (gradeCat) => gradeCat.value == defaultGradeCategory
      );
      setValue("category", findGradeCat.label);
    } else if (result.length > 0) {
      result[0] && setValue && setValue("gradeCategory", result[0].value);
      result[0] && setValue && setValue("category", result[0].label);
    }

    return result;
  }, [listOfgradesCategories.data, faction]);

  return (
    <>
      <label htmlFor="gradeCategory" className="row-label">
        Categorie {loading ? <SpinnerButton /> : ""}
      </label>

      {gradeCategoriesOption.length > 0 && (
        <select
          type="text"
          {...register("gradeCategory", { required: true })}
          {...props}
          onChange={handleChageGradeCategory}
        >
          {gradeCategoriesOption.length > 0
            ? gradeCategoriesOption.map((gradeCategory) => (
                <option key={gradeCategory.id} value={gradeCategory.value}>
                  {gradeCategory.label}
                </option>
              ))
            : null}{" "}
        </select>
      )}
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
