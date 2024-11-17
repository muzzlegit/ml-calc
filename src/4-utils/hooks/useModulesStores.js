import { useArtefactsStore } from "modules/artefacts";
import { useBattleplaceStore } from "modules/battleplace";
import useCustomBuffsStore from "modules/customBuffs/store/customBuffsStore";
import { useHeroStore } from "modules/hero";
import { usePlayerStore } from "modules/players";
import useSpellsStore from "modules/spells/store/spellsStore";
import { useUnitsStore } from "modules/units";
import { deepCopy } from "utils/helpers";
import useWatchDogStore from "utils/watchDog/watchDogStore";

const useModulesStores = () => {
  const storages = {
    artefactsStore: deepCopy(useArtefactsStore()),
    battleplaceStore: deepCopy(useBattleplaceStore()),
    heroStore: deepCopy(useHeroStore()),
    playerStore: deepCopy(usePlayerStore()),
    spellsStore: deepCopy(useSpellsStore()),
    customBuffsStore: deepCopy(useCustomBuffsStore()),
    unitsStore: deepCopy(useUnitsStore()),
    watchDogStore: deepCopy(useWatchDogStore()),
  };
  const deleteMethodsKey = (obj) => {
    let formattedObj = {};
    for (const key in obj) {
      const { methods: _, ...rest } = obj[key];
      formattedObj = { ...formattedObj, [key]: rest };
    }
    return formattedObj;
  };

  const addMethodsKey = (obj) => {
    let formattedObj = {};
    for (const key in obj) {
      formattedObj = {
        ...formattedObj,
        [key]: { ...obj[key], methods: storages[key].methods },
      };
    }
    return formattedObj;
  };

  const updateStorages = (newStorages) => {
    const formattedStorages = addMethodsKey(newStorages);
    for (const store in formattedStorages) {
      formattedStorages[store].methods.updateState(formattedStorages[store]);
    }
  };

  const getStorages = () => {
    return deleteMethodsKey(storages);
  };

  return { getStorages, updateStorages };
};

export default useModulesStores;
