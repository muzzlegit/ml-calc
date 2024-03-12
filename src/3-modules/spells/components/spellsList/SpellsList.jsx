import { ImageBox } from "modules/UI";
import { useSpell } from "modules/spells/hooks";
import { getSpellDescription } from "modules/spells/utils/spell.helpers";
import { Level, List, Spell, Title } from "./SpellsList.styled";
import useSpellsList from "./useSpellsList.hook";

const SpellsList = () => {
  const { spells } = useSpellsList();
  const { handleSpellLevel } = useSpell();
  return (
    <div>
      {spells.map((item) => {
        const { title, spells } = item;
        if (!spells.length) return;
        return (
          <div key={title}>
            <Title>{title}</Title>
            <List>
              {spells.map((spell) => {
                const {
                  id,
                  title,
                  level,
                  singleLevel,
                  buffs,
                  valueIndex,
                  picture,
                } = spell;
                return (
                  <Spell
                    key={id}
                    title={
                      level
                        ? getSpellDescription(buffs, valueIndex, singleLevel)
                        : title
                    }
                    isActive={level}
                    onClick={() => {
                      handleSpellLevel(spell);
                    }}
                  >
                    <ImageBox picture={picture} />
                    <Level>{level}/5</Level>
                  </Spell>
                );
              })}
            </List>
          </div>
        );
      })}
    </div>
  );
};

export default SpellsList;
