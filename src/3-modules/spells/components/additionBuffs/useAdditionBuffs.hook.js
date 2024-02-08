import useSpellsStore from "modules/spells/store/spellsStore";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useAdditionBuffs = () => {
  const player = usePlayerContext();
  const additionBuffs = useSpellsStore((state) => state[player].buffs);
  const { getBuff, setBuff } = useSpellsStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();

  const handlePropertyValue = (id, value) => {
    if (isNaN(value)) return;
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
          value: valueWithSign,
        },
      ],
      currentBuff.value ? "replace" : "add"
    );
  };

  return { additionBuffs, handlePropertyValue };
};

export default useAdditionBuffs;
