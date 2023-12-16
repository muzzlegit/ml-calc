import { useHero } from "modules/hero/hooks";
import useHeroStore from "modules/hero/store/heroStore";
import {
  getHeroPicture,
  getHeroSkillPicture,
} from "modules/hero/utils/hero.helpers";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useHeroBranches = () => {
  const player = usePlayerContext();
  const hero = useHeroStore((state) => state[player].hero);
  const [firstBranch, setFirstBranch] = useState(hero?.firstBranch ?? null);
  const [secondBranch, setSecondBranch] = useState(hero?.secondBranch ?? null);
  const [thirdBranch, setThirdBranch] = useState(hero?.thirdBranch ?? null);
  const [graphics, setGraphics] = useState({
    skillFrame: getHeroPicture("heroSkillFrame"),
  });
  const { replaceHeroSkill } = useHero();
  const { buffsProvider } = useBuffsProvider();

  const handleHeroSkillLevel = (branchName, values) => {
    const { level, id, target } = values;
    const isLevelLimit = level + 1 > 5;
    const newValues = {
      level: isLevelLimit ? 1 : level + 1,
      valueIndex: isLevelLimit ? 0 : level,
      id,
      target,
    };
    replaceHeroSkill(branchName, newValues);
    buffsProvider([newValues], "replace");
  };

  useEffect(() => {
    setFirstBranch(hero?.firstBranch ?? null);
    setSecondBranch(hero?.secondBranch ?? null);
    setThirdBranch(hero?.thirdBranch ?? null);
  }, [hero]);

  useEffect(() => {
    setGraphics((prev) => ({ ...prev, ...createGraphicsObject() }));
    function createGraphicsObject() {
      const graphics = {};

      [
        ...(firstBranch ?? []),
        ...(secondBranch ?? []),
        ...(thirdBranch ?? []),
      ].forEach(({ title }) => {
        graphics[title] = getHeroSkillPicture(title);
      });

      return graphics;
    }
  }, [firstBranch, secondBranch, thirdBranch]);

  return {
    firstBranch,
    secondBranch,
    thirdBranch,
    graphics,
    handleHeroSkillLevel,
  };
};

export default useHeroBranches;
