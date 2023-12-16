import useHeroStore from "modules/hero/store/heroStore";
import {
  getHeroImageName,
  getHeroPicture,
} from "modules/hero/utils/hero.helpers";
import { usePlayerStore } from "modules/players";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHeroPicture = () => {
  const player = usePlayerContext();
  const race = usePlayerStore((state) => state[player].race);
  const hero = useHeroStore((state) => state[player].hero);

  const isMonsters = race === "monsters";
  const isHero = !(hero == null);
  const graphics = {
    hero: getHeroPicture(getHeroImageName(player, isMonsters)),
  };

  return { isHero, graphics };
};

export default useHeroPicture;
