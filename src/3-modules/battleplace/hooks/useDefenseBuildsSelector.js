import { useState } from "react";
import useBattleplaceStore from "../store/battleplaceStore";
import { getBattleplacePicture } from "../utils/battleplace.helpers";

const useDefenseBuildsSelector = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const towers = useBattleplaceStore((state) => state.towers);
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeBuild, setActiveBuild] = useState("tower");

  const towerImg = getBattleplacePicture("towerIcon");
  const magicTowerImg = getBattleplacePicture("magicTowerIcon");
  const fortificationImg = getBattleplacePicture("fortificationIcon");
  const perfectIcon = getBattleplacePicture("largePerfectIcon");
  const gateImg = getBattleplacePicture("gateIcon");

  const isCastle = battleplace === "castle";
  const isTowersLimit = towers?.length === 2;
  if (isCastle && activeLevel === 8) setActiveLevel(7);
  if (!isCastle && activeBuild === "gate") setActiveBuild("tower");

  const handleOnLevelClick = (level) => {
    setActiveLevel(Number(level));
  };

  const handleOnBuildClick = (build) => {
    setActiveBuild(build);
  };

  return {
    towerImg,
    magicTowerImg,
    fortificationImg,
    perfectIcon,
    activeLevel,
    handleOnLevelClick,
    gateImg,
    isCastle,
    isTowersLimit,
    activeBuild,
    handleOnBuildClick,
  };
};

export default useDefenseBuildsSelector;
