import useHeroStore from "modules/hero/store/heroStore";
import {
  getHeroImageName,
  getHeroPicture,
} from "modules/hero/utils/hero.helpers";
import { usePlayerStore } from "modules/players";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHeroUnit = () => {
  const player = usePlayerContext();
  const race = usePlayerStore((state) => state[player].race);
  const hero = useHeroStore((state) => state[player].hero);

  const isHero = hero;
  const isMonsters = race === "monsters";

  const graphics = {
    frame: getHeroPicture("heroFrame"),
    hero: isHero
      ? getHeroPicture(getHeroImageName(player, isMonsters))
      : getHeroPicture("backgrounds", race),
  };

  return { isHero, graphics };
};

export default useHeroUnit;
