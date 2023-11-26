import usePlayerContext from "utils/context/usePlayerContext.hook";
import { useShallow } from "zustand/react/shallow";
import useUnitsStore from "../store/unitsStore";

const useRace = () => {
  const player = usePlayerContext();
  const setRace = useUnitsStore(useShallow((state) => state.methods.setRace));
  const race = useUnitsStore(useShallow((state) => state[player].race));

  const handleRace = (race) => {
    setRace(player, race);
  };

  return { race, handleRace };
};

export default useRace;
