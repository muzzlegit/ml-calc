import artefactsCanvas from "../graphics/images/Artefacts.webp";
import iconsCanvas from "../graphics/images/ArtefactsAssets.webp";

import artefactsCanvasMap from "../graphics/maps/Artefacts.map.json";
import iconsCanvasMap from "../graphics/maps/ArtefactsAssets.map.json";

import { nanoid } from "nanoid";
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
      list[artefact.setTitle] = artefact.setTitle + ` [${artefact.level} ур]`;
    }
    return acc;
  }, []);
  return list;
};

export const getKitData = (player, kitTitle) => {
  const kit = artefacts.find((artefact) => artefact?.setTitle === kitTitle);
  return {
    ...kit,
    buffs: kit.buffs.map((buff) => ({ ...buff, id: buff.id + "_" + player })),
  };
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

export const getArtefactBuffs = (artefact) => {
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

export const getArtefactDescription = (artefact) => {
  if (!artefact) return "Выбирите артефакт";
  const { title, ancient, perfect, buffs } = artefact;
  let artefactDescription = title + "\n";
  if (buffs?.common?.length) {
    artefact?.buffs.common.forEach(({ description }) => {
      artefactDescription =
        artefactDescription + description[ancient ? 1 : 0] + "\n";
    });
  }
  if (perfect && buffs?.perfect?.length) {
    artefact?.buffs.perfect.forEach(({ description }) => {
      artefactDescription = artefactDescription + description[0] + "\n";
    });
  }
  return artefactDescription.replaceAll("&", "\n");
};

export function setIdToArtefact(artefact) {
  const {
    buffs: { common, perfect },
  } = artefact;
  const newId = nanoid();
  return {
    ...artefact,
    id: newId,
    buffs: {
      common: common.map((buff) => ({ ...buff, id: nanoid(), owner: newId })),
      perfect: perfect.map((buff) => ({ ...buff, id: nanoid(), owner: newId })),
    },
  };
}
