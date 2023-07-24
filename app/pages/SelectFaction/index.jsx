import React, { useLayoutEffect, useState } from "react";
import {
  SelectFactionIndicatorCard,
  SelectFactionRow,
  SelectFactionsWrapper,
  SelectFactionsheader,
  TitleHeaderFaction,
} from "./SelectFaction.styled";
import { APP_NAME } from "../../config/constantes";
import FactionItems from "./FactionItems";
import { listsFactions } from "../../config/factions";
import IndicatorFaction from "./IndicatorFaction";

const SelectFaction = () => {
  const [selectedFaction, useSelectedFaction] = useState({
    short_name: listsFactions[0].short_name,
    full_name: listsFactions[0].full_name,
  });

  const handleSelectFaction = (data) => {
    const { short_name, full_name } = data;
    useSelectedFaction((current) => ({ ...current, short_name, full_name }));
  };

  useLayoutEffect(() => {
    document.body.classList.add(selectedFaction.short_name);

    return () => {
      document.body.classList.remove(selectedFaction.short_name);
    };
  }, [selectedFaction.short_name]);

  return (
    <SelectFactionsWrapper>
      <SelectFactionsheader>
        <TitleHeaderFaction>{APP_NAME}</TitleHeaderFaction>
      </SelectFactionsheader>
      <SelectFactionRow>
        {listsFactions ? (
          listsFactions.map((f, i) => (
            <FactionItems
              key={f.id}
              faction={f}
              index={i}
              onSelectFaction={handleSelectFaction}
            />
          ))
        ) : (
          <FactionItems />
        )}
      </SelectFactionRow>
      <IndicatorFaction selectedFaction={selectedFaction} />
    </SelectFactionsWrapper>
  );
};

export default SelectFaction;
