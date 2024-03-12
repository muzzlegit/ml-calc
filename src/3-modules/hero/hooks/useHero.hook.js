import useHeroStore from "modules/hero/store/heroStore";
import { getHeroBranch } from "modules/hero/utils/hero.helpers";
import { nanoid } from "nanoid";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useHero = () => {
  const player = usePlayerContext();
  const { setHero, getHero } = useHeroStore((state) => state.methods);

  const { buffsProvider } = useBuffsProvider();

  const assignHero = (heroClass) => {
    applyHeroBuffs("delete");
    setHero(player, { id: nanoid(), class: heroClass });
  };

  const deleteHero = (specificPlayer) => {
    applyHeroBuffs("delete");
    setHero(specificPlayer ?? player, null);
  };

  const deleteHeroBranch = (branchName) => {
    applyHeroBranchBuffs(branchName, "delete");
    const currentHero = getHero(player);
    setHero(player, {
      ...currentHero,
      [branchName + "Name"]: null,
      [branchName]: null,
    });
  };

  const assignHeroBranch = (branchName, heroBranch, heroClass) => {
    const currentHero = getHero(player);
    applyHeroBranchBuffs(branchName, "delete");
    const skills = getHeroBranch(player, heroClass, heroBranch, currentHero.id);
    setHero(player, {
      ...currentHero,
      [branchName + "Name"]: heroBranch,
      [branchName]: skills,
    });
    applyHeroBranchBuffs(branchName);
  };

  const replaceHeroSkill = (branchName, newSkillValues) => {
    const currentHero = getHero(player);
    const updatedBranch = currentHero[branchName].map((skill) => {
      return skill.id === newSkillValues.id
        ? { ...skill, ...newSkillValues }
        : skill;
    });
    setHero(player, { ...currentHero, [branchName]: updatedBranch });
    replaceSkillBuff(
      branchName,
      newSkillValues.id,
      !newSkillValues.level
        ? "delete"
        : newSkillValues.level === 1
        ? "add"
        : "replace"
    );
  };

  function applyHeroBuffs(key) {
    const currentHero = getHero(player);
    const branches = ["firstBranch", "secondBranch", "thirdBranch"];
    branches.forEach((branch) => {
      if (currentHero?.[branch]) {
        buffsProvider(currentHero[branch], key);
      }
    });
  }

  function applyHeroBranchBuffs(branch, key) {
    const buffs = getHero(player)[branch]?.filter(({ level }) => level);
    if (!buffs) return;
    buffsProvider(buffs, key);
  }

  function replaceSkillBuff(branch, id, key) {
    const buff = getHero(player)[branch]?.find((buff) => buff.id === id);
    if (!buff) return;
    console.log(buff);
    buffsProvider([buff], key);
  }

  return {
    assignHero,
    assignHeroBranch,
    deleteHero,
    deleteHeroBranch,
    replaceHeroSkill,
  };
};

export default useHero;
