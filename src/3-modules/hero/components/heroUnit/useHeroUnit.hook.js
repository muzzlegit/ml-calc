import useHeroStore from "modules/hero/store/heroStore";
import {
  getHeroAssetsIcon,
  getHeroPicture,
} from "modules/hero/utils/hero.helpers";
import { usePlayerStore } from "modules/players";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHeroUnit = () => {
  const player = usePlayerContext();
  const race = usePlayerStore((state) => state[player].race);
  const hero = useHeroStore((state) => state[player].hero);

  const isHero = hero;

  const graphics = {
    frame: getHeroAssetsIcon("heroFrame"),
    hero: getHeroPicture(
      hero?.firstBranchName || hero?.secondBranchName || hero?.thirdBranchName,
      race
    ),
  };

  return { isHero, graphics };
};

export default useHeroUnit;
