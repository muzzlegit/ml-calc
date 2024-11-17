import { UNITS_PERSECUTION } from "modules/units/utils/units.constants";
import { deepCopy } from "utils/helpers";

export function apllyPersecutionDamage(damage, currentArmy) {
  console.log("damage", damage);
  const army = deepCopy(currentArmy);
  let persecutionUnitsAmount = {
    swordsman: 0,
    cavalier: 0,
    flying: 0,
    archer: 0,
  };
  let persecutionDamagePerUnit = {
    swordsman: 0,
    cavalier: 0,
    flying: 0,
    archer: 0,
  };
  for (const player in army) {
    for (const unit in army[player]) {
      const { amount } = army[player][unit];
      if (UNITS_PERSECUTION[unit] && amount) {
        persecutionUnitsAmount[unit] += amount;
      }
    }
  }
  for (const unit in persecutionDamagePerUnit) {
    persecutionDamagePerUnit[unit] =
      (damage[UNITS_PERSECUTION[unit].pursued] ?? 0) /
      (persecutionUnitsAmount[unit] ?? 1);
  }
  for (const player in army) {
    for (const unit in army[player]) {
      const { amount, totalDefense, health, healthRate } = army[player][unit];
      const unitHealth = health + health * healthRate;
      const totalHealth = unitHealth * amount;
      if (UNITS_PERSECUTION[unit] && amount) {
        const persecuitionDamage =
          persecutionDamagePerUnit[unit] * amount * (1 - totalDefense / 100);
        const killedUnits = Math.min(
          Math.max(
            amount -
              Math.ceil(
                (totalHealth - persecuitionDamage) /
                  (health + health * healthRate)
              ),
            0
          ),
          amount
        );
        army[player][unit].amount = Math.max(amount - killedUnits, 0);
        army[player][unit].totalKilled += killedUnits;
        army[player][unit].killedInRound += killedUnits;
      }
    }
  }
  return army;
}
