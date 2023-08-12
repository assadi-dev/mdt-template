import React from "react";
import { GradesListeContainer } from "./TabsContent.styled";
import ListGradeCatItems from "./ListGradeCatItems";

const ListeGradesCategories = ({ gradesCategories = [] }) => {
  return (
    <GradesListeContainer>
      {gradesCategories &&
        gradesCategories.map((gradeCat) => (
          <ListGradeCatItems key={gradeCat.id} category={gradeCat} />
        ))}
    </GradesListeContainer>
  );
};

export default ListeGradesCategories;
