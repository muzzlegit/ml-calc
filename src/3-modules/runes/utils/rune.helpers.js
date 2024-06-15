import { nanoid } from "nanoid";
import runes from "../data/runes.json";
import words from "../data/runesWords.json";
import canvasMap from "../graphics//maps/runes.map.json";
import canvas from "../graphics/images/runes.webp";

export const getRuneImage = (runeName) => {
  const image = `url(${canvas}) ${canvasMap[runeName].coordinate}`;
  const width = canvasMap[runeName].width;
  const height = canvasMap[runeName].height;

  return { image, width, height };
};

export const getRuneData = (runeName) => {
  return runes.find(({ title }) => title === runeName);
};

export function getArtefactsRunesWords(artefact, player) {
  return artefact
    ? words
        .filter(({ place }) => place.includes(artefact?.place))
        .map((word) => ({
          ...word,
          id: nanoid(),
          player,
          ownerDescription: artefact.title,
          title: [word.description[0].replaceAll("&", ". ")],
        }))
    : [];
}
