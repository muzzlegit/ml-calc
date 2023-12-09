import PropTypes from "prop-types";

export const playerTypes = PropTypes.oneOf([
  "mainAttacker",
  "attackerAlly",
  "attackerSecondAlly",
  "mainDefender",
  "firstDefenderAlly",
  "secondDefenderAlly",
  "garrison",
]);

export const unitsNames = PropTypes.oneOf([
  "porter",
  "swordsman",
  "cavalier",
  "flying",
  "archer",
  "healer",
  "mercenary",
  "mage",
]);

export const buildingTypes = PropTypes.oneOf([
  "tower",
  "magicTower",
  "fortification",
  "gate",
]);

export const attackIndexTypes = PropTypes.oneOf(["min", "max"]);

export const imageTypes = PropTypes.shape({
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
});

export const towerTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["tower"]).isRequired,
  level: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  damageRate: PropTypes.number.isRequired,
});

export const magicTowerTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["magicTower"]).isRequired,
  level: PropTypes.number.isRequired,
  multiplier: PropTypes.number.isRequired,
  damageRate: PropTypes.number.isRequired,
});

export const fortificationTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["fortifications"]).isRequired,
  level: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  damageRate: PropTypes.number.isRequired,
});

export const gateTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["gate"]).isRequired,
  level: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  attack_absorption: PropTypes.number.isRequired,
  strengthRate: PropTypes.number.isRequired,
});

export const buffTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  ownerDescription: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["battlefield", "artefact", "rune", "skill", "spell"]),
  player: PropTypes.any.isRequired,
  target: PropTypes.oneOf(["player", "ally", "player_ally", "enemy", "all"])
    .isRequired,
  appliedOn: PropTypes.oneOf(["all", "homeland"]).isRequired,
  targetType: PropTypes.oneOf([
    "player",
    "tower",
    "magicTower",
    "fortification",
    "gate",
    "unit",
  ]).isRequired,
  units: PropTypes.arrayOf(PropTypes.string.isRequired),
  title: PropTypes.string.isRequired,
  property: PropTypes.oneOf([
    "amountRate",
    "attackRate",
    "defense",
    "defenseLevel",
    "healthRate",
    "persecutionRate",
    "resurrectionRate",
    "suppression",
    "towersSuppressionRate",
  ]).isRequired,
  valueIndex: PropTypes.oneOf([0, 1, 2, 3, 4]).isRequired,
  value: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  battle: PropTypes.bool.isRequired,
});
