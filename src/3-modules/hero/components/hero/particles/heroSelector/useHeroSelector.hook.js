import { useHero } from "modules/hero/hooks";
import useHeroStore from "modules/hero/store/heroStore";
import {
  getBranchesList,
  getHeroesClasses,
} from "modules/hero/utils/hero.helpers";
import { usePlayerStore } from "modules/players";
import { useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHeroSelector = () => {
  const player = usePlayerContext();
  const { getHero } = useHeroStore((state) => state.methods);
  const race = usePlayerStore((state) => state[player].race);

  const currentHero = getHero(player);
  const [heroClass, setHeroClass] = useState(currentHero?.class ?? null);
  const [firstHeroBranch, setFirstHeroBranch] = useState(
    currentHero?.firstBranch?.[0].ownerDescription ?? null
  );
  const [secondHeroBranch, setSecondHeroBranch] = useState(
    currentHero?.secondBranch?.[0].ownerDescription ?? null
  );
  const [thirdHeroBranch, setThirdHeroBranch] = useState(
    currentHero?.thirdBranch?.[0].ownerDescription ?? null
  );
  const [heroBranchesList, setHeroBranchesList] = useState(
    getBranchesList(currentHero?.class ?? null)
  );

  const { assignHero, assignHeroBranch, deleteHero, deleteHeroBranch } =
    useHero();

  const isMonsters = race === "monsters";

  const classesList = getHeroesClasses(isMonsters);

  const handleHeroClass = (newHeroClass) => {
    ///---buffs
    // applyHeroBuffs("delete");
    //---selector
    setHeroClass(newHeroClass);
    clearAllBranches();
    setHeroBranchesList(getBranchesList(newHeroClass));
    //---hero
    assignHero(newHeroClass);
  };

  const handleDeleteHeroClass = () => {
    //---buffs
    // applyHeroBuffs("delete");
    //---selector
    setHeroClass(null);
    clearAllBranches();
    setHeroBranchesList({});
    //---hero
    deleteHero();
  };

  const handleHeroBranches = (newHeroBranch, branchName) => {
    //---selector
    setBranch(branchName, newHeroBranch);
    //---hero
    assignHeroBranch(branchName, newHeroBranch, heroClass);
    // //---buffs
    // applyHeroBranchBuffs(branchName, "add");
  };

  const handleDeleteBranch = (branchName) => {
    // //---buffs
    // applyHeroBranchBuffs(branchName, "delete");
    //---selector
    setBranch(branchName, null);
    //---hero
    deleteHeroBranch(branchName);
  };

  function setBranch(branchName, newHeroBranch) {
    switch (branchName) {
      case "firstBranch":
        setFirstHeroBranch(newHeroBranch);
        updateBranchesList(firstHeroBranch, newHeroBranch);
        break;
      case "secondBranch":
        setSecondHeroBranch(newHeroBranch);
        updateBranchesList(secondHeroBranch, newHeroBranch);
        break;
      case "thirdBranch":
        setThirdHeroBranch(newHeroBranch);
        updateBranchesList(thirdHeroBranch, newHeroBranch);
        break;
      default:
        break;
    }
  }

  function clearAllBranches() {
    setFirstHeroBranch(null);
    setSecondHeroBranch(null);
    setThirdHeroBranch(null);
  }

  function updateBranchesList(currentBranch, newBranch) {
    const currentList = heroBranchesList;
    delete currentList[newBranch];
    currentBranch
      ? setHeroBranchesList({ ...currentList, [currentBranch]: currentBranch })
      : setHeroBranchesList({ ...currentList });
  }

  return {
    isMonsters,
    heroClass,
    firstHeroBranch,
    secondHeroBranch,
    thirdHeroBranch,
    handleHeroClass,
    handleHeroBranches,
    handleDeleteBranch,
    handleDeleteHeroClass,
    classesList,
    heroBranchesList,
  };
};

export default useHeroSelector;
