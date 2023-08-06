import React from "react";
import { EmblemMini, SelectFactionIndicatorCard } from "./SelectFaction.styled";
import { AnimatePresence, motion } from "framer-motion";
import { indicatorVariants } from "./Animation";
import { factionsCollections } from "../../config/factions";

const IndicatorFaction = ({ selectedFaction }) => {
  if (!selectedFaction) return;
  const { short_name } = selectedFaction;
  const title = factionsCollections[short_name].full_name;
  const emblem = factionsCollections[short_name].emblem;

  return (
    <SelectFactionIndicatorCard>
      {selectedFaction && (
        <motion.div
          variants={indicatorVariants}
          initial="hidden"
          animate="show"
          className="row-selected-faction"
        >
          <EmblemMini img={emblem} />
          <p>{title}</p>
          <EmblemMini img={emblem} />
        </motion.div>
      )}
    </SelectFactionIndicatorCard>
  );
};

export default IndicatorFaction;
