import canvas from "../graphics/images/heroAssets.webp";
import canvasMap from "../graphics/maps/heroAssets.map.json";

export const getHeroPicture = (name, race) => {
  const image = `url(${canvas}) ${
    race ? canvasMap[name][race].coordinate : canvasMap[name].coordinate
  }`;
  const width = race ? canvasMap[name][race].width : canvasMap[name].width;
  const height = race ? canvasMap[name][race].height : canvasMap[name].height;

  return { image, width, height };
};

export const getHeroImageName = (player) => {
  switch (player) {
    case "mainAttacker":
      return "attacker";
    case "attackerAlly":
      return "attackerAlly";
    case "attackerSecondAlly":
      return "attackerAlly";
    case "mainDefender":
      return "defender";
    case "firstDefenderAlly":
      return "defenderAlly";
    case "secondDefenderAlly":
      return "defenderAlly";
    default:
      break;
  }
};
