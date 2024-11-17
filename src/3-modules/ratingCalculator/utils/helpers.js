import { nanoid } from "nanoid";
import data from "../data.json";
import canvasMap from "../graphics/images.map.json";
import canvas from "../graphics/images.webp";

export function getImageData(section, name) {
  return {
    image: `url(${canvas}) ${canvasMap[section][name].coordinate}`,
    width: canvasMap[section][name].width,
    height: canvasMap[section][name].height,
  };
}

export function getInitialBuildingsList() {
  if (!data?.resource || !data?.buildings) return [];
  console.log("dffd");
  const resources = data.resource;
  const buildings = data.buildings;
  const list = [];
  for (const [building, data] of Object.entries(buildings)) {
    const buildingLevels = {};
    for (const [level, resourcesUsed] of Object.entries(data)) {
      let rating = 0;
      for (const [resource, value] of Object.entries(resourcesUsed)) {
        rating += value * (resources[resource] || 1);
      }
      buildingLevels[level] = { rating, quantity: 0 };
    }
    list.push({ id: nanoid(), name: building, levels: buildingLevels });
  }
  return list;
}

export function getRatingData(rating, server) {
  const ratingData = data?.rating;
  let nextRankIndex = 0;
  const formattedRatingArray = Object.entries(ratingData).map(
    ([rank, data], index) => {
      const currentRating = data?.rating[server];
      if (!nextRankIndex && currentRating > rating) nextRankIndex = index;
      return { rank, level: data.level, rating: currentRating };
    }
  );

  return formattedRatingArray[nextRankIndex ? nextRankIndex - 1 : 4];
}

export function getRatingList(server) {
  const ratingData = data?.rating;
  return Object.entries(ratingData).map(([rank, data]) => ({
    rank,
    rating: data.rating[server],
  }));
}

export function getElementRating(elementData, quantity) {
  const resource = data.resource;
  let rating = 0;
  Object.entries(elementData).forEach(([key, value]) => {
    rating += value * resource[key];
  });
  return rating * quantity;
}

export function getElementsLists() {
  return {
    buildings: data.buildings,
    units: data.units,
  };
}

export function getUnitsList() {
  return Object.keys(data?.units);
}
export function getResourcesList() {
  return Object.keys(data?.resource);
}

export function getUnitRating(unit, level, quantity) {
  if (!data?.units?.[unit]?.[level]) return 0;
  let rating = 0;
  const resources = data.resource;
  const unitData = data.units[unit][level];
  for (const resource in unitData) {
    rating += unitData[resource] * resources[resource] * quantity;
  }
  return rating;
}

export function getRecourceRating(resource, quantity) {
  if (!data?.resource?.[resource]) return 0;
  return Math.round(quantity * data.resource[resource]);
}

export function getServerCoefficient(server) {
  return data?.server[server];
}
