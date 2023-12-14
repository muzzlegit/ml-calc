import useHeroStore from "modules/hero/store/heroStore";
import { getHeroBranch } from "modules/hero/utils/hero.helpers";
import { nanoid } from "nanoid";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHero = () => {
  const player = usePlayerContext();
  const { setHero, getHero } = useHeroStore((state) => state.methods);

  const assignHero = (heroClass) => {
    setHero(player, { id: nanoid(), class: heroClass });
  };

  const deleteHero = () => {
    setHero(player, null);
  };

  const deleteHeroBranch = (branchName) => {
    const currentHero = getHero(player);
    setHero(player, { ...currentHero, [branchName]: null });
  };

  const assignHeroBranch = (branchName, heroBranch, heroClass) => {
    const currentHero = getHero(player);
    const skills = getHeroBranch(heroClass, heroBranch, currentHero.id);
    setHero(player, { ...currentHero, [branchName]: skills });
  };

  return { assignHero, assignHeroBranch, deleteHero, deleteHeroBranch };
};

export default useHero;
