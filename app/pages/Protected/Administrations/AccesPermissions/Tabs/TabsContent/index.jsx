import React from "react";
import { GradesColCOntainer, TabsContentContainer } from "./TabsContent.styled";
import useGradeCategories from "../../hooks/useGradeCategories";
import ListeGradesCategories from "./ListeGradesCategories";

const TabContent = ({ faction }) => {
  const { data } = useGradeCategories(faction);

  return (
    <TabsContentContainer>
      <GradesColCOntainer>
        <ul>
          {data.map((categories) => (
            <ListeGradesCategories gradesCategories={categories} />
          ))}
        </ul>
      </GradesColCOntainer>
    </TabsContentContainer>
  );
};

export default TabContent;
