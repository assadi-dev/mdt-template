import React from "react";
import { Tooltip } from "react-tooltip";

const TooltipContent = ({ content }) => {
  return (
    <>
      <span className="label-tooltip" data-tooltip-content={content}>
        {content}
      </span>
      <Tooltip anchorSelect=".label-tooltip" place="bottom" />
    </>
  );
};

export default TooltipContent;
