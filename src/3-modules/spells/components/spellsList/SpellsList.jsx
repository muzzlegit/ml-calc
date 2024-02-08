import { ImageBox } from "modules/UI";
import { useSpell } from "modules/spells/hooks";
import { getSpellDescription } from "modules/spells/utils/spell.helpers";
import { Level, List, Spell, Title } from "./SpellsList.styled";
import useSpellsList from "./useSpellsList.hook";

const SpellsList = () => {
  const { onHeroSpells, heroSpells, onTownSpells, isDefender } =
    useSpellsList();
  const { handleSpellLevel } = useSpell();
  return (
    <div>
      <Title>Свитки</Title>
      <List>
        {onHeroSpells.map((spell) => {
          const { id, title, level, singleLevel, buffs, valueIndex, picture } =
            spell;
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
      <Title>Заклинания героев</Title>
      <List>
        {heroSpells.map(
          ({ id, title, level, singleLevel, buffs, valueIndex, picture }) => {
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
                  handleSpellLevel(id, level, singleLevel);
                }}
              >
                <ImageBox picture={picture} />
                <Level>{level}/5</Level>
              </Spell>
            );
          }
        )}
      </List>
      {isDefender ? (
        <>
          <Title>Заклинания на город</Title>
          <List>
            {onTownSpells.map(
              ({
                id,
                title,
                level,
                singleLevel,
                buffs,
                valueIndex,
                picture,
              }) => {
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
                      handleSpellLevel(id, level, singleLevel);
                    }}
                  >
                    <ImageBox picture={picture} />
                    <Level>{level}/5</Level>
                  </Spell>
                );
              }
            )}
          </List>
        </>
      ) : null}
    </div>
  );
};

export default SpellsList;
