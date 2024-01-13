import buildingsData from "../data/towers.json";
import canvas from "../graphics/images/battlefields.webp";
import standardsCanvas from "../graphics/images/standards.png";
import canvasMap from "../graphics/maps/battlefields.map.js";
import standardsCanvasMap from "../graphics/maps/standards.map.json";

export function getBattleplacePicture(name, race) {
  const image = `url(${canvas}) ${
    race ? canvasMap[name][race].coordinate : canvasMap[name].coordinate
  }`;
  const width = race ? canvasMap[name][race].width : canvasMap[name].width;
  const height = race ? canvasMap[name][race].height : canvasMap[name].height;

  return { image, width, height };
}

//--builds
export function getBuildingData(
  type,
  id,
  level,
  attackIndex,
  quantity,
  isMonsters
) {
  const data =
    buildingsData[isMonsters ? `monsters_${type}` : type][
      `level${isMonsters && level === 8 ? 7 : level}`
    ];
  const { attackMin, attackMax, ...rest } = data;
  switch (type) {
    case "tower":
      return {
        id,
        type,
        attack: attackIndex === "max" ? attackMax : attackMin,
        ...rest,
      };
    case "magicTower":
      return { id, type, ...rest };
    case "fortification":
      return {
        id,
        type,
        quantity,
        race: isMonsters ? "monsters" : "units",
        ...rest,
      };
    case "gate":
      return { id, type, ...rest };
    default:
      return null;
  }
}

export const getSpeciaalizationDescription = (buffs, index) => {
  return buffs
    .map(({ description }) => {
      return `${description[index]}`;
    })
    .toString()
    .replaceAll(",", "\n");
};

export function getStandardsPicture(name) {
  const image = `url(${standardsCanvas}) ${standardsCanvasMap[name].coordinate}`;
  const width = standardsCanvasMap[name].width;
  const height = standardsCanvasMap[name].height;

  return { image, width, height };
}

export const getStandartDescription = (standard) => {
  return (
    standard.buffs[0].description[0] + ` ${standard.buffs[0].value[0] * 100}%`
  );
};
