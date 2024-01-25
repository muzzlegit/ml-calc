import { getSpellDescription } from "modules/spells/utils/spell.helpers";
import { ImageBox } from "modules/UI";
import { Level, List, Spell, Title } from "./SpellsList.styled";
import useSpellsList from "./useSpellsList.hook";

const SpellsList = () => {
  const {
    onHeroSpells,
    heroSpells,
    onTownSpells,
    handleSpellLevel,
    isDefender,
  } = useSpellsList();
  return (
    <div>
      <Title>Свитки</Title>
      <List>
        {onHeroSpells.map(
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
