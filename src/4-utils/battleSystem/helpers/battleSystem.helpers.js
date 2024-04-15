import { LIMITS, UNITS_PERSECUTION } from "modules/units/utils/units.constants";
import { deepCopy } from "utils/helpers";

//dependent[handleInitialArmies, applyFortificationsDamage,shouldBattleContinue]
export function recalculateArmy(squad, round, parametrs) {
  let recalculatedSquad = {};
  for (const unit in squad) {
    const {
      amountRate,
      amount,
      attack,
      attackRate,
      health,
      defense,
      defenseLevel,
      healthRate,
      persecutionRate,
      resurrection,
      suppression,
      additionalResurrection,
      towersSuppression,
      towersSuppressionRate,
    } = squad[unit];
    //--- Визначаємо кількість юнітів
    let unitAmount = 0;
    const additionProperties = round
      ? {}
      : {
          killedInRound: 0,
          totalKilled: 0,
          resurrected: 0,
        };

    if (!round) {
      const { fearlessness, recoil } = parametrs;
      if (fearlessness) {
        unitAmount = Math.floor(amount + amount * amountRate * recoil);
      }
      unitAmount = Math.floor(amount * (1 + amountRate));
    } else {
      unitAmount = amount;
    }

    recalculatedSquad = {
      ...recalculatedSquad,
      [unit]: {
        ...squad[unit],
        //---//--- Кількість
        amount: unitAmount,
        //---//--- Атака
        totalAttack:
          ((attack ?? 0) +
            (attack ?? 0) * Math.max(attackRate ?? 0, LIMITS.attackLimit)) *
          unitAmount,
        //---//--- ЗАхист
        totalDefense: Math.max(
          Math.min(defense, Math.min(defenseLevel, LIMITS.defenseLevelLimit)),
          0
        ),
        //---//--- Здоров'я
        totalHeath:
          (health + health * Math.max(healthRate ?? 0, LIMITS.healthLimit)) *
          unitAmount,
        //---//--- Переслідування
        ...(UNITS_PERSECUTION[unit] && {
          totalPersecution:
            attack * unitAmount +
            (attack ?? 0) *
              Math.max(persecutionRate ?? 0, LIMITS.persecutionLimit),
        }),
        //---//--- Восресіння
        ...(resurrection && {
          totalResurrection:
            (resurrection + additionalResurrection) * unitAmount,
        }),
        //---///--- Властивості магів
        ...(unit === "mage" && {
          totalSuppression: Math.max(suppression * unitAmount, 0),
          totalTowersSuppression: Math.max(
            (towersSuppression + towersSuppression * towersSuppressionRate) *
              unitAmount,
            0
          ),
        }),
        ...additionProperties,
      },
    };
  }
  return deepCopy(recalculatedSquad);
}

export function getTotalUnitsAmounInArmies(armies, unitException) {
  let totalAmount = 0;
  for (const player in armies) {
    for (const unit in armies[player]) {
      const { amount } = armies[player][unit];
      if (amount > 0 && unit !== unitException) {
        totalAmount += amount;
      }
    }
  }
  return totalAmount;
}

// dependencies[recalculateArmy]
export function shouldBattleContinue(
  startArmy,
  attackers,
  defenders,
  fallback
) {
  let army = { ...deepCopy(attackers), ...deepCopy(defenders) };
  let startTotalAmount = {};
  let totalAmount = {};
  let totalFallback = {};
  let retreated = {};
  for (const player in startArmy) {
    if (!startTotalAmount[player]) startTotalAmount[player] = 0;
    for (const unit in startArmy[player]) {
      startTotalAmount[player] += startArmy[player][unit].amount;
    }
  }
  for (const player in army) {
    if (!totalAmount[player]) totalAmount[player] = 0;
    if (!totalFallback[player]) totalFallback[player] = 0;
    for (const unit in army[player]) {
      totalAmount[player] += army[player][unit].amount;
    }
  }
  for (const player in totalFallback) {
    totalFallback[player] =
      totalAmount[player] <=
      startTotalAmount[player] *
        (fallback[player] === 1 ? 0 : fallback[player]);
  }
  for (const player in army) {
    if (totalFallback[player] && totalAmount[player]) {
      retreated[player] = deepCopy(army[player]);
      for (const unit in army[player]) {
        army[player][unit].amount = 0;
      }
    }
  }
  const shouldAttackersFallback =
    totalFallback["mainAttacker"] &&
    totalFallback["attackerAlly"] &&
    totalFallback["attackerSecondAlly"];
  const shouldDefendersFallback =
    totalFallback["mainDefender"] &&
    totalFallback["firstDefenderAlly"] &&
    totalFallback["secondDefenderAlly"] &&
    totalFallback["garrison"];

  const winner =
    shouldAttackersFallback ||
    (shouldAttackersFallback && shouldDefendersFallback)
      ? "defender"
      : "atacker";

  return {
    attackersArmies: {
      mainAttacker: army.mainAttacker,
      attackerAlly: army.attackerAlly,
      attackerSecondAlly: army.attackerSecondAlly,
    },
    defendersArmies: {
      mainDefender: army.mainDefender,
      firstDefenderAlly: army.firstDefenderAlly,
      secondDefenderAlly: army.secondDefenderAlly,
      garrison: army.garrison,
    },
    retreated,
    shouldAttackersFallback,
    shouldDefendersFallback,
    winner,
  };
}

// dependencies[recalculateArmy]
export function handleInitialArmies(
  attackersArmies,
  defendersArmies,
  fearlessness,
  recoil
) {
  const attackers = {};
  const defenders = {};

  for (const attacker in attackersArmies) {
    attackers[attacker] = recalculateArmy(attackersArmies[attacker], 0, {
      fearlessness: fearlessness[attacker],
      recoil: recoil[attacker],
    });
  }

  for (const defender in defendersArmies) {
    defenders[defender] = recalculateArmy(defendersArmies[defender], 0, {
      fearlessness: fearlessness[defender],
      recoil: recoil[defender],
    });
  }
  return { attackers, defenders };
}

export function getFortificationsAttack(fortifications) {
  if (!fortifications?.length) return 0;
  let totalAttack = 0;
  fortifications.forEach((fortification) => {
    const { attack, quantity, damageRate } = fortification;
    totalAttack += (attack + attack * damageRate) * quantity;
  });
  return totalAttack;
}

// dependencies[recalculateArmy]
export function applyFortificationsDamage(armies, damagePerUnit) {
  for (const player in armies) {
    for (const unit in armies[player]) {
      const { amount } = armies[player][unit];
      if (amount && unit !== "mercenary") {
        const killedUnits = Math.max(Math.round(amount * damagePerUnit), 1);
        armies[player][unit].amount = Math.max(amount - killedUnits, 0);
        armies[player][unit].killedInRound = Math.min(amount, killedUnits);
        armies[player][unit].totalKilled += Math.min(amount, killedUnits);
      }
    }
    armies[player] = recalculateArmy(armies[player], "fortifications");
  }
  return armies;
}
