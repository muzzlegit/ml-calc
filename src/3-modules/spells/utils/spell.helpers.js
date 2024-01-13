import canvas from "../graphics/images/Skills.png";
import canvasMap from "../graphics/maps/spells.map.json";

export const getSpellImage = (spellName) => {
  const image = `url(${canvas}) ${canvasMap?.[spellName]?.coordinate}`;
  const width = canvasMap?.[spellName]?.width;
  const height = canvasMap?.[spellName]?.height;

  return { image, width, height };
};

export const getFormattedBuffs = (spell) => {
  const { id, title, valueIndex, buffs } = spell;
  return buffs.map((buff, index) => ({
    ...buff,
    id: id + `_${index}`,
    owner: id,
    ownerDescription: title,
    valueIndex,
  }));
};

export const getSpellDescription = (buffs, valueIndex) => {
  return buffs
    .map(({ description }) => {
      return `${description[valueIndex]}`;
    })
    .toString()
    .replaceAll(",", "\n");
};
