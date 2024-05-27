import { useArtefactsStore } from "modules/artefacts";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";
import useSpellsStore from "../store/spellsStore";
import { getNextLevelSpell } from "../utils/spell.helpers";

const useSpell = () => {
  const player = usePlayerContext();
  const { getSpell, getSpells, resetAllSpells, setSpellLevel } = useSpellsStore(
    (state) => state.methods
  );

  const artefacts = useArtefactsStore((state) => state[player].artefacts);
  const { buffsProvider } = useBuffsProvider();

  const [commanderAttackFlag, setCommanderAttackFlag] = useState(false);
  const [commanderDefenseFlag, setCommanderDefenseFlag] = useState(false);
  const [commanderHealthFlag, setCommanderHealthFlag] = useState(false);

  const handleSpellLevel = (spell) => {
    console.log("sdfs", spell);
    if (!spell) return;
    let newSpell = getNextLevelSpell(spell);
    if (newSpell.title === "Острый меч") {
      setCommanderAttackFlag(newSpell.level);
    }
    if (newSpell.title === "Каменная броня") {
      setCommanderDefenseFlag(newSpell.level);
    }
    if (newSpell.title === "Здоровье мамонта") {
      setCommanderHealthFlag(newSpell.level);
    }
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

  useEffect(() => {
    if (commanderAttackFlag || commanderDefenseFlag || commanderHealthFlag) {
      const commanderSpells = getSpells(player).filter(
        ({ title }) =>
          title === "Острый меч" ||
          title === "Каменная броня" ||
          title === "Здоровье мамонта"
      );
      console.log("spell", commanderSpells);
      commanderSpells.forEach((commanderSpell) => {
        const {
          property,
          title,
          type,
          level,
          target,
          targetType,
          description,
          value,
          buffs,
        } = commanderSpell;
        let spellBuffs = [];
        for (const place in artefacts) {
          const artefact = artefacts[place];
          if (artefact && artefact.buffs.common.length) {
            artefact.buffs.common.forEach((buff) => {
              const {
                property: buffProperty,
                title: buffTitle,
                appliedOn,
                target: buffTarget,
                units,
              } = buff;
              if (buffProperty === property && buffTarget !== "enemy") {
                const spellBuff = {
                  id: nanoid(),
                  type,
                  player,
                  artefact: buffTitle,
                  appliedOn,
                  property,
                  units,
                  title,
                  level,
                  valueIndex: level - 1,
                  target,
                  targetType,
                  description,
                  value: [
                    value[0] * artefact.level,
                    value[1] * artefact.level,
                    value[2] * artefact.level,
                    value[3] * artefact.level,
                    value[4] * artefact.level,
                  ],
                  battle: true,
                };
                spellBuffs = level
                  ? [...spellBuffs, spellBuff]
                  : [...spellBuffs];
                // buffsProvider(commanderSpell.buffs, "delete");
              }
            });
          }
        }
        buffsProvider(buffs, "delete");
        setSpellLevel(player, { ...commanderSpell, buffs: spellBuffs });
        buffsProvider(spellBuffs, "add");
      });
    }
  }, [
    artefacts,
    buffsProvider,
    commanderAttackFlag,
    commanderDefenseFlag,
    commanderHealthFlag,
    getSpells,
    player,
    setSpellLevel,
  ]);

  return { deleteAllSpells, handleSpellLevel };
};

export default useSpell;
