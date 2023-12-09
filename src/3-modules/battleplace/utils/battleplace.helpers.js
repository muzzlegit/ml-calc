import PropTypes from "prop-types";
import { attackIndexTypes, buildingTypes } from "utils/types/types";
import buildingsData from "../data/towers.json";
import canvas from "../graphics/images/battlefields.webp";
import canvasMap from "../graphics/maps/battlefields.map.js";

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
    buildingsData[isMonsters ? `monsters_${type}` : type][`level${level}`];
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
getBuildingData.propTypes = {
  type: buildingTypes.isRequired,
  id: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  attackIndex: attackIndexTypes,
  quantity: PropTypes.number.isRequired,
  isMonsters: PropTypes.bool.isRequired,
};
