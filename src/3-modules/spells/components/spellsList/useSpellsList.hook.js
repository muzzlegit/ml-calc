import useSpellsStore from "modules/spells/store/spellsStore";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useSpellsList = () => {
  const player = usePlayerContext();
  const spellsArray = useSpellsStore((state) => state[player].spells);

  const spells = [
    {
      title: "Свитки",
      spells: spellsArray.filter(
        ({ sortIndex }) => sortIndex === "spell" || sortIndex === "spell_hero"
      ),
    },
    {
      title: "Заклинания героев",
      spells: spellsArray.filter(
        ({ sortIndex }) => sortIndex === "hero" || sortIndex === "spell_hero"
      ),
    },
    {
      title: "Заклинания на город",
      spells:
        player === "mainDefender"
          ? spellsArray.filter(({ sortIndex }) => sortIndex === "town")
          : [],
    },
  ];

  return {
    spells,
  };
};

export default useSpellsList;
