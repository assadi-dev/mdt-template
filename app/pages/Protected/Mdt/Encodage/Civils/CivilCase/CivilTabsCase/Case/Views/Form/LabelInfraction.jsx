import React from "react";
import { Tooltip } from "react-tooltip";

const LabelInfraction = ({ content = "" }) => {
  return (
    <>
      <span className="label-tooltip" data-tooltip-content={content}>
        {content}
      </span>
      <Tooltip anchorSelect=".label-tooltip" place="bottom" />
    </>
  );
};

export default LabelInfraction;
