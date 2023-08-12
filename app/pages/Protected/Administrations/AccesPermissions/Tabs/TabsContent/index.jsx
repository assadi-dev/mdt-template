import React from "react";
import { GradesColCOntainer, TabsContentContainer } from "./TabsContent.styled";
import useGradeCategories from "../../hooks/useGradeCategories";

const TabContent = ({ faction }) => {
  const { data } = useGradeCategories(faction);

  return (
    <TabsContentContainer>
      <GradesColCOntainer>
        <ul>
          {data.map((cat) => (
            <li>
              {cat.grades ? cat.name : ""}
              {cat.grades ? cat.grades.map((g) => <p>{g.name}</p>) : ""}{" "}
            </li>
          ))}
        </ul>
      </GradesColCOntainer>
    </TabsContentContainer>
  );
};

export default TabContent;
