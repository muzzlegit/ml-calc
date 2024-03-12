import usePlayerContext from "utils/context/usePlayerContext.hook";
import useUnitsStore from "../store/unitsStore";
import { UNITS } from "../utils/units.constants";

const useResetUnitsAmount = () => {
  const player = usePlayerContext();
  const { setUnitAmount } = useUnitsStore((state) => state.methods);

  const resetAllUnitsAmount = (specificPlayer) => {
    UNITS.forEach((unit) => {
      setUnitAmount(specificPlayer ?? player, unit, 0);
    });
  };

  return resetAllUnitsAmount;
};

export default useResetUnitsAmount;
