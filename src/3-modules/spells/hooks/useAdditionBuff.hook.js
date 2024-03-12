import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";
import useSpellsStore from "../store/spellsStore";

const useAdditionBuff = () => {
  const player = usePlayerContext();
  const { getBuff, setBuff, getActiveBuffs } = useSpellsStore(
    (state) => state.methods
  );
  const { buffsProvider } = useBuffsProvider();

  const setBuffValue = (id, value) => {
    const currentBuff = getBuff(player, id);
    if (!value && currentBuff.value) buffsProvider([currentBuff], "delete");
    const formattedValue = currentBuff.sign === "%" ? value / 100 : value;
    const valueWithSign =
      currentBuff.target === "player" ? [formattedValue] : [-formattedValue];

    setBuff(player, { ...currentBuff, value });
    buffsProvider(
      [
        {
          ...currentBuff,
          player,
          value: valueWithSign,
        },
      ],
      currentBuff.value ? "replace" : "add"
    );
  };

  const resetAllBuffs = (specificPlayer) => {
    getActiveBuffs(specificPlayer).forEach((buff) => {
      const resetedBuff = { ...buff, value: 0 };
      setBuff(specificPlayer ?? player, resetedBuff);
      buffsProvider([resetedBuff], "delete");
    });
  };

  return { setBuffValue, resetAllBuffs };
};

export default useAdditionBuff;
