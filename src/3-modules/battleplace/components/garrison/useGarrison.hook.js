import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { UNITS } from "modules/units/utils/units.constants";

const useGarrison = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const isActive = battleplace === "castle";

  const unitsList = UNITS;

  return { unitsList, isActive };
};

export default useGarrison;
