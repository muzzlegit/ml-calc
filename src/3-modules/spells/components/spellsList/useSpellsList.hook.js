import useSpellsStore from "modules/spells/store/spellsStore";
import {
  getFormattedBuffs,
  getSpellImage,
} from "modules/spells/utils/spell.helpers";
import { useMemo } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useSpellsList = () => {
  const player = usePlayerContext();
  const spellsArray = useSpellsStore((state) => state[player].spells).map(
    (spell) => ({ ...spell, picture: getSpellImage(spell.title) })
  );
  const { setSpellLevel, getSpell } = useSpellsStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();

  const isDefender = player === "mainDefender";

  const onHeroSpells = useMemo(() => {
    return spellsArray.filter(
      ({ sortIndex }) => sortIndex === "spell" || sortIndex === "spell_hero"
    );
  }, [spellsArray]);

  const heroSpells = useMemo(() => {
    return spellsArray.filter(
      ({ sortIndex }) => sortIndex === "hero" || sortIndex === "spell_hero"
    );
  }, [spellsArray]);
  const onTownSpells = useMemo(() => {
    return spellsArray.filter(({ sortIndex }) => sortIndex === "town");
  }, [spellsArray]);

  const handleSpellLevel = (id, level, singleLevel) => {
    const { nextLevel, nextIndex } = getNextLevel(level, singleLevel);
    setSpellLevel(player, id, { level: nextLevel, valueIndex: nextIndex });
    const currentSpell = getSpell(player, id);
    buffsProvider(getFormattedBuffs(currentSpell), "delete");
    if (nextLevel) {
      buffsProvider(
        getFormattedBuffs({
          ...currentSpell,
          level: nextLevel,
          valueIndex: nextIndex,
        }),
        "add"
      );
    }
  };

  function getNextLevel(level, singleLevel) {
    if (singleLevel) {
      const nextLevel = Number(level) ? 0 : 5;
      const nextIndex = 0;
      return { nextLevel, nextIndex };
    } else {
      const nextLevel = Number(level) === 5 ? 0 : Number(level) + 1;
      const nextIndex = nextLevel ? nextLevel - 1 : 0;
      return { nextLevel, nextIndex };
    }
  }

  return {
    onHeroSpells,
    heroSpells,
    onTownSpells,
    isDefender,
    handleSpellLevel,
  };
};

export default useSpellsList;
