import units from "modules/units/data/units.json";
import { ADDITION_UNIT_PROPERTIES, UNITS } from "./units.constants";
//--- images
import demonCards from "../graphics/images/DemonCards.webp";
import drowCards from "../graphics/images/DrowCards.webp";
import elfCards from "../graphics/images/ElfCards.webp";
import humanCards from "../graphics/images/HumanCards.webp";
import monsterCard from "../graphics/images/MonsterCards.webp";
import undeadCards from "../graphics/images/UndeadCards.webp";
import wizardCards from "../graphics/images/WizardCards.webp";
import unitFrames from "../graphics/images/unitsFrames.webp";
import icons from "../graphics/images/unitsIcons.webp";
//--- maps
import framesMap from "../graphics/maps/unitFrames.map.json";
import cardsMap from "../graphics/maps/unitsCards.map.json";
import iconsMap from "../graphics/maps/unitsIcons.map.json";
// ------------ DATA ---------------------------
export function getUnitData({ race, unit, level, attackIndex, initial }) {
  const fullUnit = units[race][unit];
  const index = getIndex(attackIndex);
  if (!fullUnit) return null;
  let unitData = {};
  for (const key in fullUnit) {
    if (key === "attackMax" || key === "attackMin") continue;
    unitData = {
      ...unitData,
      race,
      title: unit,
      level,
      [key]: fullUnit[key][level - 1],
    };
  }

  unitData = {
    ...unitData,
    attack: fullUnit[index][level - 1],
  };
  // if (unit !== "porter") {
  // }

  if (initial) {
    unitData = {
      ...unitData,
      level,
      ...ADDITION_UNIT_PROPERTIES.common,
      ...ADDITION_UNIT_PROPERTIES[unit],
    };
  }

  return unitData;
}

function getIndex(attackIndex) {
  switch (attackIndex) {
    case "max":
      return "attackMax";
    case "min":
      return "attackMin";
    case "average":
      return "attackAverage";
    default:
      break;
  }
}

//dependencies [getUnitData]
export function getInitialUnitsData(race, level) {
  let units = {};
  UNITS.forEach(
    (unit) =>
      (units = {
        ...units,
        [unit]: getUnitData({
          race,
          unit,
          level,
          attackIndex: "min",
          initial: true,
        }),
      })
  );
  return units;
}

// ----------- GRAPHICS --------------

export function getUnitIcon(unit) {
  const image = `url(${icons}) ${iconsMap[unit].coordinate}`;
  const imageWidth = iconsMap[unit].width;
  const imageHeight = iconsMap[unit].height;

  return { image, imageWidth, imageHeight };
}

export function getUnitPicture(unit, level, race) {
  let card;
  switch (race) {
    case "undead":
      card = undeadCards;
      break;
    case "demon":
      card = demonCards;
      break;
    case "drow":
      card = drowCards;
      break;
    case "human":
      card = humanCards;
      break;
    case "elf":
      card = elfCards;
      break;
    case "wizard":
      card = wizardCards;
      break;
    case "monsters":
      card = monsterCard;
      break;
    default:
      break;
  }
  const image = `url(${card}) ${cardsMap[unit][level - 1]}`;
  const imageWidth = cardsMap.width;
  const imageHeight = cardsMap.height;

  return { image, imageWidth, imageHeight };
}

export function getUnitFrame(level, race) {
  const imageWidth = framesMap.width;
  const imageHeight = framesMap.height;
  const image =
    level === 4
      ? `url(${unitFrames}) ${framesMap[race]}`
      : `url(${unitFrames}) ${framesMap.default}`;

  return { image, imageWidth, imageHeight };
}

export function getRaceName(race) {
  switch (race) {
    case "undead":
      return "Нежить";
    case "demon":
      return "Демоны";
    case "drow":
      return "Темные Эльфы";
    case "human":
      return "Рыцари";
    case "elf":
      return "Светлые Эльфы";
    case "wizard":
      return "Волшебник";
    case "monsters":
      return "Монстры";
    case "Нежить":
      return "undead";
    case "Демоны":
      return "demon";
    case "Темные Эльфы":
      return "drow";
    case "Рыцари":
      return "human";
    case "Светлые Эльфы":
      return "elf";
    case "Волшебник":
      return "wizard";
    case "Монстры":
      return "monsters";
    default:
      return "Расса не выбрана";
  }
}
