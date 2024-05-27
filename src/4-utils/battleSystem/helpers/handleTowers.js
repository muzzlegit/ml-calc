import { getBuildingData } from "modules/battleplace/utils/battleplace.helpers";

export function handleTowersReduce(
  towers,
  isMonsters,
  army,
  { mainAttacker, attackerAlly, attackerSecondAlly }
) {
  const shouldReduce = mainAttacker || attackerAlly || attackerSecondAlly;

  if (!shouldReduce || !towers.length) return towers;
  let averageDamage = 0;
  let maxIndex = 0;
  let maxAttack = 0;
  towers.forEach((tower, index) => {
    const { type, attack, damageRate, multilier } = tower;
    if (type === "magicTower") {
      for (const player in army) {
        for (const unit in army[player]) {
          const { totalAverageAttack } = army[player][unit];
          averageDamage += totalAverageAttack;
        }
      }
    }
    const fullAttack =
      type === "magicTower"
        ? (averageDamage + averageDamage * damageRate) * multilier
        : attack + attack * damageRate;
    maxAttack = fullAttack > maxAttack ? fullAttack : maxAttack;
    maxIndex = fullAttack > maxAttack ? index : maxIndex;
  });
  const { type, attackIndex, level, id } = towers[maxIndex];
  const remainingTower = towers.filter((tower) => tower.id !== id);
  if (level - 1 > 0) {
    const reducedTower = getBuildingData(
      type,
      id,
      level - 1,
      attackIndex,
      1,
      isMonsters
    );
    return [reducedTower, ...remainingTower];
  } else {
    return remainingTower ?? [];
  }
}

export function getTowersAttack(towers, averageArmyAttack) {
  if (!towers.length) return 0;
  let totalAttack = 0;
  towers.forEach((tower) => {
    const { type, attack, damageRate, multiplier } = tower;
    let towerAttack = attack ?? 0;
    let towerMultiplier = multiplier ?? 0;
    if (type === "tower") {
      totalAttack += towerAttack + towerAttack * damageRate;
    }
    if (type === "magicTower") {
      if (damageRate > -1)
        totalAttack +=
          averageArmyAttack * towerMultiplier +
          averageArmyAttack * towerMultiplier * damageRate;
    }
  });
  return totalAttack;
}
