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
    player === "attackerSecondAlly"
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

export const getBuffPlayers = (player, target) => {
  switch (target) {
    case "player":
      return [player];
    case "ally":
      switch (player) {
        case "mainAttacker":
          return ["attackerAlly", "attackerSecondAlly"];
        case "attackerAlly":
          return ["mainAttacker", "attackerSecondAlly"];
        case "attackerSecondAlly":
          return ["attackerAlly", "mainAttacker"];
        case "mainDefender":
          return ["firstDefenderAlly", "secondDefenderAlly"];
        case "firstDefenderAlly":
          return ["mainDefender", "secondDefenderAlly"];
        case "secondDefenderAlly":
          return ["firstDefenderAlly", "mainDefender"];
        default:
          return [];
      }
    case "player_ally":
      switch (player) {
        case "mainAttacker":
          return ["mainAttacker", "attackerAlly", "attackerSecondAlly"];
        case "attackerAlly":
          return ["attackerAlly", "mainAttacker", "attackerSecondAlly"];
        case "attackerSecondAlly":
          return ["attackerSecondAlly", "attackerAlly", "mainAttacker"];
        case "mainDefender":
          return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly"];
        case "firstDefenderAlly":
          return ["firstDefenderAlly", "mainDefender", "secondDefenderAlly"];
        case "secondDefenderAlly":
          return ["secondDefenderAlly", "firstDefenderAlly", "mainDefender"];
        default:
          return [];
      }
    case "enemy":
      switch (player) {
        case "mainAttacker":
          return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly"];
        case "attackerAlly":
          return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly"];
        case "attackerSecondAlly":
          return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly"];
        case "mainDefender":
          return ["mainAttacker", "attackerAlly", "attackerSecondAlly"];
        case "firstDefenderAlly":
          return ["mainAttacker", "attackerAlly", "attackerSecondAlly"];
        case "secondDefenderAlly":
          return ["mainAttacker", "attackerAlly", "attackerSecondAlly"];
        default:
          return [];
      }
    case "all":
      return [
        "mainAttacker",
        "mainDefender",
        "attackerAlly",
        "attackerSecondAlly",
        "firstDefenderAlly",
        "secondDefenderAlly",
      ];
    default:
      return [];
  }
};

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
    value: [buff.value[index ?? buff.valueIndex]],
    description: [buff.description[index ?? buff.valueIndex]],
  };
};
getInitialBuff.propTypes = {
  player: playerTypes,
  buff: buffTypes,
};

export const applyBuffToUnit = (buff, applyFnc) => {
  const { player, appliedOn, target, property, value, units } = buff;
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

export function shouldApplyToBuilding(buff) {
  if (!buff) return false;
  const { player, target } = buff;
  const isAttacker =
    player === "mainAttacker" ||
    player === "attackerAlly" ||
    player === "attackerSecondAlly";
  const isMainDefender = player === "mainDefender";
  const isBuffForEnemy = target === "enemy";

  if ((isAttacker && isBuffForEnemy) || (isMainDefender && !isBuffForEnemy))
    return true;

  return false;
}
