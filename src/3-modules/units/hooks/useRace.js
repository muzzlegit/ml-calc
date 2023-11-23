import usePlayerContext from "utils/context/usePlayerContext.hook";
import useUnitsStore from "../store/unitsStore";
import { getRaceName } from "../utils/units.helpers";

const useRace = () => {
  const player = usePlayerContext();
  const setRace = useUnitsStore((state) => state.methods.setRace);
  const race = useUnitsStore((state) => state[player].race);

  const handleRace = (race) => {
    setRace(player, getRaceName(race));
  };

  return { race, handleRace };
};

export default useRace;
