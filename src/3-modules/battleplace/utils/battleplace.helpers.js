import buildsData from "../data/towers.json";
import canvas from "../graphics/images/battlefields.webp";
import canvasMap from "../graphics/maps/battlefields.map.js";

export function getBattleplacePicture(name, race) {
  const image = `url(${canvas}) ${
    race ? canvasMap[name][race].coordinate : canvasMap[name].coordinate
  }`;
  const width = race ? canvasMap[name][race].width : canvasMap[name].width;
  const height = race ? canvasMap[name][race].width : canvasMap[name].height;

  return { image, width, height };
}

//--builds
export function getBuildData(name, level, isCastle) {
  const data =
    buildsData[isCastle ? `monsters_${name}` : name][`level${level}`];
  return data;
}
