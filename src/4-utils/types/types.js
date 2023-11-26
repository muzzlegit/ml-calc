import PropTypes from "prop-types";

export const players = PropTypes.oneOf([
  "mainAttacker",
  "attackerAlly",
  "attackerSecondAlly",
  "mainDefender",
  "firstDefenderAlly",
  "secondDefenderAlly",
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
