import { useSpell } from "modules/spells/hooks";
import { List, Title } from "./SpellsList.styled";
import Spell from "./particles/spell/Spell";
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
                return (
                  <Spell
                    key={spell.id}
                    spell={spell}
                    handleSpellLevel={handleSpellLevel}
                  />
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
