import React from "react";
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

  return (
    <TabsContentContainer>
      <GradesColContainer className="grade-category-col-separator">
        <ListeGradesCategories gradesCategories={data} />
      </GradesColContainer>
      <PageListColContainer>
        <ListPageItems />
      </PageListColContainer>
    </TabsContentContainer>
  );
};

export default TabContent;
