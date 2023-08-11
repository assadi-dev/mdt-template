import React from "react";
import { GradesColCOntainer, TabsContentContainer } from "./TabsContent.styled";

const TabContent = ({ faction }) => {
  return (
    <TabsContentContainer>
      <GradesColCOntainer>
        <p>{faction}</p>
      </GradesColCOntainer>
    </TabsContentContainer>
  );
};

export default TabContent;
