import useEventsStore from "eventBus/eventsStore";
import { usePlayerStore } from "modules/players";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useHeroStore from "../store/heroStore";

const useHeroHandlers = () => {
  const player = usePlayerContext();
  const { getRace } = usePlayerStore((state) => state.methods);
  const { getHero } = useHeroStore((state) => state.methods);
  const { setHero } = useHeroStore((state) => state.methods);
  const unsubscribe = useEventsStore((state) => state.unsubscribe);

  const raceChangeHandler = (race) => {
    console.log("%c handler", "background-color: blue", race);
    if (!getHero(player)) return;
    const currentRace = getRace(player);

    if (
      (currentRace === "monsters" && race !== "monsters") ||
      (currentRace !== "monsters" && race === "monsters")
    ) {
      setHero(player, null);
      unsubscribe({ event: "raceChange", id: "1" });
    }
  };

  return { raceChangeHandler };
};

export default useHeroHandlers;
