// -------------------- RACE DATA-------------------------
export function getHomeland(playerRace) {
  switch (playerRace) {
    case "undead":
      return "cursedForest";
    case "demon":
      return "deadLand";
    case "drow":
      return "cursedForest";
    case "human":
      return "hollyLand";
    case "elf":
      return "magicForest";
    default:
      return "none";
  }
}

export function getFraction(playerRace) {
  switch (playerRace) {
    case "undead":
      return "dark";
    case "demon":
      return "dark";
    case "drow":
      return "dark";
    case "human":
      return "light";
    case "elf":
      return "light";
    default:
      return "none";
  }
}
