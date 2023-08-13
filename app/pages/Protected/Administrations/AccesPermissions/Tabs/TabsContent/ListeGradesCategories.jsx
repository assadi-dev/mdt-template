import React from "react";
import { GradesListeContainer } from "./TabsContent.styled";
import ListGradeCatItems from "./ListGradeCatItems";

const ListeGradesCategories = ({ gradesCategories = [], onGradeSelected }) => {
  return (
    <GradesListeContainer>
      {gradesCategories &&
        gradesCategories.map((gradeCat) => (
          <ListGradeCatItems
            key={gradeCat.id}
            category={gradeCat}
            onGradSelected={onGradeSelected}
          />
        ))}
    </GradesListeContainer>
  );
};

export default ListeGradesCategories;
