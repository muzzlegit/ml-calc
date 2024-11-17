import { nanoid } from "nanoid";
import {
  ALLOWED_PROPERTY_UNITS,
  ALLOWED_UNIT_PROPERTIES,
  RATE_PROPERTIES,
} from "./customBuffs.constants";

export const getInitialBuff = (player) => {
  return {
    id: nanoid(),
    type: "customBuff",
    owner: player,
    target: "player",
    appliedOn: "all",
    targetType: "unit",
    property: "attackRate",
    unitFlag: "all",
    units: [
      "swordsman",
      "cavalier",
      "flying",
      "archer",
      "healer",
      "mercenary",
      "mage",
    ],
    valueIndex: 0,
    value: [0],
    battle: true,
  };
};

export function getBuffUnits(targetType) {
  if (targetType === "tower" || targetType === "magicTower") return null;
  switch (targetType) {
    case "all":
      return [
        "porter",
        "swordsman",
        "cavalier",
        "flying",
        "archer",
        "healer",
        "mercenary",
        "mage",
      ];
    case "porter":
      return ["porter"];
    case "swordsman":
      return ["swordsman"];
    case "cavalier":
      return ["cavalier"];
    case "flying":
      return ["flying"];
    case "archer":
      return ["archer"];
    case "healer":
      return ["healer"];
    case "mercenary":
      return ["mercenary"];
    case "mage":
      return ["mage"];
    default:
      break;
  }
}

export function getCorrectUnitProperty(unit, currentProperty) {
  if (ALLOWED_UNIT_PROPERTIES[unit].includes(currentProperty))
    return currentProperty;
  switch (unit) {
    case "porter":
      return "healthRate";
    case "tower":
      return "damageRate";
    case "magicTower":
      return "damageRate";
    default:
      return "attackRate";
  }
}
export function getCorrectPropertyUnit(property, currentUnit) {
  console.log(currentUnit);
  if (ALLOWED_PROPERTY_UNITS[property].includes(currentUnit))
    return currentUnit;
  switch (property) {
    case "attackRate":
      return [
        "swordsman",
        "cavalier",
        "flying",
        "archer",
        "healer",
        "mercenary",
        "mage",
      ];
    case "persecutionRate":
      return ["swordsman"];
    case "resurrectionRate":
      return ["healer"];
    case "suppression":
      return ["mage"];
    case "towersSuppressionRate":
      return ["mage"];
    default:
      return [
        "porter",
        "swordsman",
        "cavalier",
        "flying",
        "archer",
        "healer",
        "mercenary",
        "mage",
      ];
  }
}

export function getCorrectPropertyUnitFlag(property, currentUnit) {
  console.log(currentUnit);
  if (ALLOWED_PROPERTY_UNITS[property].includes(currentUnit))
    return currentUnit;
  switch (property) {
    case "damageRate":
      return "tower";
    case "persecutionRate":
      return "swordsman";
    case "resurrectionRate":
      return "healer";
    case "suppression":
      return "mage";
    case "towersSuppressionRate":
      return "mage";
    default:
      return "all";
  }
}

export function getBuffWithFormattedValue(buff) {
  const { value, property } = buff;
  return RATE_PROPERTIES.includes(property)
    ? { ...buff, value: [value[0] / 100] }
    : buff;
}
