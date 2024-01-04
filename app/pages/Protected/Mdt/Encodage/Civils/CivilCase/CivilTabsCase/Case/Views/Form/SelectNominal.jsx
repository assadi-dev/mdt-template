import React from "react";
import ReactDropdown from "react-dropdown";
import { nominalOptionValues } from "../../../../../../../../../../config/options";

const SelectNominal = ({
  infraction,
  nominalOptions = nominalOptionValues,
  onChange,
  value,
  ...props
}) => {
  const findNominal = nominalOptions.find(
    (nominal) => nominal.value == infraction.nominal
  );

  const DEFAULT_VALUE = findNominal || { value: 1, label: "nominal" };

  const handleChange = (selected) => {
    if (!infraction) return;
    infraction.nominal = Number(selected?.value);

    onChange(infraction);
  };

  return (
    <ReactDropdown
      {...props}
      options={nominalOptionValues}
      className="dropdown-select-custom"
      value={DEFAULT_VALUE}
      onChange={handleChange}
      placeholder={"Selectionner le multiplicateur"}
    />
  );
};

export default SelectNominal;
