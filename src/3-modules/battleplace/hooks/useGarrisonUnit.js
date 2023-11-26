import { unitsNames } from "utils/types/types";
import useBattleplaceStore from "../store/battleplaceStore";

const useGarrisonUnit = (unitName) => {
  const unit = useBattleplaceStore((state) => state.garrison[unitName]);
  const race = useBattleplaceStore((state) => state.race);
  const { setGarrisonUnitAmount } = useBattleplaceStore(
    (state) => state.methods
  );

  const { amount } = unit;
  const isActive = amount > 0;

  const handleGarrisonUnitAmount = (amount) => {
    if (isNaN(Number(amount))) return;
    setGarrisonUnitAmount(unitName, Number(amount));
  };

  return { unit, race, isActive, handleGarrisonUnitAmount };
};

export default useGarrisonUnit;

useGarrisonUnit.propTypes = {
  unitName: unitsNames,
};
