import PropTypes from "prop-types";
import { buffTypes, playerTypes } from "utils/types/types";

export const getHomeland = (playerRace) => {
  switch (playerRace) {
    case "undead":
      return "cursedForest";
    case "demon":
      return "deadLand";
    case "drow":
      return "cursedForest";
    case "human":
      return "hollyLand";
    case "elf":
      return "magicForest";
    default:
      return "none";
  }
};

getHomeland.propTypes = {
  playerRace: PropTypes.oneOf(["undead", "demon", "drow", "human", "elf"]),
};

export function getEnemy(player) {
  if (
    player === "mainAttacker" ||
    player === "attackerAlly" ||
    player === "attackerSeconAlly"
  )
    return "mainDefender";

  if (
    player === "mainDefender" ||
    player === "firstDefenderAlly" ||
    player === "secondDefenderAlly"
  )
    return "mainAttacker";
}

export function getAllyes(player) {
  switch (player) {
    case "mainAttacker":
      return ["attackerAlly", "attackerSecondAlly"];
    case "attackerAlly":
      return ["mainAttacker", "attackerSecondAlly"];
    case "attackerSecondAlly":
      return ["attackerAlly", "attackerAlly"];
    case "mainDefender":
      return ["firstDefenderAlly", "secondDefenderAlly"];
    case "firstDefenderAlly":
      return ["secondDefenderAlly", "mainDefender"];
    case "secondDefenderAlly":
      return ["firstDefenderAlly", "mainDefender"];
    default:
      return [];
  }
}

export function getBuffPlayers(target, player) {
  switch (target) {
    case "player":
      return [player];
    case "all":
      return [
        "mainAttacker",
        "attackerAlly",
        "attackerSecondAlly",
        "mainDefender",
        "firstDefenderAlly",
        "secondDefenderAlly",
        "garrison",
      ];
    case "ally":
      return getAllyes(player);
    default:
      break;
  }
}

export const isAttacker = (player) => {
  return (
    player === "mainAttacker" ||
    player === "attackerAlly" ||
    player === "attackerSeconAlly"
  );
};

export const getInitialBuff = (player, buff, index) => {
  return {
    ...buff,
    player,
    value: buff.value[index ?? buff.valueIndex],
    description: buff.description[index ?? buff.valueIndex],
  };
};
getInitialBuff.propTypes = {
  player: playerTypes,
  buff: buffTypes,
};

export const applyBuffToUnit = (buff, applyFnc) => {
  const { player, appliedOn, target, targetType, property, value, units } =
    buff;
  switch (appliedOn) {
    case "homeland":
      units.forEach((unit) => {
        getBuffPlayers(target, player).forEach((player) => {
          applyFnc(player, unit, property, value);
        });
      });

      break;

    default:
      break;
  }
};
