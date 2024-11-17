import useEventsStore from "eventBus/eventsStore";
import { useBattleplaceStore } from "modules/battleplace";
import usePlayerStore from "modules/players/store/playerStore";
import { RACE } from "modules/players/utils/player.constants";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useRace = () => {
  const player = usePlayerContext();
  const setRace = usePlayerStore((state) => state.methods.setRace);
  const activeRace = usePlayerStore((state) => state[player].race);
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const [options, setOptions] = useState(RACE);
  const race = RACE[activeRace];

  const emit = useEventsStore((state) => state.emit);

  const handleRace = (race) => {
    emit("raceChange", race);
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
