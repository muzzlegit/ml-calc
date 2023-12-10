import useHeroStore from "modules/hero/store/heroStore";
import {
  getHeroImageName,
  getHeroPicture,
} from "modules/hero/utils/hero.helpers";
import useUnitsStore from "modules/units/store/unitsStore";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHeroUnit = () => {
  const player = usePlayerContext();
  const race = useUnitsStore((state) => state[player].race);
  const hero = useHeroStore((state) => state[player].hero);
  const isHero = hero;

  const graphics = {
    frame: getHeroPicture("heroFrame"),
    hero: isHero
      ? getHeroPicture(getHeroImageName(player))
      : getHeroPicture("backgrounds", race),
  };
  return { isHero, graphics };
};

export default useHeroUnit;
