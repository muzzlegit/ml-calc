import { usePlayerStore } from "modules/players";
import useAllUnitsLevel from "modules/units/hooks/useAllUnitsLevel";
import useUnitsStore from "modules/units/store/unitsStore";
import { UNIT_LEVELS } from "modules/units/utils/units.constants";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useUnitsLevelSelect = () => {
  const player = usePlayerContext();
  const [activeLevel, setActiveLevel] = useState(3);
  const race = usePlayerStore((state) => state[player].race);
  const units = useUnitsStore((state) => state[player]);
  const handleAllUnitLevel = useAllUnitsLevel();

  const levels = race === "monsters" ? UNIT_LEVELS.slice(0, -1) : UNIT_LEVELS;

  const handleActiveLevel = (level) => {
    setActiveLevel(level);
    handleAllUnitLevel(level);
  };

  useEffect(() => {
    const count = {};
    for (const key in units) {
      const { level } = units[key];
      if (count[level]) {
        count[level]++;
        if (count[level] >= 8) {
          setActiveLevel(level);
          return;
        }
      } else {
        count[level] = 1;
      }
    }
    setActiveLevel(0);
  }, [units]);

  return { levels, activeLevel, handleActiveLevel };
};

export default useUnitsLevelSelect;
