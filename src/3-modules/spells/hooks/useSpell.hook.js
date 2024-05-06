import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";
import useSpellsStore from "../store/spellsStore";
import { getNextLevelSpell } from "../utils/spell.helpers";

const useSpell = () => {
  const player = usePlayerContext();
  const { getSpell, getSpells, resetAllSpells, setSpellLevel } = useSpellsStore(
    (state) => state.methods
  );
  const { buffsProvider } = useBuffsProvider();

  const handleSpellLevel = (spell) => {
    if (!spell) return;
    const newSpell = getNextLevelSpell(spell);
    console.log("newSpell", newSpell);
    const currentSpell = getSpell(player, newSpell.id);
    buffsProvider(currentSpell.buffs, "delete");
    setSpellLevel(player, newSpell);
    if (newSpell.level) {
      buffsProvider(newSpell.buffs, "add");
    }
  };

  const deleteAllSpells = (specificPlayer) => {
    const activeSpells = getSpells(specificPlayer ?? player).filter(
      ({ level }) => level
    );
    activeSpells.forEach((spell) => {
      buffsProvider(
        spell.buffs.map((buff) => ({ ...buff, valueIndex: spell.level - 1 })),
        "delete"
      );
    });
    resetAllSpells(specificPlayer ?? player);
  };

  return { deleteAllSpells, handleSpellLevel };
};

export default useSpell;
