import React from "react";
import SelectAsync from "../../../../../../../../../../components/SelectAsync";
import {
  useGetCodePenalByCategoryQuery,
  useGetGroupedCodePenalByCategoryQuery,
} from "../../../../../../../../../../features/CodePenals/CodePenalApi";
import {
  BadgeGrouedOption,
  GroupedOptionHeaderContainer,
  OptionBodyContainer,
} from "../../Case.styled";
import { CategoryColor } from "./helpers";
import tinycolor from "tinycolor2";

const ChefAccusationInoutSelect = ({
  isGrouped = false,
  category = "all",
  defaultValue = [],
  onSelected = () => {},
  ...props
}) => {
  const payload = {
    params: { category },
  };

  const { data, isLoading, error } =
    isGrouped == true
      ? useGetGroupedCodePenalByCategoryQuery(payload)
      : useGetCodePenalByCategoryQuery(payload);

  const OPTIONS = React.useMemo(() => {
    if (!data) return [];
    return [...data].map((codePenal) => ({
      id: codePenal.id,
      category: codePenal.category,
      value: codePenal.id,
      label: codePenal.label,
      sentence: codePenal.sentence,
      amount: Number(codePenal.amount),
      attempt: 1,
      complicity: 1,
      quantity: 1,
      nominal: 1,
    }));
  }, [data, isLoading]);

  const GROUPED_OPTION = React.useMemo(() => {
    if (!data) return [];
    const unGrouped = [];
    const grouped = [...data].map((codePenal) => {
      const cpOption = codePenal?.options?.map((option) => {
        const current = {
          id: option.id,
          category: option.category,
          value: option.id,
          label: option.label,
          sentence: option.sentence,
          amount: Number(option.amount),
          attempt: 1,
          complicity: 1,
          quantity: 1,
          nominal: 1,
        };
        unGrouped.push(current);
        return current;
      });

      return {
        ...codePenal,
        options: cpOption,
      };
    });

    return unGrouped;
  }, [data, isLoading]);

  const LIST_OPTIONS = isGrouped == true ? GROUPED_OPTION : OPTIONS;

  const formatGroupLabel = (data) => (
    <GroupedOptionHeaderContainer>{data.label}</GroupedOptionHeaderContainer>
  );

  /*   const formatOptionLabel = (data) => {
    return <OptionBodyContainer>{data.label}</OptionBodyContainer>;
  }; */

  const colourStyle = {
    option: (basicStyle, state) => {
      const color = tinycolor(CategoryColor[state.data.category]);

      return {
        ...basicStyle,
        backgroundColor: `${color.lighten(25).toString()} !important`,
        ":hover": {
          backgroundColor: `${color.darken(28).toString()} !important`,
          color: `${color.isLight() ? "#000" : "inherit"} !important`,
        },
      };
    },
  };

  return (
    <SelectAsync
      options={LIST_OPTIONS}
      {...props}
      isLoading={isLoading}
      isMulti
      closeMenuOnSelect={false}
      defaultValue={defaultValue}
      onChange={onSelected}
      formatGroupLabel={formatGroupLabel}
      styles={colourStyle}
    />
  );
};

export default ChefAccusationInoutSelect;
