import useCustomBuffsStore from "modules/customBuffs/store/customBuffsStore";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useCustomBuffs = () => {
  const player = usePlayerContext();
  const { getBuff, setBuff, addBuff, getAllBuffs, resetBuffs } =
    useCustomBuffsStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();

  const handleAddCustomBuff = () => {
    addBuff(player);
  };

  const resetAllBuffs = (player) => {
    buffsProvider(getAllBuffs(player), "delete");
    resetBuffs(player);
  };

  return { handleAddCustomBuff, resetAllBuffs };
};

export default useCustomBuffs;
