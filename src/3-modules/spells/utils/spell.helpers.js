import { nanoid } from "nanoid";
import spells from "../data/spells.json";
import canvas from "../graphics/images/Skills.png";
import canvasMap from "../graphics/maps/spells.map.json";
import { BUFFS, COMMON_PROPERTIES } from "./spell.constants";

export function getInitialSpells(player) {
  return spells.map((spell) => {
    const { id, type, title, buffs } = spell;
    const picture = {
      image: `url(${canvas}) ${canvasMap?.[title]?.coordinate}`,
      width: canvasMap?.[title]?.width,
      height: canvasMap?.[title]?.height,
    };
    const formattedBuffs = buffs.map((buff) => ({
      ...buff,
      id: nanoid(),
      owner: id,
      ownerDescription: title,
      type,
      player,
      valueIndex: 0,
    }));
    return { ...spell, picture, player, buffs: formattedBuffs };
  });
}

export function getNextLevelSpell(spell) {
  const { level, singleLevel, buffs } = spell;
  const { nextLevel, nextIndex } = getNextLevel(level, singleLevel);
  const formattedBuffs = buffs.map((buff) => ({
    ...buff,
    valueIndex: nextIndex,
  }));

  return { ...spell, level: nextLevel, buffs: formattedBuffs };
}

function getNextLevel(level, singleLevel) {
  if (singleLevel) {
    const nextLevel = Number(level) ? 0 : 5;
    const nextIndex = 0;
    return { nextLevel, nextIndex };
  } else {
    const nextLevel = Number(level) === 5 ? 0 : Number(level) + 1;
    const nextIndex = nextLevel ? nextLevel - 1 : 0;
    return { nextLevel, nextIndex };
  }
}

export const getSpellDescription = (buffs, valueIndex) => {
  return buffs
    .map(({ description }) => {
      return `${description[valueIndex]}`;
    })
    .toString()
    .replaceAll(",", "\n");
};

export const getAdditionBuffs = (player) => {
  const playerBuffs = BUFFS.filter((buff) => {
    const { target, targetType } = buff;
    if (
      (player === "mainAttacker" ||
        player === "attackerAlly" ||
        player === "attackerSecondAlly" ||
        player === "firstDefenderAlly" ||
        player === "secondDefenderAlly") &&
      target === "player" &&
      (targetType === "fortification" ||
        targetType === "magicTower" ||
        targetType === "tower")
    )
      return;
    if (
      (player === "firstDefenderAlly" || player === "secondDefenderAlly") &&
      (targetType === "fortification" ||
        targetType === "magicTower" ||
        targetType === "tower")
    )
      return;
    if (
      player === "mainDefender" &&
      target === "enemy" &&
      (targetType === "fortification" ||
        targetType === "magicTower" ||
        targetType === "tower")
    )
      return;
    return buff;
  });
  return playerBuffs.map((buff) => ({
    id: nanoid(),
    ...COMMON_PROPERTIES,
    ...buff,
  }));
};

export function getBuffsObjectForUnits(properties, descriptions) {
  const buffs = [];
  properties.forEach((property) => {
    const { property: propertyName, target, units, sign } = property;
    buffs.push({
      title: `${descriptions[propertyName]} ${descriptions.all}`,
      target,
      property: propertyName,
      targetType: "unit",
      units,
      sign,
    });
    if (propertyName !== "amountRate") {
      units.forEach((unit) => {
        buffs.push({
          title: `${descriptions[propertyName]} ${descriptions[unit]}`,
          target,
          property: propertyName,
          targetType: "unit",
          units: [unit],
          sign,
        });
      });
    }
  });
  return buffs;
}
