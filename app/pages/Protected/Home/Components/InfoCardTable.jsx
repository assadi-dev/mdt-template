import React from "react";
import {
  InfoCardTableContainer,
  InfoContentTable,
  InfoHeaderTable,
} from "../Home.styled";

const InfoCardTable = ({ title, children, ...props }) => {
  return (
    <InfoCardTableContainer className="theme-dashboard-card-table" {...props}>
      <InfoHeaderTable className="card-table-header">{title} </InfoHeaderTable>
      <InfoContentTable>{children}</InfoContentTable>
    </InfoCardTableContainer>
  );
};

export default InfoCardTable;
