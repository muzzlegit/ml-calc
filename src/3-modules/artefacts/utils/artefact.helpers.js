import artefactsCanvas from "../graphics/images/Artefacts.webp";
import iconsCanvas from "../graphics/images/ArtefactsAssets.webp";

import artefactsCanvasMap from "../graphics/maps/Artefacts.map.json";
import iconsCanvasMap from "../graphics/maps/ArtefactsAssets.map.json";

import words from "modules/runes/data/runesWords.json";
import { nanoid } from "nanoid";
import artefacts from "../data";
import a from "../data/artefacts.json";
console.log(a);

function d(level) {
  let sas = {};
  let tit = [];
  a.filter((art) => art.level === level).forEach((art) => {
    if (art?.setTitle) {
      if (!sas[art.setTitle]) {
        sas[art.setTitle] = {};
      }
      const buffs = art.buffs.map((buff) => {
        const { id, owner, ownerDescription, title, ...rest } = buff;
        return { ...rest, type: "artefactKit", title: "Комплект " + title };
      });
      const { id, setTitle, ...rest } = art;
      sas[art.setTitle].kit = { setTitle, ...rest, buffs };
      tit = [...tit, `Комплект ${setTitle}`];
    } else {
      const title = art.set;
      const place = art.place;
      const buffs = {
        common: art.buffs.common.map((buff) => {
          const { id, owner, ownerDescription, ...rest } = buff;
          return rest;
        }),
        perfect: art.buffs.perfect.map((buff) => {
          const { id, owner, ownerDescription, ...rest } = buff;
          return rest;
        }),
      };
      if (!sas[title]) {
        sas[title] = {};
      }
      const { id, ...rest } = art;
      sas[title][place] = { ...rest, buffs };
    }
  });
  console.log("fff", sas);
  console.log(tit);
}
d(5);

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

export const getKitData = (kitTitle) => {
  const currentKit = artefacts.find(
    (artefact) => artefact?.setTitle === kitTitle
  );
  const buffs = currentKit?.buffs.map((buff) => ({ ...buff, id: nanoid() }));
  return { ...currentKit, buffs };
};

export const getKitDescription = (kit) => {
  if (!kit) return "";
  const { setTitle, buffs } = kit;
  let kitDescription = setTitle + ": " + "\n";
  if (buffs?.length) {
    buffs.forEach(({ description }) => {
      kitDescription = kitDescription + description[0] + "\n";
    });
  }
  return kitDescription.replaceAll("&", "\n");
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
  const { title, ancient, perfect, buffs, runes, sharpening, runesWords } =
    artefact;
  let artefactDescription = title + "\n";
  let runesDescription = "";
  let sharpeningsDescription = "";
  let wordDescription = "";
  if (runes.length) {
    runesDescription = "Руны:";
    runes.forEach(({ title, shortDescription, value, property }) => {
      if (title === "Йар") return;
      const formattedValue =
        property === "defense" ? value[0] : value[0] * 100 + "%";
      const sign = value[0] > 0 ? "+" : "";
      runesDescription +=
        "\n" + title + ": " + sign + formattedValue + " " + shortDescription;
    });
  }
  if (runesWords?.length) {
    wordDescription = "Рунное слово:";
    runesWords.forEach(({ title, value, property }) => {
      const formattedValue =
        property === "defense" ? value[0] : value[0] * 100 + "%";
      const sign = value[0] > 0 ? "+" : "";
      if (value[0]) {
        wordDescription += "\n" + title + ": " + sign + formattedValue;
      }
    });
  }
  if (sharpening.length) {
    sharpeningsDescription = "Заточки:";
    sharpening.forEach(({ title, shortDescription, value, propertyType }) => {
      const formattedValue =
        propertyType === "value" ? value[0] : value[0] * 100 + "%";
      const sign = value[0] > 0 ? "+" : "";
      sharpeningsDescription +=
        "\n" + title + ": " + shortDescription + " " + sign + formattedValue;
    });
  }
  if (buffs?.common?.length) {
    artefact?.buffs.common.forEach(({ description }) => {
      artefactDescription =
        artefactDescription +
        description[!ancient || ancient === "none" ? 0 : 1] +
        "\n";
    });
  }
  if (perfect && buffs?.perfect?.length) {
    artefact?.buffs.perfect.forEach(({ description }) => {
      artefactDescription = artefactDescription + description[0] + "\n";
    });
  }
  return (
    artefactDescription.replaceAll("&", "\n") +
    `${runes.length ? "\n" + runesDescription + "\n" : ""}` +
    `${runesWords?.length ? "\n" + wordDescription + "\n" : "\n"}` +
    sharpeningsDescription
  );
};

export function setIdToArtefactBuffs(player, artefact) {
  const {
    buffs: { common, perfect },
  } = artefact;
  const newId = nanoid();
  return {
    ...artefact,
    id: newId,
    player,
    buffs: {
      common: common.map((buff) => ({ ...buff, id: nanoid(), owner: newId })),
      perfect: perfect.map((buff) => ({ ...buff, id: nanoid(), owner: newId })),
    },
  };
}

export function getArtefactWithRunesWords(artefact, player) {
  if (!artefact) return null;
  const { id, place, title } = artefact;
  const runesWords = words
    .filter((word) => word.place.includes(place))
    .map((word) => ({
      ...word,
      id: nanoid(),
      player,
      owner: id,
      ownerDescription: title,
      title: [word.description[0].replaceAll("&", ". ")],
    }));
  return { ...artefact, runesWords };
}
