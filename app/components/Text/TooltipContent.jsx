import React from "react";
import { Tooltip } from "react-tooltip";

const TooltipContent = ({ content, tooltipClassname = "" }) => {
  return (
    <>
      <span className="label-tooltip" data-tooltip-content={content}>
        {content}
      </span>
      <Tooltip
        className={tooltipClassname}
        anchorSelect=".label-tooltip"
        place="bottom"
      />
    </>
  );
};

export default TooltipContent;
