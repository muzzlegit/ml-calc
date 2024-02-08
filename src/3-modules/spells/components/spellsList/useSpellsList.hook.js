import useSpellsStore from "modules/spells/store/spellsStore";
import { useMemo } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useSpellsList = () => {
  const player = usePlayerContext();
  const spellsArray = useSpellsStore((state) => state[player].spells);

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

  return {
    onHeroSpells,
    heroSpells,
    onTownSpells,
    isDefender,
  };
};

export default useSpellsList;
