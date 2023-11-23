import { useCallback, useEffect } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useUnitsStore from "../store/unitsStore";
import { getUnitData } from "../utils/units.helpers";

const useUnit = (unitName) => {
  const player = usePlayerContext();
  const setUnit = useUnitsStore((state) => state.methods.setUnit);
  const unit = useUnitsStore((state) => state[player][unitName]);
  const race = useUnitsStore((state) => state[player].race);
  const attackIndex = useUnitsStore((state) => state[player].attackIndex);

  const { level } = unit;

  const handleUnitAmount = (amount) => {
    if (isNaN(Number(amount))) return;
    setUnit(player, unitName, { ...unit, amount: Number(amount) });
  };

  const handleUnitLevel = useCallback(() => {
    const formattedLevel =
      (race === "monsters" && level === 3) || level === 4 ? 1 : level + 1;
    setUnit(player, unitName, { ...unit, level: formattedLevel });
  }, [level, player, race, setUnit, unit, unitName]);

  useEffect(() => {
    const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
    setUnit(
      player,
      unitName,
      getUnitData({
        race,
        unit: unitName,
        level: formattedLevel,
        attackIndex: attackIndex,
        initial: false,
      })
    );
  }, [attackIndex, level, player, race, setUnit, unitName]);

  return { unit, race, handleUnitLevel, handleUnitAmount };
};

export default useUnit;
