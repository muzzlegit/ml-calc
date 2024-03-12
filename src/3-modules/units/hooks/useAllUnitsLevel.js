import usePlayerContext from "utils/context/usePlayerContext.hook";
import useUnitsStore from "../store/unitsStore";
import { UNITS } from "../utils/units.constants";

const useAllUnitsLevel = () => {
  const player = usePlayerContext();
  const { setUnitLevel } = useUnitsStore((state) => state.methods);

  const handleAllUnitLevel = (level) => {
    UNITS.forEach((unit) => {
      setUnitLevel(player, unit, level);
    });
  };

  return handleAllUnitLevel;
};

export default useAllUnitsLevel;
