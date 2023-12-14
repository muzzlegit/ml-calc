import heroes from "../data//heroes.json";
import canvas from "../graphics/images/heroAssets.webp";
import canvasMap from "../graphics/maps/heroAssets.map.json";

export const getHeroPicture = (name, race) => {
  const image = `url(${canvas}) ${
    race ? canvasMap[name][race].coordinate : canvasMap[name].coordinate
  }`;
  const width = race ? canvasMap[name][race].width : canvasMap[name].width;
  const height = race ? canvasMap[name][race].height : canvasMap[name].height;

  return { image, width, height };
};

export const getHeroImageName = (player) => {
  switch (player) {
    case "mainAttacker":
      return "attacker";
    case "attackerAlly":
      return "attackerAlly";
    case "attackerSecondAlly":
      return "attackerAlly";
    case "mainDefender":
      return "defender";
    case "firstDefenderAlly":
      return "defenderAlly";
    case "secondDefenderAlly":
      return "defenderAlly";
    default:
      break;
  }
};

export const getHeroesClasses = () => {
  let list = {};
  heroes.reduce((acc, hero) => {
    if (!acc.includes(hero.class)) {
      acc = [...acc, hero.class];
      list[hero.class] = hero.class;
    }
    return acc;
  }, []);
  return list;
};

export const getBranchesList = (heroClass) => {
  if (!heroClass) return {};
  let list = {};
  heroes.reduce((acc, hero) => {
    if (heroClass === hero.class) {
      list[hero.title] = hero.title;
    }
    return acc;
  }, []);
  return list;
};

export const getHeroBranch = (heroClass, heroBranch, id) => {
  const hero = heroes.find(
    (hero) => heroClass === hero.class && heroBranch === hero.title
  );
  const branchSkill = hero.skills.map((skill) => ({
    ...skill,
    owner: id,
    ownerDescription: hero.title,
  }));
  return branchSkill;
};
