import React, { useEffect, useState } from "react";
import {
  GradesColContainer,
  PageListColContainer,
  TabsContentContainer,
} from "./TabsContent.styled";
import useGradeCategories from "../../hooks/useGradeCategories";
import ListeGradesCategories from "./ListeGradesCategories";
import ListPageItems from "./ListPageItems";

const TabContent = ({ faction }) => {
  const { data } = useGradeCategories(faction);
  const [gradeSelected, setGradSelected] = useState();

  useEffect(() => {
    if (!data) return;
    let firstCategoryGrade = data[0];

    if (!gradeSelected) {
      firstCategoryGrade
        ? setGradSelected(
            (current) => (current = firstCategoryGrade.grades[0].id)
          )
        : null;
    }
  }, [data, faction]);

  const handleGradeSelected = (idGrade) => {
    if (!gradeSelected) return;
    setGradSelected((current) => (current = idGrade));
  };
  return (
    <TabsContentContainer>
      <GradesColContainer className="grade-category-col-separator">
        <ListeGradesCategories
          gradesCategories={data}
          onGradeSelected={handleGradeSelected}
          gradeSelected={gradeSelected}
        />
      </GradesColContainer>
      <PageListColContainer>
        <ListPageItems idGrade={gradeSelected} />
      </PageListColContainer>
    </TabsContentContainer>
  );
};

export default TabContent;
