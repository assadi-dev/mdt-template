import React from "react";
import SelectAsync from "../../../../../../../../../../components/SelectAsync";
import { useGetCodePenalByCategoryQuery } from "../../../../../../../../../../features/CodePenals/CodePenalApi";

const ChefAccusationInoutSelect = ({
  category = "all",
  defaultValue = [],
  onSelected = () => {},
  ...props
}) => {
  const payload = {
    params: category,
  };
  const { data, isLoading, error } = useGetCodePenalByCategoryQuery(payload);

  const OPTIONS = React.useMemo(() => {
    if (!data) return [];
    return [...data].map((codePenal) => ({
      id: codePenal.id,
      value: codePenal.id,
      label: codePenal.label,
      sentence: codePenal.sentence,
      amount: Number(codePenal.amount),
      quantity: 1,
    }));
  }, [data]);

  return (
    <SelectAsync
      options={OPTIONS}
      {...props}
      isLoading={isLoading}
      isMulti
      closeMenuOnSelect={false}
      defaultValue={defaultValue}
      onChange={onSelected}
    />
  );
};

export default ChefAccusationInoutSelect;
