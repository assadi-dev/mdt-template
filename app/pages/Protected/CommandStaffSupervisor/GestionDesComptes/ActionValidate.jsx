import React from "react";
import { TableAction } from "../../../../components/DataTable/DataTable.styled";
import SwitchButton from "../../../../components/Button/SwitchButton";

const ActionValidate = ({ agentData, onValidateAction }) => {
  const isValidate = agentData?.isValidate;
  const handleSwitch = (e) => {
    let checked = e.target.checked;
    onValidateAction && onValidateAction(checked, agentData);
  };

  return (
    <TableAction>
      <SwitchButton
        className="toggle-custom"
        defaultChecked={isValidate}
        onChange={handleSwitch}
      />
    </TableAction>
  );
};

export default ActionValidate;
