import useHeroStore from "modules/hero/store/heroStore";
import { getHeroPicture } from "modules/hero/utils/hero.helpers";
import { usePlayerStore } from "modules/players";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHeroPicture = () => {
  const player = usePlayerContext();
  const race = usePlayerStore((state) => state[player].race);
  const hero = useHeroStore((state) => state[player].hero);

  const isHero = !(hero == null);
  const graphics = {
    hero: getHeroPicture(
      hero?.firstBranchName ?? hero?.secondBranchName ?? hero?.thirdBranchName,
      race
    ),
  };

  return { isHero, graphics };
};

export default useHeroPicture;
