import useSpellsStore from "modules/spells/store/spellsStore";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useSpellsList = () => {
  const player = usePlayerContext();
  const { getSpells } = useSpellsStore((state) => state.methods);

  const spells = [
    {
      title: "Свитки",
      spells: getSpells(player).filter(
        ({ sortIndex }) => sortIndex === "spell" || sortIndex === "spell_hero"
      ),
    },
    {
      title: "Заклинания героев",
      spells: getSpells(player).filter(
        ({ sortIndex }) => sortIndex === "hero" || sortIndex === "spell_hero"
      ),
    },
    {
      title: "Заклинания на город",
      spells:
        player === "mainDefender"
          ? getSpells(player).filter(({ sortIndex }) => sortIndex === "town")
          : [],
    },
  ];

  return {
    spells,
  };
};

export default useSpellsList;
