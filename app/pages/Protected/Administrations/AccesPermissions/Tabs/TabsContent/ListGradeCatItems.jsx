import React from "react";
import {
  GradeCategoryListContainer,
  ListGradeCatItemsContainer,
} from "./TabsContent.styled";
import { AnimatePresence, motion } from "framer-motion";
import { AnimationGradeItem } from "../../Animation";

const ListGradeCatItems = ({ category, gradeSelected, onGradSelected }) => {
  const handeClick = (data) => {
    onGradSelected(data);
  };

  return (
    <ListGradeCatItemsContainer>
      <h3 className="grade-category-name">{category.name} </h3>
      <GradeCategoryListContainer>
        <AnimatePresence>
          {category.grades
            ? category.grades.map((grade, index) => (
                <motion.li
                  className={`listGradeItem ${
                    gradeSelected == grade.id ? "listGradeItem_selected" : ""
                  }`}
                  key={grade.id}
                  variants={AnimationGradeItem}
                  initial="hidden"
                  animate="show"
                  custom={index}
                  onClick={() => handeClick(grade.id)}
                >
                  <span> {grade.name}</span>
                </motion.li>
              ))
            : null}
        </AnimatePresence>
      </GradeCategoryListContainer>
    </ListGradeCatItemsContainer>
  );
};

export default ListGradeCatItems;
