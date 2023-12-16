import useHeroStore from "modules/hero/store/heroStore";
import {
  getHeroImageName,
  getHeroPicture,
} from "modules/hero/utils/hero.helpers";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHeroPicture = () => {
  const player = usePlayerContext();
  const hero = useHeroStore((state) => state[player].hero);

  const isHero = !(hero == null);
  const graphics = { hero: getHeroPicture(getHeroImageName(player)) };

  return { isHero, graphics };
};

export default useHeroPicture;
