import { getBuffsObjectForUnits } from "./spell.helpers";

const {
  all,
  attackUnits,
  persecutionUnits,
  porter,
  swordsman,
  cavalier,
  flying,
  archer,
  healer,
  mercenary,
  mage,
} = {
  all: [
    "porter",
    "swordsman",
    "cavalier",
    "flying",
    "archer",
    "healer",
    "mercenary",
    "mage",
  ],
  attackUnits: [
    "swordsman",
    "cavalier",
    "flying",
    "archer",
    "healer",
    "mercenary",
    "mage",
  ],
  persecutionUnits: ["swordsman", "cavalier", "flying", "archer"],
  porter: ["porter"],
  swordsman: ["swordsman"],
  cavalier: ["cavalier"],
  flying: ["flying"],
  archer: ["archer"],
  healer: ["healer"],
  mercenary: ["mercenary"],
  mage: ["mage"],
};

const descriptions = {
  all: "всех войск",
  porter: "Носильщиков",
  swordsman: "Воинов",
  cavalier: "Всадников",
  flying: "Летающих",
  archer: "Стрелков",
  healer: "Целителей",
  mercenary: "Наемников",
  mage: "Магов",
  attackRate: "Атака",
  healthRate: "Здоровье",
  amountRate: "Ужас",
  persecutionRate: "Преследование",
  defense: "Защита",
  defenseLevel: "Предел максимальной защиты",
  suppression: "Поглощение атаки",
  towersSuppressionRate: "Поглощение урона от башен и магических башен",
};

export const COMMON_PROPERTIES = {
  type: "buff",
  player: null,
  appliedOn: "all",
  valueIndex: 0,
  value: 0,
  battle: true,
};

export const PROPERTIES = [
  { property: "attackRate", units: attackUnits, target: "player", sign: "%" },
  { property: "defense", units: all, target: "player", sign: "" },
  { property: "healthRate", units: all, target: "player", sign: "%" },
  {
    property: "persecutionRate",
    units: persecutionUnits,
    target: "player",
    sign: "%",
  },
  { property: "attackRate", units: attackUnits, target: "enemy", sign: "%" },
  { property: "defense", units: all, target: "enemy", sign: "" },
  { property: "healthRate", units: all, target: "enemy", sign: "%" },
  {
    property: "persecutionRate",
    units: persecutionUnits,
    target: "enemy",
    sign: "%",
  },
  { property: "amountRate", units: all, target: "enemy", sign: "%" },
];
export const BUFFS = [
  ...getBuffsObjectForUnits(PROPERTIES, descriptions),
  {
    title: "Атака башен",
    target: "player",
    property: "damageRate",
    targetType: "tower",
    sign: "%",
  },
  {
    title: "Атака башен",
    target: "enemy",
    property: "damageRate",
    targetType: "tower",
    sign: "%",
  },
];
