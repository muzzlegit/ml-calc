import { useBattleplaceStore } from "modules/battleplace";
import { usePlayerStore } from "modules/players";
import { useUnitsStore } from "modules/units";
import { LIMITS, UNITS_PERSECUTION } from "modules/units/utils/units.constants";

const useBattle = () => {
  const {
    mainAttacker,
    attackerAlly,
    attackerSecondAlly,
    mainDefender,
    firstDefenderAlly,
    secondDefenderAlly,
  } = useUnitsStore((state) => state);

  const { garrison } = useBattleplaceStore((state) => state);

  const {
    mainAttacker: mainAttackerPlayer,
    attackerAlly: firstAttackerAllyPlayer,
    attackerSecondAlly: secondAttackerAllyPlayer,
    mainDefender: mainDefenderPlayer,
    firstDefenderAlly: firstDefenderAllyPlayer,
    secondDefenderAlly: secondDefenderAllyPlayer,
  } = usePlayerStore((state) => state);

  const { fortifications, towers } = useBattleplaceStore((state) => state);

  function deepCopy(object) {
    if (typeof object !== "object" || !object) return object;
    let copy;
    if (Array.isArray(object)) {
      copy = [];
      for (let i = 0; i < object.length; i++) {
        copy[i] = deepCopy(object[i]);
      }
    } else {
      copy = {};
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          copy[key] = deepCopy(object[key]);
        }
      }
    }

    return copy;
  }

  const handleBattle = () => {
    const attackers = ["mainAttacker", "attackerAlly", "attackerSecondAlly"];
    const defenders = [
      "mainDefender",
      "firstDefenderAlly",
      "secondDefenderAlly",
      "garrison",
    ];
    const battle = {};
    let retreatedArmies = {};
    const army = {
      mainAttacker: getInitialSquadParametrs(mainAttacker, mainAttackerPlayer),
      mainDefender: getInitialSquadParametrs(mainDefender, mainDefenderPlayer),
      attackerAlly: getInitialSquadParametrs(
        attackerAlly,
        firstAttackerAllyPlayer
      ),
      attackerSecondAlly: getInitialSquadParametrs(
        attackerSecondAlly,
        secondAttackerAllyPlayer
      ),
      firstDefenderAlly: getInitialSquadParametrs(
        firstDefenderAlly,
        firstDefenderAllyPlayer
      ),
      secondDefenderAlly: getInitialSquadParametrs(
        secondDefenderAlly,
        secondDefenderAllyPlayer
      ),
      garrison: getInitialSquadParametrs(garrison, {
        fearlessness: false,
        recoil: false,
      }),
    };
    battle.start = deepCopy(army);

    //--- fallbcck
    const fallback = {
      mainAttacker: mainAttackerPlayer.fallback,
      attackerAlly: firstAttackerAllyPlayer.fallback,
      attackerSecondAlly: secondAttackerAllyPlayer.fallback,
      mainDefender: mainDefenderPlayer.fallback,
      firstDefenderAlly: firstDefenderAllyPlayer.fallback,
      secondDefenderAlly: secondDefenderAllyPlayer.fallback,
      garrison: 1,
    };
    //----- BATTLE
    let rounds = 5;
    let round = 1;
    let shouldContinue = true;
    let winner = "defender";

    //--- FORTIFICATIONS ROUND
    const attackersDamage =
      mainAttackerPlayer.unitsDamage +
      firstAttackerAllyPlayer.unitsDamage +
      secondAttackerAllyPlayer.unitsDamage;

    const defendersDamage =
      mainDefenderPlayer.unitsDamage +
      firstDefenderAllyPlayer.unitsDamage +
      secondDefenderAllyPlayer.unitsDamage +
      getFortificationsAttack(fortifications);

    if (attackersDamage || defendersDamage) {
      let totalAttackerUnitsAmount = 0;
      let totalDefenderUnitsAmount = 0;
      // --- Вираховуємо загальну кількість юнітів у гравців
      attackers.forEach((player) => {
        Object.entries(army[player]).forEach(([unit, { amount }]) => {
          if (unit !== "mercenary" && amount > 0) {
            totalAttackerUnitsAmount = totalAttackerUnitsAmount + amount;
          }
        });
      });
      defenders.forEach((player) => {
        Object.entries(army[player]).forEach(([unit, { amount }]) => {
          if (unit !== "mercenary" && amount > 0) {
            totalDefenderUnitsAmount = totalDefenderUnitsAmount + amount;
          }
        });
      });
      if (totalAttackerUnitsAmount) {
        // --- Вираховуємо атаку на 1 юніта
        const damagePerUnit = defendersDamage / totalAttackerUnitsAmount;
        // --- Вираховуємо кількість вбитих юнітів в кожній армії
        attackers.forEach((player) => {
          Object.entries(army[player]).forEach(([unit, { amount }]) => {
            if (amount && unit !== "mercenary") {
              const killedUnits = Math.max(
                Math.round(amount * damagePerUnit),
                1
              );
              army[player][unit].amount = Math.max(amount - killedUnits, 0);
              army[player][unit].killed = Math.min(amount, killedUnits);
            }
          });
        });
      }
      if (totalDefenderUnitsAmount) {
        // --- Вираховуємо атаку на 1 юніта
        const damagePerUnit = attackersDamage / totalDefenderUnitsAmount;
        // --- Вираховуємо кількість вбитих юнітів в кожній армії
        defenders.forEach((player) => {
          Object.entries(army[player]).forEach(([unit, { amount }]) => {
            if (amount && unit !== "mercenary") {
              const killedUnits = Math.max(
                Math.round(amount * damagePerUnit),
                1
              );
              army[player][unit].amount = Math.max(amount - killedUnits, 0);
              army[player][unit].killed = Math.min(amount, killedUnits);
            }
          });
        });
      }
      // --- перераховуємо параметри армії та записуємо
      Object.entries(army).forEach(([player, squad]) => {
        army[player] = recalculateArmy(squad);
      });
      battle.fortification = deepCopy(army);
      const {
        army: armyAfterFallback,
        retreated,
        shouldAttackersFallback,
      } = shouldBattleContinue(battle.start, army, fallback);
      if (!shouldAttackersFallback) {
        Object.entries(armyAfterFallback).forEach(([player, squad]) => {
          army[player] = recalculateArmy(squad);
        });
      }
      retreatedArmies = { ...retreated };
      shouldContinue = !shouldAttackersFallback;
    }
    //---BATTLE ROUNDS
    if (shouldContinue) {
      while (round <= rounds) {
        let totalAttackersDamage = 0;
        let totalDefendersDamage = 0;
        let totalAttackerUnitsAmount = 0;
        let totalDefenderUnitsAmount = 0;
        let totalAttakersUnitAmount = {
          swordsman: 0,
          cavalier: 0,
          flying: 0,
          archer: 0,
        };
        let totalDefendersUnitAmount = {
          swordsman: 0,
          cavalier: 0,
          flying: 0,
          archer: 0,
        };
        let attakersPersecutionDamage = {
          swordsman: 0,
          cavalier: 0,
          flying: 0,
          archer: 0,
        };
        let defendersPersecutionDamage = {
          swordsman: 0,
          cavalier: 0,
          flying: 0,
          archer: 0,
        };
        let attackersMageSuppression = 0;
        let defendersMageSuppression = 0;
        let attackersMageTowersSuppression = 0;

        attackers.forEach((player) => {
          for (const unit in army[player]) {
            totalAttackersDamage += army[player][unit].totalAttack;
            if (UNITS_PERSECUTION[unit])
              attakersPersecutionDamage[unit] +=
                army[player][unit].totalPerscution;
            if (unit === "mage") {
              attackersMageSuppression += army[player][unit].totalSuppression;
              attackersMageTowersSuppression +=
                army[player][unit].totalTowersSuppression;
            }
          }
        });

        defenders.forEach((player) => {
          for (const unit in army[player]) {
            totalDefendersDamage += army[player][unit].totalAttack;
            if (UNITS_PERSECUTION[unit])
              defendersPersecutionDamage[unit] +=
                army[player][unit].totalPerscution;
            if (unit === "mage") {
              defendersMageSuppression += army[player][unit].totalSuppression;
            }
          }
        });
        // --- Вираховуємо загальну кількість юнітів у гравців
        attackers.forEach((player) => {
          Object.entries(army[player]).forEach(([unit, { amount }]) => {
            if (amount > 0) {
              totalAttackerUnitsAmount = totalAttackerUnitsAmount + amount;
              if (UNITS_PERSECUTION[unit]) {
                totalAttakersUnitAmount[unit] += amount;
              }
            }
          });
        });
        defenders.forEach((player) => {
          Object.entries(army[player]).forEach(([unit, { amount }]) => {
            if (amount > 0) {
              totalDefenderUnitsAmount = totalDefenderUnitsAmount + amount;
              if (UNITS_PERSECUTION[unit]) {
                totalDefendersUnitAmount[unit] += amount;
              }
            }
          });
        });

        //--------------------------------
        if (totalAttackerUnitsAmount) {
          //---атака башен
          if (towers.length) {
            console.log(getTowersAttack(towers, totalDefendersDamage));
            totalDefendersDamage +=
              getTowersAttack(towers, totalDefendersDamage) -
              attackersMageTowersSuppression;
          }

          //--- атака кожного раунду
          const defendersRoundDamage =
            mainDefenderPlayer.roundDamage +
            firstDefenderAllyPlayer.roundDamage +
            secondDefenderAllyPlayer.roundDamage;
          totalDefendersDamage += defendersRoundDamage;

          const attackersRoundDamage =
            mainAttackerPlayer.roundDamage +
            firstAttackerAllyPlayer.roundDamage +
            secondAttackerAllyPlayer.roundDamage;
          totalAttackersDamage += attackersRoundDamage;

          //--- Враховуємо поглинання атаки магами
          if (attackersMageSuppression > 0)
            totalDefendersDamage -= attackersMageSuppression;
          if (defendersMageSuppression > 0)
            totalAttackersDamage -= defendersMageSuppression;

          // --- Вираховуємо атаку на 1 юніта
          let damagePerUnit = totalDefendersDamage / totalAttackerUnitsAmount;
          // --- Вираховуємо кількість вбитих юнітів в кожній армії
          while (totalDefendersDamage > 0 && totalAttackerUnitsAmount > 0) {
            attackers.forEach((player) => {
              Object.entries(army[player]).forEach(
                ([unit, { amount, totalHeath, health, totalDefense }]) => {
                  if (amount) {
                    let persecutionDamagePerUnit = 0;
                    if (UNITS_PERSECUTION[unit]) {
                      persecutionDamagePerUnit =
                        defendersPersecutionDamage[
                          UNITS_PERSECUTION[unit].pursued
                        ] / totalAttakersUnitAmount[unit];
                    }
                    const killedUnits = Math.ceil(
                      (amount * damagePerUnit * (1 - totalDefense / 100) +
                        amount * persecutionDamagePerUnit) /
                        health
                    );
                    const residualDamage =
                      killedUnits < amount
                        ? amount * damagePerUnit - totalHeath
                        : 0;

                    army[player][unit].amount = Math.max(
                      amount - killedUnits,
                      0
                    );
                    army[player][unit].killed += Math.min(amount, killedUnits);
                    totalDefendersDamage =
                      residualDamage > 0
                        ? Math.max(totalDefendersDamage - totalHeath, 0)
                        : Math.max(
                            totalDefendersDamage - amount * damagePerUnit,
                            0
                          );
                    totalAttackerUnitsAmount -= Math.min(amount, killedUnits);
                    if (residualDamage > 0) {
                      damagePerUnit =
                        totalDefendersDamage / totalAttackerUnitsAmount;
                    }
                  }
                }
              );
            });
          }
        }
        //-------------------------------
        if (totalDefenderUnitsAmount) {
          //--- атака кожного раунду
          const defendersRoundDamage =
            mainDefenderPlayer.roundDamage +
            firstDefenderAllyPlayer.roundDamage +
            secondDefenderAllyPlayer.roundDamage;
          totalDefendersDamage += defendersRoundDamage;

          const attackersRoundDamage =
            mainAttackerPlayer.roundDamage +
            firstAttackerAllyPlayer.roundDamage +
            secondAttackerAllyPlayer.roundDamage;
          totalAttackersDamage += attackersRoundDamage;

          //--- Враховуємо поглинання атаки магами
          if (attackersMageSuppression > 0)
            totalDefendersDamage -= attackersMageSuppression;
          if (defendersMageSuppression > 0)
            totalAttackersDamage -= defendersMageSuppression;

          // --- Вираховуємо атаку на 1 юніта
          let damagePerUnit = totalAttackersDamage / totalDefenderUnitsAmount;
          // --- Вираховуємо кількість вбитих юнітів в кожній армії
          while (totalAttackersDamage > 0 && totalDefenderUnitsAmount > 0) {
            defenders.forEach((player) => {
              Object.entries(army[player]).forEach(
                ([unit, { amount, totalHeath, health, totalDefense }]) => {
                  if (amount) {
                    let persecutionDamagePerUnit = 0;
                    if (UNITS_PERSECUTION[unit]) {
                      persecutionDamagePerUnit =
                        attakersPersecutionDamage[
                          UNITS_PERSECUTION[unit].pursued
                        ] / totalDefendersUnitAmount[unit];
                    }
                    const killedUnits = Math.ceil(
                      (amount * damagePerUnit * (1 - totalDefense / 100) +
                        amount * persecutionDamagePerUnit) /
                        health
                    );
                    const residualDamage =
                      killedUnits < amount
                        ? amount * damagePerUnit - totalHeath
                        : 0;

                    army[player][unit].amount = Math.max(
                      amount - killedUnits,
                      0
                    );
                    army[player][unit].killed += Math.min(amount, killedUnits);
                    totalAttackersDamage =
                      residualDamage > 0
                        ? Math.max(totalAttackersDamage - totalHeath, 0)
                        : Math.max(
                            totalAttackersDamage - amount * damagePerUnit,
                            0
                          );
                    totalDefenderUnitsAmount -= Math.min(amount, killedUnits);
                    if (residualDamage > 0) {
                      damagePerUnit =
                        totalAttackersDamage / totalDefendersUnitAmount;
                    }
                  }
                }
              );
            });
          }
        }
        // --- перераховуємо параметри армії та записуємо
        Object.entries(army).forEach(([player, squad]) => {
          army[player] = recalculateArmy(squad);
        });
        //--- перевіряємо на закінчення бою
        battle[`round${round}`] = deepCopy(army);
        const { retreated, shouldAttackersFallback, shouldDefendersFallback } =
          shouldBattleContinue(battle.start, army, fallback);
        shouldContinue = !(shouldAttackersFallback || shouldDefendersFallback);
        retreatedArmies = { ...retreated, ...retreatedArmies };
        if (!shouldContinue) {
          winner = shouldAttackersFallback ? "defender" : "attacker";
          if (Object.keys(retreatedArmies).length) {
            for (const player in army) {
              if (retreatedArmies[player])
                army[player] = retreatedArmies[player];
            }
          }
          break;
        } else {
          ++round;
        }
      }
    }
    //--- RESURRECTION ROUND
    const resurrectionObj = {};
    Object.entries(army).forEach(([player, squad]) => {
      resurrectionObj[player] = {
        resurrection: 0,
        killed: 0,
        resurrected: 0,
        resurrectedAlly: 0,
        resurrectedByAlly: 0,
      };
      resurrectionObj[player].resurrection = squad.healer.totalResurrection;

      Object.values(squad).forEach((parametrs) => {
        const { killed } = parametrs;
        if (killed) {
          resurrectionObj[player].killed += killed;
        }
      });
    });

    // --- проводимо воскресіння юнітів у кожного гравця
    [...attackers, ...defenders].forEach((player) => {
      while (
        resurrectionObj[player].resurrection &&
        resurrectionObj[player].killed
      ) {
        for (const unit in army[player]) {
          const { killed } = army[player][unit];
          if (killed > 0) {
            army[player][unit].amount += 1;
            army[player][unit].killed -= 1;
            army[player][unit].resurrected += 1;
            resurrectionObj[player].resurrection -= 1;
            resurrectionObj[player].killed -= 1;
            resurrectionObj[player].resurrected += 1;
          }
        }
      }
    });

    attackers.forEach((player) => {
      if (resurrectionObj[player].resurrection) {
        const allyes = attackers.filter((player) => player != player);
        while (resurrectionObj[player].resurrection) {
          let shouldContinue = false;
          allyes.forEach((ally) => {
            for (const unit in army[ally]) {
              const { killed } = army[ally][unit];
              shouldContinue += killed;
            }
          });
          allyes.forEach((ally) => {
            for (const unit in army[ally]) {
              const { killed } = army[ally][unit];
              if (killed > 0 && resurrectionObj[player].resurrection) {
                army[ally][unit].amount += 1;
                army[ally][unit].killed -= 1;
                army[ally][unit].resurrected += 1;
                resurrectionObj[player].resurrection -= 1;
                resurrectionObj[player].resurrectedAlly += 1;
                resurrectionObj[ally].resurrectedByAlly += 1;
              }
            }
          });

          if (!shouldContinue) break;
        }
      }
    });
    defenders.forEach((player) => {
      if (resurrectionObj[player].resurrection) {
        const allyes = attackers.filter((player) => player != player);
        while (resurrectionObj[player].resurrection) {
          let shouldContinue = false;
          allyes.forEach((ally) => {
            for (const unit in army[ally]) {
              const { killed } = army[ally][unit];
              shouldContinue += killed;
            }
          });
          allyes.forEach((ally) => {
            for (const unit in army[ally]) {
              const { killed } = army[ally][unit];
              if (killed > 0 && resurrectionObj[player].resurrection) {
                army[ally][unit].amount += 1;
                army[ally][unit].killed -= 1;
                army[ally][unit].resurrected += 1;
                resurrectionObj[player].resurrection -= 1;
                resurrectionObj[player].resurrectedAlly += 1;
                resurrectionObj[ally].resurrectedByAlly += 1;
              }
            }
          });

          if (!shouldContinue) break;
        }
      }
    });
    battle.resurrection = deepCopy(army);
    console.log(retreatedArmies);
    console.log("WINNER!", winner);
    console.log("battle", deepCopy(battle));
  };
  // --- HELPERS
  function getInitialSquadParametrs(squad, playerProperties) {
    let properties = {};
    let totalUnitsAmount = 0;

    Object.values(squad).map((parametrs) => {
      const { amount, amountRate } = parametrs;
      if (amount) {
        totalUnitsAmount = totalUnitsAmount + getUnitAmount(amount, amountRate);
      }
    });

    Object.entries(squad).map(([unit, parametrs]) => {
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
      } = parametrs;
      const recalculatedUnitAmount = getUnitAmount(amount, amountRate);

      const totalDefense = Math.max(
        Math.min(defense, Math.min(defenseLevel, LIMITS.defenseLevelLimit)),
        0
      );

      const totalAttack =
        ((attack ?? 0) +
          (attack ?? 0) * Math.max(attackRate ?? 0, LIMITS.attackLimit)) *
        recalculatedUnitAmount;

      const totalPerscution =
        attack * recalculatedUnitAmount +
        (attack ?? 0) * Math.max(persecutionRate ?? 0, LIMITS.persecutionLimit);

      properties = {
        ...properties,
        [unit]: {
          ...parametrs,
          killed: 0,
          resurrected: 0,
          totalAttack,
          totalHeath:
            (health + health * Math.max(healthRate ?? 0, LIMITS.healthLimit)) *
            recalculatedUnitAmount,
          ...(UNITS_PERSECUTION[unit] && {
            totalPerscution,
          }),
          ...(resurrection && {
            totalResurrection:
              (resurrection + additionalResurrection) * recalculatedUnitAmount,
          }),
          totalDefense,
          amount: amount ? recalculatedUnitAmount : 0,
          ...(unit === "mage" && {
            totalSuppression: Math.max(suppression * recalculatedUnitAmount, 0),
            totalTowersSuppression: Math.max(
              (towersSuppression + towersSuppression * towersSuppressionRate) *
                recalculatedUnitAmount,
              0
            ),
          }),
          percentage: amount
            ? Number((recalculatedUnitAmount / totalUnitsAmount).toFixed(2))
            : 0,
        },
      };
    });
    return properties;

    function getUnitAmount(amount, amountRate) {
      if (playerProperties.fearlessness) {
        return Math.floor(
          amount + amount * amountRate * playerProperties.recoil
        );
      }
      return Math.floor(amount * (1 + amountRate));
    }
  }

  function recalculateArmy(squad) {
    let properties = {};
    let totalUnitsAmount = 0;
    Object.values(squad).map((parametrs) => {
      const { amount } = parametrs;
      if (amount) {
        totalUnitsAmount = totalUnitsAmount + amount;
      }
    });
    Object.entries(squad).map(([unit, parametrs]) => {
      const {
        amount,
        attack,
        attackRate,
        health,
        healthRate,
        defense,
        defenseLevel,
        persecutionRate,
        resurrection,
        suppression,
        roundAttackRate,
        additionalResurrection,
        towersSuppression,
        towersSuppressionRate,
      } = parametrs;

      const totalPerscution =
        attack * amount +
        (attack ?? 0) * Math.max(persecutionRate ?? 0, LIMITS.persecutionLimit);

      const roundDamage = (attack ?? 0) * (roundAttackRate ?? 0);

      properties = {
        ...properties,
        [unit]: {
          ...parametrs,
          totalAttack:
            ((attack ?? 0) +
              (attack ?? 0) * Math.max(attackRate ?? 0, LIMITS.attackLimit) +
              (attack ?? 0) * (roundAttackRate ?? 0) +
              roundDamage) *
            amount,
          totalHeath:
            (health + health * Math.max(healthRate ?? 0, LIMITS.healthLimit)) *
            amount,
          ...(UNITS_PERSECUTION[unit] && {
            totalPerscution,
          }),
          ...(resurrection && {
            totalResurrection: (resurrection + additionalResurrection) * amount,
          }),
          totalDefense: Math.max(
            Math.min(defense, Math.min(defenseLevel, LIMITS.defenseLevelLimit)),
            0
          ),
          ...(unit === "mage" && {
            totalSuppression: Math.max(suppression * amount, 0),
            totalTowersSuppression: Math.max(
              (towersSuppression + towersSuppression * towersSuppressionRate) *
                amount,
              0
            ),
          }),
          percentage: amount
            ? Number((amount / totalUnitsAmount).toFixed(2))
            : 0,
        },
      };
    });
    return properties;
  }

  function getFortificationsAttack(fortifications) {
    if (!fortifications.length) return 0;
    let totalAttack = 0;
    fortifications.forEach((fortification) => {
      const { attack, quantity, damageRate } = fortification;
      totalAttack += (attack + attack * damageRate) * quantity;
    });
    return totalAttack;
  }

  function getTowersAttack(towers, armyAttack) {
    if (!towers.length) return 0;
    let totalAttack = 0;
    towers.forEach((tower) => {
      const { type, attack, damageRate, multiplier } = tower;
      if (type === "tower") {
        totalAttack += attack + attack * damageRate;
      }
      if (type === "magicTower") {
        if (damageRate > -1)
          totalAttack +=
            armyAttack * multiplier + armyAttack * multiplier * damageRate;
      }
    });
    return totalAttack;
  }
  function shouldBattleContinue(startArmy, army, fallback) {
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
    console.log("ret", retreated);
    return {
      army,
      retreated,
      shouldAttackersFallback,
      shouldDefendersFallback,
    };
  }

  return { handleBattle };
};

export default useBattle;
