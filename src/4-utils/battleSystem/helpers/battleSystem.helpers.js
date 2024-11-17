import { LIMITS, UNITS_PERSECUTION } from "modules/units/utils/units.constants";
import { deepCopy } from "utils/helpers";
import { apllyPersecutionDamage } from "./applyPersecutionDamage";
import { ATTACKERS, DEFENDERS } from "./battleSystem.constants";
import { getTowersAttack } from "./handleTowers";

//dependent[handleInitialArmies, applyFortificationsDamage,shouldBattleContinue]
export function recalculateArmy(squad, round, parametrs) {
  let recalculatedSquad = {};
  let unitAmount = 0;
  let retreated = 0;
  for (const unit in squad) {
    const {
      amountRate,
      amount,
      attack,
      attackAverage,
      attackRate,
      health,
      defense,
      defenseLevel,
      healthRate,
      persecutionRate,
      resurrection,
      resurrectionRate,
      perfectResurrection,
      suppression,
      additionalResurrection,
      roundAttackRate,
      towersSuppression,
      towersSuppressionRate,
      terrainModification,
    } = squad[unit];
    //--- Визначаємо кількість юнітів
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
        retreated = Math.abs(Math.floor(amount * amountRate * recoil));
      } else {
        unitAmount = Math.floor(amount + amount * amountRate);
        retreated = Math.abs(Math.floor(amount * amountRate));
      }
    } else {
      unitAmount = amount;
    }
    //================================
    const roundAttack = roundAttackRate
      ? (attack ?? 0 * Math.max(roundAttackRate ?? 0, LIMITS.attackLimit)) *
        round
      : 0;

    const totalAttack =
      ((attack ?? 0) +
        (attack ?? 0) * Math.max(attackRate ?? 0, LIMITS.attackLimit) +
        roundAttack) *
      unitAmount;

    const totalAverageAttack =
      ((attackAverage ?? 0) +
        (attackAverage ?? 0) * Math.max(attackRate ?? 0, LIMITS.attackLimit) +
        roundAttack) *
      unitAmount;
    const totalDefense = Math.max(
      Math.min(defense, Math.min(defenseLevel, LIMITS.defenseLevelLimit)),
      0
    );
    //================================
    recalculatedSquad = {
      ...recalculatedSquad,
      [unit]: {
        ...squad[unit],
        //---//--- Кількість
        amount: unitAmount,
        //---//--- Атака
        totalAttack,
        totalAverageAttack,
        //---//--- ЗАхистG
        totalDefense,
        //---//--- Здоров'я
        totalHealth:
          (health + health * Math.max(healthRate ?? 0, LIMITS.healthLimit)) *
          unitAmount,
        //---//--- Переслідування
        ...(UNITS_PERSECUTION[unit] && {
          totalPersecution:
            (totalAttack ?? 0) +
            (totalAttack ?? 0) *
              Math.max(persecutionRate ?? 0, LIMITS.persecutionLimit),
        }),
        //---//--- Восресіння
        ...(resurrection && {
          totalResurrection:
            (resurrection +
              additionalResurrection +
              (resurrection + additionalResurrection) *
                (resurrectionRate + perfectResurrection)) *
            unitAmount,
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
        ...(!round && { retreated }),
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

// dependencies[recalculateArmy]G
export function shouldBattleContinue(
  startArmy,
  attackers,
  defenders,
  fallback,
  retreated,
  round
) {
  let army = { ...deepCopy(attackers), ...deepCopy(defenders) };
  let startTotalAmount = {};
  let totalAmount = {};
  let totalFallback = {};
  let currentRetreated = { ...retreated };
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
      currentRetreated[player] = { army: deepCopy(army[player]), round };
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

  if (shouldAttackersFallback || shouldDefendersFallback) {
    if (Object.keys(currentRetreated).length) {
      for (const player in currentRetreated) {
        army[player] = currentRetreated[player].army;
      }
    }
  }
  const winner =
    shouldAttackersFallback ||
    (shouldAttackersFallback && shouldDefendersFallback)
      ? "defender"
      : "attacker";

  const shouldContinue = !(shouldAttackersFallback || shouldDefendersFallback);

  const {
    mainAttacker,
    attackerAlly,
    attackerSecondAlly,
    mainDefender,
    firstDefenderAlly,
    secondDefenderAlly,
    garrison,
  } = deepCopy(army);

  return {
    attackersArmies: {
      mainAttacker,
      attackerAlly,
      attackerSecondAlly,
    },
    defendersArmies: {
      mainDefender,
      firstDefenderAlly,
      secondDefenderAlly,
      garrison,
    },
    currentRetreated,
    shouldAttackersFallback,
    shouldDefendersFallback,
    shouldContinue,
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

// dependencies[deepCopy]
export function resurrection(attackers, defenders) {
  const army = deepCopy({ ...attackers, ...defenders });
  const resurrectionObj = {};
  let attackersKilledUnits = 0;
  let defendersKilledUnits = 0;
  let attackersFinishingOff = 0;
  let defendersFinishingOff = 0;

  for (const player in army) {
    resurrectionObj[player] = {
      resurrection: 0,
      killed: 0,
      resurrected: 0,
      resurrectedAlly: 0,
      resurrectedByAlly: 0,
    };
    resurrectionObj[player].resurrection =
      army[player].healer.totalResurrection;
    for (const unit in army[player]) {
      const { totalKilled, finishingOff, perfectResurrection } =
        army[player][unit];
      if (totalKilled) {
        resurrectionObj[player].killed += totalKilled;
        if (ATTACKERS.includes(player)) {
          attackersKilledUnits += totalKilled;
          attackersFinishingOff +=
            perfectResurrection > 0 ? 0 : finishingOff ?? 0;
        } else {
          defendersKilledUnits += totalKilled;
          defendersFinishingOff +=
            perfectResurrection > 0 ? 0 : finishingOff ?? 0;
        }
      }
    }
  }
  let canBeAttackersResurrected = Math.round(
    attackersKilledUnits * (1 + attackersFinishingOff)
  );
  let canBeDefendersResurrected = Math.round(
    defendersKilledUnits * (1 + defendersFinishingOff)
  );

  console.log(
    "atatk",
    attackersKilledUnits,
    attackersFinishingOff,
    canBeAttackersResurrected,
    "def",
    defendersKilledUnits,
    defendersFinishingOff,
    canBeDefendersResurrected
  );
  // --- проводимо воскресіння юнітів у кожного гравця
  [...ATTACKERS, ...DEFENDERS].forEach((player) => {
    let canBeResurrected = ATTACKERS.includes(player)
      ? canBeAttackersResurrected
      : canBeDefendersResurrected;
    while (
      resurrectionObj[player].resurrection > 0 &&
      resurrectionObj[player].killed > 0 &&
      canBeResurrected > 0
    ) {
      for (const unit in army[player]) {
        canBeResurrected = ATTACKERS.includes(player)
          ? canBeAttackersResurrected
          : canBeDefendersResurrected;
        const { totalKilled } = army[player][unit];
        if (
          totalKilled > 0 &&
          resurrectionObj[player].resurrection > 0 &&
          canBeResurrected > 0
        ) {
          army[player][unit].amount += 1;
          army[player][unit].totalKilled -= 1;
          army[player][unit].resurrected += 1;
          resurrectionObj[player].resurrection -= 1;
          resurrectionObj[player].killed -= 1;
          resurrectionObj[player].resurrected += 1;
          if (ATTACKERS.includes(player)) {
            canBeAttackersResurrected -= 1;
          } else {
            canBeDefendersResurrected -= 1;
          }
        }
      }
    }
  });

  ATTACKERS.forEach((player) => {
    if (resurrectionObj[player].resurrection) {
      const allyes = ATTACKERS.filter((player) => player != player);
      while (
        resurrectionObj[player].resurrection > 0 &&
        canBeAttackersResurrected > 0
      ) {
        let shouldContinue = false;
        allyes.forEach((ally) => {
          for (const unit in army[ally]) {
            const { totalKilled } = army[ally][unit];
            shouldContinue += totalKilled;
          }
        });
        allyes.forEach((ally) => {
          for (const unit in army[ally]) {
            const { totalKilled } = army[ally][unit];
            if (
              totalKilled > 0 &&
              resurrectionObj[player].resurrection > 0 &&
              canBeAttackersResurrected > 0
            ) {
              army[ally][unit].amount += 1;
              army[ally][unit].totalKilled -= 1;
              army[ally][unit].resurrected += 1;
              resurrectionObj[player].resurrection -= 1;
              resurrectionObj[player].resurrectedAlly += 1;
              resurrectionObj[ally].resurrectedByAlly += 1;
              canBeAttackersResurrected -= 1;
            }
          }
        });

        if (!shouldContinue) break;
      }
    }
  });

  DEFENDERS.forEach((player) => {
    if (resurrectionObj[player].resurrection) {
      const allyes = DEFENDERS.filter((player) => player != player);
      while (
        resurrectionObj[player].resurrection > 0 &&
        canBeDefendersResurrected > 0
      ) {
        let shouldContinue = false;
        allyes.forEach((ally) => {
          for (const unit in army[ally]) {
            const { totalKilled } = army[ally][unit];
            shouldContinue += totalKilled;
          }
        });
        allyes.forEach((ally) => {
          for (const unit in army[ally]) {
            const { totalKilled } = army[ally][unit];
            if (
              totalKilled > 0 &&
              resurrectionObj[player].resurrection > 0 &&
              canBeDefendersResurrected > 0
            ) {
              army[ally][unit].amount += 1;
              army[ally][unit].totalKilled -= 1;
              army[ally][unit].resurrected += 1;
              resurrectionObj[player].resurrection -= 1;
              resurrectionObj[player].resurrectedAlly += 1;
              resurrectionObj[ally].resurrectedByAlly += 1;
              canBeDefendersResurrected -= 1;
            }
          }
        });

        if (!shouldContinue) break;
      }
    }
  });
  for (const player in army) {
    for (const unit in army[player]) {
      const { amount, retreated } = army[player][unit];
      army[player][unit] = {
        ...army[player][unit],
        amount: amount + retreated,
        retreated: 0,
      };
    }
    army[player] = recalculateArmy(army[player], 1);
  }
  const {
    mainAttacker,
    attackerAlly,
    attackerSecondAlly,
    mainDefender,
    firstDefenderAlly,
    secondDefenderAlly,
    garrison,
  } = deepCopy(army);
  console.log("first", deepCopy(army));
  return {
    attackersArmies: {
      mainAttacker,
      attackerAlly,
      attackerSecondAlly,
    },
    defendersArmies: {
      mainDefender,
      firstDefenderAlly,
      secondDefenderAlly,
      garrison,
    },
  };
}

// dependencies[deepCopy]
export function battleRounds(
  attackersArmies,
  defendersArmies,
  isDefendersRound,
  towers,
  { roundDamage, attackBoost, towerLevelReduce },
  round
) {
  console.log("round", round);
  let attackers = deepCopy(attackersArmies);
  let defenders = deepCopy(defendersArmies);
  let attackersDamage = 0;
  let averageAttackersDamage = 0;
  let defenderUnitsAmount = 0;
  let attakersPersecutionDamage = {
    swordsman: 0,
    cavalier: 0,
    flying: 0,
    archer: 0,
  };
  let defendersPersecutionUnitsAmount = {
    swordsman: 0,
    cavalier: 0,
    flying: 0,
    archer: 0,
  };
  let defendersMageSuppression = 0;
  let defendersMageTowersSuppression = 0;

  function recalculateAttakersParametrs(attackers) {
    attackersDamage = 0;
    averageAttackersDamage = 0;
    attakersPersecutionDamage = {
      swordsman: 0,
      cavalier: 0,
      flying: 0,
      archer: 0,
    };
    defendersMageTowersSuppression = 0;
    for (const player in attackers) {
      for (const unit in attackers[player]) {
        const {
          totalAttack,
          totalAverageAttack,
          totalPersecution,
          killedInRound,
          amount,
        } = attackers[player][unit];
        attackersDamage += totalAttack + totalAttack * attackBoost[player];
        if (isDefendersRound && player === "mainDefender") {
          averageAttackersDamage += totalAverageAttack;
        }
        if (UNITS_PERSECUTION[unit]) {
          attakersPersecutionDamage[unit] += totalPersecution;
        }
      }
    }
  }
  function recalculateDefendersParametrs(defenders) {
    defenderUnitsAmount = 0;
    defendersMageSuppression = 0;
    defendersPersecutionUnitsAmount = {
      swordsman: 0,
      cavalier: 0,
      flying: 0,
      archer: 0,
    };
    for (const player in defenders) {
      for (const unit in defenders[player]) {
        const {
          amount,
          totalSuppression,
          totalTowersSuppression,
          killedInRound,
        } = defenders[player][unit];
        defenderUnitsAmount += amount;
        if (unit === "mage") defendersMageSuppression += totalSuppression;
        if (unit === "mage")
          defendersMageTowersSuppression += totalTowersSuppression;
        if (UNITS_PERSECUTION[unit]) {
          defendersPersecutionUnitsAmount[unit] += amount;
        }
      }
    }
  }
  recalculateAttakersParametrs(attackers);
  recalculateDefendersParametrs(defenders);
  console.log("atack", attackersDamage);
  //--- атака кожного раунду
  const attackersRoundDamage = isDefendersRound
    ? roundDamage.mainDefender +
      roundDamage.firstDefenderAlly +
      roundDamage.secondDefenderAlly
    : roundDamage.mainAttacker +
      roundDamage.attackerAlly +
      roundDamage.attackerSecondAlly;
  attackersDamage += attackersRoundDamage;
  //---атака башен
  if (isDefendersRound && towers.length) {
    attackersDamage += Math.max(
      getTowersAttack(towers, averageAttackersDamage) -
        defendersMageTowersSuppression,
      0
    );
  }
  //--- Враховуємо поглинання атаки магами
  if (defendersMageSuppression > 0) attackersDamage -= defendersMageSuppression;

  // --- Вираховуємо атаку на 1 юніта
  let damagePerUnit = attackersDamage / defenderUnitsAmount;
  // --- Вираховуємо кількість вбитих юнітів в кожній армії
  let checker = false;
  let shouldContinue = true;
  let isFirstRoundIteration = true;
  while (shouldContinue) {
    let residualDamage = 0;
    for (const player in defenders) {
      for (const unit in defenders[player]) {
        const {
          amount,
          totalDefense,
          totalAttack,
          totalHealth,
          health,
          healthRate,
        } = defenders[player][unit];
        if (amount) {
          if (player === "mainDefender" || player === "firstDefenderAlly") {
            console.log(player, unit, "ataci", totalAttack);
          }
          const damage = amount * damagePerUnit * (1 - totalDefense / 100);

          const killedUnits = Math.min(
            Math.max(
              amount -
                Math.ceil(
                  (totalHealth - damage) / (health + health * healthRate)
                ),
              0
            ),
            amount
          );
          residualDamage += Math.abs(Math.max(damage - totalHealth, 0));
          defenders[player][unit].amount = Math.max(amount - killedUnits, 0);
          defenders[player][unit].totalKilled += killedUnits;
          defenders[player][unit].killedInRound = checker
            ? defenders[player][unit].killedInRound + killedUnits
            : killedUnits;
        }
      }
    }
    if (isFirstRoundIteration) {
      defenders = apllyPersecutionDamage(attakersPersecutionDamage, defenders);
      for (const player in defenders) {
        defenders[player] = recalculateArmy(defenders[player], round);
      }
    }
    isFirstRoundIteration = false;
    if (residualDamage) {
      for (const player in defenders) {
        defenders[player] = recalculateArmy(defenders[player], round);
      }
      recalculateDefendersParametrs(defenders);
      damagePerUnit = residualDamage / defenderUnitsAmount;
      shouldContinue = true;
      checker = true;
    } else {
      shouldContinue = false;
    }
  }
  // --- перераховуємо параметри армії
  for (const player in defenders) {
    defenders[player] = recalculateArmy(defenders[player], round, false);
  }
  return deepCopy(defenders);
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

export function getFormattedBattleResult(result, playersFlags) {
  let formattedResult = {};
  const { start, rounds, fortifications, resurrection } = result;
  for (const army in start) {
    for (const player in start[army]) {
      if (playersFlags[player]) {
        formattedResult[player] = { start: start[army][player] };
      }
    }
  }
  for (const army in fortifications) {
    for (const player in fortifications[army]) {
      if (playersFlags[player]) {
        formattedResult[player] = {
          ...formattedResult[player],
          fortifications: fortifications[army][player],
        };
      }
    }
  }
  for (const round in rounds) {
    for (const army in rounds[round]) {
      for (const player in rounds[round][army])
        if (playersFlags[player]) {
          const playerArmy = rounds[round][army][player];
          if (!formattedResult[player].rounds)
            formattedResult[player].rounds = { [round]: {} };
          formattedResult[player].rounds[round] = {
            [round]: playerArmy,
          };
        }
    }
  }

  for (const army in resurrection) {
    for (const player in resurrection[army]) {
      if (playersFlags[player]) {
        formattedResult[player] = {
          ...formattedResult[player],
          resurrection: resurrection[army][player],
        };
      }
    }
  }
  return formattedResult;
}

export function getResultArmyProperty(army) {
  let armyProperties = { totalAttack: 0, totalHealth: 0, totalAmount: 0 };
  let unitsProperties = {};
  for (const unit in army) {
    const {
      amount,
      totalAttack,
      totalHealth,
      totalPersecution,
      totalSuppression,
      totalTowersSuppression,
    } = army[unit];

    armyProperties.totalAmount += amount;
    armyProperties.totalAttack += totalAttack;
    armyProperties.totalHealth += totalHealth;
    unitsProperties = {
      ...unitsProperties,
      [unit]: {
        amount,
        totalAttack,
        totalHealth,
        ...(totalPersecution && { totalPersecution }),
        ...(totalSuppression && { totalSuppression }),
        ...(totalTowersSuppression && { totalTowersSuppression }),
      },
    };
  }
  return { armyProperties, unitsProperties };
}

export function getUnitUIName(unit) {
  switch (unit) {
    case "porter":
      return "Носильщики";
    case "swordman":
      return "Воины";
    case "cavalier":
      return "Всадники";
    case "flying":
      return "Летающие";
    case "archer":
      return "Лучники";
    case "healer":
      return "Целители";
    case "mercenary":
      return "Наемники";
    case "mage":
      return "Маги";
    default:
      return unit;
  }
}
export function getPlayerUIName(player) {
  switch (player) {
    case "mainAttacker":
      return "Атакующий";
    case "attackerAlly":
      return "Союзник атакующего";
    case "attackerSecondAlly":
      return "Союзник атакующего";
    case "mainDefender":
      return "Защитник";
    case "firstDefenderAlly":
      return "Союзник защитника";
    case "secondDefenderAlly":
      return "Союзник защитника";
    default:
      return [];
  }
}
