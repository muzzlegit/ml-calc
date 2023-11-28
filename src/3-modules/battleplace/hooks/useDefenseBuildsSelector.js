import { useState } from "react";
import useBattleplaceStore from "../store/battleplaceStore";

const useDefenseBuildsSelector = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const towers = useBattleplaceStore((state) => state.towers);
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeBuild, setActiveBuild] = useState("tower");

  const isCastle = battleplace === "castle";

  const isTowersLimit =
    towers?.length === 2 &&
    (activeBuild === "tower" || activeBuild === "magicTower");

  if (isCastle && activeLevel === 8) setActiveLevel(7);
  if (!isCastle && activeBuild === "gate") setActiveBuild("tower");

  const handleOnLevelClick = (level) => {
    setActiveLevel(Number(level));
  };

  const handleOnBuildClick = (build) => {
    setActiveBuild(build);
  };

  return {
    activeLevel,
    handleOnLevelClick,
    isCastle,
    isTowersLimit,
    activeBuild,
    handleOnBuildClick,
  };
};

export default useDefenseBuildsSelector;
