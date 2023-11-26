import canvas from "../graphics/images/battlefields.webp";
import canvasMap from "../graphics/maps/battlefields.map.js";

export function getBattleplacePicture(name) {
  const image = `url(${canvas}) ${canvasMap[name].coordinate}`;
  const width = canvasMap[name].width;
  const height = canvasMap[name].height;

  return { image, width, height };
}

export function getPlacePicture(name, race) {
  const image = `url(${canvas}) ${canvasMap[name][race].coordinate}`;
  const width = canvasMap[name][race].width;
  const height = canvasMap[name][race].height;

  return { image, width, height };
}
