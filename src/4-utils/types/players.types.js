import PropTypes from "prop-types";

export const players = PropTypes.oneOf([
  "mainAttacker",
  "attackerAlly",
  "attackerSecondAlly",
  "mainDefender",
  "firstDefenderAlly",
  "secondDefenderAlly",
]);
