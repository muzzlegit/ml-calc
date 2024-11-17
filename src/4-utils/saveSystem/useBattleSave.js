import useModulesStores from "utils/hooks/useModulesStores";
import { readFile, saveToFile } from "./saveToFileService";

const useBattleSave = () => {
  const { getStorages, updateStorages } = useModulesStores();

  const handleBattleSave = (name) => {
    const storages = getStorages();
    saveToFile(name, storages);
  };

  const handleBattleLoad = () => {
    readFile(updateStorages);
  };
  return { handleBattleSave, handleBattleLoad };
};

export default useBattleSave;
