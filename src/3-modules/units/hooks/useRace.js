import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import { useShallow } from "zustand/react/shallow";
import useUnitsStore from "../store/unitsStore";
import { RACE } from "../utils/units.constants";

const useRace = () => {
  const player = usePlayerContext();
  const setRace = useUnitsStore(useShallow((state) => state.methods.setRace));
  const activeRace = useUnitsStore(useShallow((state) => state[player].race));
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const [options, setOptions] = useState(RACE);
  const race = RACE[activeRace];

  const handleRace = (race) => {
    setRace(player, race);
  };

  useEffect(() => {
    const { monsters, ...rest } = RACE;
    setOptions(
      battleplace === "castle" && player === "mainDefender" ? rest : RACE
    );
    if (
      battleplace === "castle" &&
      activeRace === "monsters" &&
      player === "mainDefender"
    )
      setRace(player, "demon");
  }, [activeRace, battleplace, player, setRace]);

  return { race, options, handleRace };
};

export default useRace;
