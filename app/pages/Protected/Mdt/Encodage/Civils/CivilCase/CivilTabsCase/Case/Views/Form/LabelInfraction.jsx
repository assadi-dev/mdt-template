import React from "react";
import { Tooltip } from "react-tooltip";
import TooltipContent from "../../../../../../../../../../components/Text/TooltipContent";

const LabelInfraction = ({ content = "" }) => {
  return (
    <>
      <TooltipContent content={content} />
    </>
  );
};

export default LabelInfraction;
