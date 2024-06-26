export const UNITS = [
  "porter",
  "swordsman",
  "cavalier",
  "flying",
  "archer",
  "healer",
  "mercenary",
  "mage",
];

export const ADDITION_UNIT_PROPERTIES = {
  common: {
    amount: 0,
    amountRate: 0,
    defense: 0,
    defenseLevel: 50,
    healthRate: 0,
  },
  porter: {
    capacityRate: 0,
  },
  swordsman: {
    attackRate: 0,
    persecutionRate: 0,
    terrainModification: 0,
  },
  cavalier: {
    attackRate: 0,
    persecutionRate: 0,
    terrainModification: 0,
  },
  flying: {
    attackRate: 0,
    persecutionRate: 0,
    terrainModification: 0,
  },
  archer: {
    attackRate: 0,
    persecutionRate: 0,
    terrainModification: 0,
  },
  healer: {
    attackRate: 0,
    perfectResurrection: 0,
    additionalResurrection: 0,
    resurrectionRate: 0,
    resurrectionLimit: 0,
    finishingOff: 0,
  },
  mercenary: {
    attackRate: 0,
  },
  mage: {
    attackRate: 0,
    roundAttackRate: 0,
    suppression: 0,
    towersSuppressionRate: 0,
  },
};

export const LIMITS = {
  attackLimit: -0.9,
  healthLimit: -0.75,
  defenseLevelLimit: 75,
  persecutionLimit: -0.9,
};

export const UNITS_LANDS = {
  swordsman: {
    homeLand: "desert",
    alienLand: "mountain",
  },
  cavalier: {
    homeLand: "steppe",
    alienLand: "forest",
  },
  flying: {
    homeLand: "mountain",
    alienLand: "desert",
  },
  archer: {
    homeLand: "forest",
    alienLand: "steppe",
  },
  mercenary: {
    homeLand: null,
    alienLand: "mine",
  },
};

export const UNITS_PERSECUTION = {
  swordsman: {
    persecutor: "archer",
    pursued: "cavalier",
  },
  cavalier: {
    persecutor: "swordsman",
    pursued: "flying",
  },
  flying: {
    persecutor: "cavalier",
    pursued: "archer",
  },
  archer: {
    persecutor: "flying",
    pursued: "swordsman",
  },
};
export const UNIT_LEVELS = [1, 2, 3, 4];
