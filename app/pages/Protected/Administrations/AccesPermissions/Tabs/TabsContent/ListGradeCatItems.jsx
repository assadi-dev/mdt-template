import React from "react";
import { ListGradeCatItemsContainer } from "./TabsContent.styled";
import { AnimatePresence, motion } from "framer-motion";
import { AnimationGradeItem } from "../../Animation";

const ListGradeCatItems = ({ category }) => {
  return (
    <ListGradeCatItemsContainer>
      <h3 className="grade-category-name">{category.name} </h3>
      <ul>
        <AnimatePresence>
          {category.grades
            ? category.grades.map((grade, index) => (
                <motion.li
                  className="listGradeItem"
                  key={grade.id}
                  variants={AnimationGradeItem}
                  initial="hidden"
                  animate="show"
                  custom={index}
                >
                  <span> {grade.name}</span>
                </motion.li>
              ))
            : null}
        </AnimatePresence>
      </ul>
    </ListGradeCatItemsContainer>
  );
};

export default ListGradeCatItems;
