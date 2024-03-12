import { useAdditionBuff } from "modules/spells/hooks";
import useSpellsStore from "modules/spells/store/spellsStore";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useAdditionBuffs = () => {
  const player = usePlayerContext();
  const additionBuffs = useSpellsStore((state) => state[player].buffs);
  const { setBuffValue } = useAdditionBuff();

  const handlePropertyValue = (id, value) => {
    if (isNaN(value)) return;
    setBuffValue(id, value);
  };

  return { additionBuffs, handlePropertyValue };
};

export default useAdditionBuffs;
