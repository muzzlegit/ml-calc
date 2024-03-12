import heroes from "../data//heroes.json";
import canvas from "../graphics/images/heroAssets.webp";
import heroesCanvas from "../graphics/images/heroes.webp";
import canvasMap from "../graphics/maps/heroAssets.map.json";
import heroesCanvasMap from "../graphics/maps/heroes.map.json";

export const getHeroAssetsIcon = (name, race) => {
  const image = `url(${canvas}) ${
    race ? canvasMap[name][race].coordinate : canvasMap[name].coordinate
  }`;
  const width = race ? canvasMap[name][race].width : canvasMap[name].width;
  const height = race ? canvasMap[name][race].height : canvasMap[name].height;

  return { image, width, height };
};

export const getHeroPicture = (name, race) => {
  console.log(name);
  if (!name)
    return {
      image: `url(${canvas}) ${canvasMap?.backgrounds[race]?.coordinate}`,
      width: canvasMap?.backgrounds?.[race]?.width,
      height: canvasMap?.backgrounds?.[race]?.height,
    };
  return {
    image: `url(${heroesCanvas})${heroesCanvasMap?.[name]?.coordinate}`,
    width: heroesCanvasMap?.[name]?.width,
    height: heroesCanvasMap?.[name]?.height,
  };
};

export const getHeroSkillPicture = (name) => {
  if (!canvasMap?.skills[name]) return "dfdf";
  const image = `url(${canvas}) ${canvasMap.skills?.[name].coordinate}`;
  const width = canvasMap.skills?.[name].width;
  const height = canvasMap.skills?.[name].height;

  return { image, width, height };
};

export const getHeroImageName = (player, isMonsters) => {
  switch (player) {
    case "mainAttacker":
      return isMonsters ? "monster" : "attacker";
    case "attackerAlly":
      return isMonsters ? "monsterAlly" : "attackerAlly";
    case "attackerSecondAlly":
      return isMonsters ? "monsterAlly" : "attackerAlly";
    case "mainDefender":
      return isMonsters ? "monster" : "defender";
    case "firstDefenderAlly":
      return isMonsters ? "monsterAlly" : "defenderAlly";
    case "secondDefenderAlly":
      return isMonsters ? "monsterAlly" : "defenderAlly";
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

export const getHeroBranch = (player, heroClass, heroBranch, id) => {
  const hero = heroes.find(
    (hero) => heroClass === hero.class && heroBranch === hero.title
  );
  const branchSkill = hero.skills.map((skill) => ({
    ...skill,
    player,
    owner: id,
    ownerDescription: hero.title,
  }));
  return branchSkill;
};
