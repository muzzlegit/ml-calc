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
    const skills = getHeroBranch(player, heroClass, heroBranch, currentHero.id);
    setHero(player, { ...currentHero, [branchName]: skills });
  };

  const replaceHeroSkill = (branchName, newSkillValues) => {
    const currentHero = getHero(player);
    const updatedBranch = currentHero[branchName].map((skill) => {
      return skill.id === newSkillValues.id
        ? { ...skill, ...newSkillValues }
        : skill;
    });
    setHero(player, { ...currentHero, [branchName]: updatedBranch });
  };

  return {
    assignHero,
    assignHeroBranch,
    deleteHero,
    deleteHeroBranch,
    replaceHeroSkill,
  };
};

export default useHero;
