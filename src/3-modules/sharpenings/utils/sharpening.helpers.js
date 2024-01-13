import sharpenings from "../data/sharpening.json";
import canvasMap from "../graphics//maps/sharpenings.map.json";
import canvas from "../graphics/images/sharpenings.webp";

export const getSharpeningList = () => {
  let list = {};
  // let list = { initial: "Выбирите заточку" };
  sharpenings.forEach(({ id, title }) => {
    list[id] = title;
  });
  return list;
};

export const getSharpening = (sharpeningName) => {
  return sharpenings.find(({ title }) => title === sharpeningName);
};

export const getSharpeningImage = (sharpeningName) => {
  if (!sharpeningName) return null;
  const image = `url(${canvas}) ${canvasMap?.[sharpeningName]?.coordinate}`;
  const width = canvasMap?.[sharpeningName]?.width;
  const height = canvasMap?.[sharpeningName]?.height;

  return { image, width, height };
};
