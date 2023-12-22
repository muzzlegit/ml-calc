import artefactsCanvas from "../graphics/images/Artefacts.webp";
import iconsCanvas from "../graphics/images/ArtefactsAssets.webp";

import artefactsCanvasMap from "../graphics/maps/Artefacts.map.json";
import iconsCanvasMap from "../graphics/maps/ArtefactsAssets.map.json";

import artefacts from "../data/artefacts.json";

export const getArtefactIcon = (iconName) => {
  const image = `url(${iconsCanvas}) ${iconsCanvasMap?.[iconName].coordinate}`;
  const width = iconsCanvasMap?.[iconName].width;
  const height = iconsCanvasMap?.[iconName].height;

  return { image, width, height };
};

export const getArtefactImg = (artefactName) => {
  if (!artefactName) return null;
  const image = `url(${artefactsCanvas}) ${artefactsCanvasMap?.[artefactName]?.coordinate}`;
  const width = artefactsCanvasMap?.[artefactName]?.width;
  const height = artefactsCanvasMap?.[artefactName]?.height;

  return { image, width, height };
};

export const getKitsList = () => {
  let list = { "Выбрать комплект": "Снять комплект" };
  artefacts.reduce((acc, artefact) => {
    if (artefact?.setTitle && !acc.includes(artefact?.setTitle)) {
      acc = [...acc, artefact?.setTitle];
      list[artefact.setTitle] = artefact.setTitle;
    }
    return acc;
  }, []);
  return list;
};

export const getKitData = (kitTitle) => {
  return artefacts.find((artefact) => artefact?.setTitle === kitTitle);
};

export const getKitArtefacts = (kitTitle, isAncient, isPerfect) => {
  return artefacts
    .filter((artefact) => artefact?.set && artefact?.set === kitTitle)
    .map((artefact) => ({
      ...artefact,
      ancient: isAncient,
      perfect: isPerfect,
    }));
};

export const getArtefactsByPlace = (place) => {
  if (!place) return [];
  return artefacts.filter((artefact) => artefact.place === place);
};

export const getArtefcactBuffs = (artefact) => {
  if (!artefact) return [];
  const {
    ancient: isAncient,
    perfect: isPerfect,
    buffs: { common, perfect },
  } = artefact;
  const index = isAncient === "none" || isAncient === false ? 0 : 1;
  const commonBuffs = common.map((buff) => ({
    ...buff,
    value: [buff.value[index]],
    description: [buff.description[index]],
  }));
  return isPerfect ? [...commonBuffs, ...perfect] : commonBuffs;
};
