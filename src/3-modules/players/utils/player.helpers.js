import { nanoid } from "nanoid";
import standards from "../data/standards.json";
import standardsCanvas from "../graphics/images/standards.webp";
import standardsCanvasMap from "../graphics/maps/standards.map.json";
// -------------------- RACE DATA-------------------------
export function getHomeland(playerRace) {
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
}

export function getFraction(playerRace) {
  switch (playerRace) {
    case "undead":
      return "dark";
    case "demon":
      return "dark";
    case "drow":
      return "dark";
    case "human":
      return "light";
    case "elf":
      return "light";
    default:
      return "none";
  }
}

export const getStandartDescription = (standard) => {
  return (
    standard.buffs[0].description[0] + ` ${standard.buffs[0].value[0] * 100}%`
  );
};

export function getStandardsBackground() {
  return {
    image: `url(${standardsCanvas}) ${standardsCanvasMap.background.coordinate}`,
    width: standardsCanvasMap.background.width,
    height: standardsCanvasMap.background.height,
  };
}

export function getStandards(player) {
  const formattedStandards = standards.map((standard) => {
    const { title } = standard;
    return {
      ...standard,
      id: nanoid(),
      player,
      picture: {
        image: `url(${standardsCanvas}) ${standardsCanvasMap[title].coordinate}`,
        width: standardsCanvasMap[title].width,
        height: standardsCanvasMap[title].height,
      },
    };
  });
  return formattedStandards.filter((standard) => {
    const { sortIndex } = standard;
    if (
      (player === "mainAttacker" ||
        player === "attackerAlly" ||
        player === "attackerSecondAlly") &&
      sortIndex === "town"
    )
      return;
    return standard;
  });
}
