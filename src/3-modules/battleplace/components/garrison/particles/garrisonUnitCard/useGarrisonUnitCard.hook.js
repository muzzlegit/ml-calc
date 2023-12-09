import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { getUnitData } from "modules/units/utils/units.helpers";
import { useEffect } from "react";
import { unitsNames } from "utils/types/types";

const useGarrisonUnitCard = (unitName) => {
  const unit = useBattleplaceStore((state) => state.garrison[unitName]);
  const attackIndex = useBattleplaceStore((state) => state.attackIndex);
  const { setGarrisonUnit, setGarrisonUnitAmount } = useBattleplaceStore(
    (state) => state.methods
  );

  const race = "monsters";
  const { amount } = unit;
  const isActive = amount > 0;

  const handleGarrisonUnitAmount = (amount) => {
    if (isNaN(Number(amount))) return;
    setGarrisonUnitAmount(unitName, Number(amount));
  };

  useEffect(() => {
    setGarrisonUnit(
      unitName,
      getUnitData({
        race,
        unit: unitName,
        level: 3,
        attackIndex: attackIndex,
        initial: false,
      })
    );
  }, [attackIndex, setGarrisonUnit, unitName]);

  return { unit, race, isActive, handleGarrisonUnitAmount };
};

export default useGarrisonUnitCard;

useGarrisonUnitCard.propTypes = {
  unitName: unitsNames,
};
