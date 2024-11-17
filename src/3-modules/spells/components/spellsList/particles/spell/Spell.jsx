import { getSpellDescription } from "modules/spells/utils/spell.helpers";
import { useState } from "react";
import { ImageBox } from "utils/UI";
import { Container, Level } from "./Spell.styled";

const Spell = ({ spell, handleSpellLevel }) => {
  const [currentSpell, setCurrentSpell] = useState(spell);
  const { title, level, picture, buffs, valueIndex } = currentSpell;

  const handleLevel = () => {
    const updatedSpell = handleSpellLevel(currentSpell);
    setCurrentSpell(updatedSpell);
  };
  return (
    <Container
      title={level ? getSpellDescription(buffs, valueIndex) : title}
      isActive={level}
      onClick={handleLevel}
    >
      <ImageBox picture={picture} />
      <Level>{level}/5</Level>
    </Container>
  );
};

export default Spell;
