import { useBattleplaceStore } from "modules/battleplace";
import { usePlayerStore } from "modules/players";
import { useUnitsStore } from "modules/units";
import { useState } from "react";
import { deepCopy } from "utils/helpers";
import {
  applyFortificationsDamage,
  battleRounds,
  getFormattedBattleResult,
  getFortificationsAttack,
  getTotalUnitsAmounInArmies,
  handleInitialArmies,
  resurrection,
  shouldBattleContinue,
} from "../helpers/battleSystem.helpers";
import useFortificationsRound from "./useFortificationsRound";
import useTowersReduce from "./useTowersReduce";

const useBattle = () => {
  const { getAllPlayersUnits, getPlayerUnits } = useUnitsStore(
    (state) => state.methods
  );
  const { getGarrison, getFortifications, getTowers, getBattleplace } =
    useBattleplaceStore((state) => state.methods);
  const {
    getFearlessness,
    getRecoil,
    getFallback,
    getUnitsDamage,
    getBattleParam,
    getAllParticipantsFlags,
  } = usePlayerStore((state) => state.methods);
  const handleTowersReduce = useTowersReduce();

  const { handleFortificationRound } = useFortificationsRound();

  const [result, setResult] = useState({});
  const [winner, setWinner] = useState("defender");

  const handleBattle = () => {
    let shouldContinue = true;

    const {
      mainAttacker,
      attackerAlly,
      attackerSecondAlly,
      mainDefender,
      firstDefenderAlly,
      secondDefenderAlly,
    } = getAllPlayersUnits();
    const garrison = getGarrison();

    let battle = { rounds: {} };
    let towers = { 0: getTowers() };
    let attackers = { mainAttacker, attackerAlly, attackerSecondAlly };
    let defenders = {
      mainDefender,
      firstDefenderAlly,
      secondDefenderAlly,
      garrison,
    };

    let retreated = {};
    let winner = "defender";
    //--- Ініціалізуємо армію ================================================
    const { attackers: attackersArmies, defenders: defendersArmies } =
      handleInitialArmies(attackers, defenders, getFearlessness(), getRecoil());
    attackers = { ...attackersArmies };
    defenders = { ...defendersArmies };
    //--- Зберігаємо стартові армії
    battle.start = {
      attackers: deepCopy(attackers),
      defenders: deepCopy(defenders),
    };
    console.log("stss", battle);
    //--- РАУНД УКРІПЛЕНЬ ====================================================
    let attackersDamage = 0;
    let defendersDamage = 0;
    //--- Вираховуємо атаку у нападників
    for (const attacker in attackers) {
      attackersDamage += getUnitsDamage()[attacker];
    }
    //--- Вираховуємо атаку у захисників
    for (const defender in defenders) {
      defendersDamage += getUnitsDamage()[defender];
    }
    defendersDamage += getFortificationsAttack(getFortifications());

    if (attackersDamage || defendersDamage) {
      //--- Вираховуємо кількість юнітів без найманців
      const attackersTotalUnitsAmount = getTotalUnitsAmounInArmies(
        attackers,
        "mercenary"
      );
      const defendersTotalUnitsAmount = getTotalUnitsAmounInArmies(
        defenders,
        "mercenary"
      );

      if (attackersTotalUnitsAmount && defendersDamage) {
        // --- Вираховуємо атаку на 1 юніта
        const damagePerUnit = defendersDamage / attackersTotalUnitsAmount;
        //---
        attackers = applyFortificationsDamage(attackers, damagePerUnit);
      }
      if (defendersTotalUnitsAmount && attackersDamage) {
        // --- Вираховуємо атаку на 1 юніта
        const damagePerUnit = attackersDamage / defendersTotalUnitsAmount;
        defenders = applyFortificationsDamage(defenders, damagePerUnit);
      }
    }
    // --- ПЕРЕВІРКА НА ЗАКІНЧЕННЯ БОЮ
    const battleResult = shouldBattleContinue(
      { ...battle.start.attackers, ...battle.start.defenders },
      attackers,
      defenders,
      getFallback(),
      retreated,
      "fortifications"
    );

    attackers = battleResult.attackersArmies;
    defenders = battleResult.defendersArmies;
    retreated = { ...battleResult.currentRetreated };
    winner = battleResult.winner;
    shouldContinue = battleResult.shouldContinue;

    battle.fortifications = {
      attackers: deepCopy(attackers),
      defenders: deepCopy(defenders),
    };

    //--- Бойові раунди ===============================================================
    if (shouldContinue) {
      let rounds = 20;
      let round = 1;
      while (round <= rounds && shouldContinue) {
        const reducedTowers = handleTowersReduce(
          towers[round - 1],
          false,
          defenders,
          getBattleParam().towerLevelReduce
        );
        towers[round] = reducedTowers;
        console.log("returned towers", reducedTowers);
        const attackersArmies = battleRounds(
          defenders,
          attackers,
          true,
          towers[round],
          getBattleParam(),
          round
        );
        const defendersArmies = battleRounds(
          attackers,
          defenders,
          false,
          towers[round],
          getBattleParam(),
          round
        );

        attackers = attackersArmies;
        defenders = defendersArmies;

        battle.rounds[round] = {
          attackers: deepCopy(attackers),
          defenders: deepCopy(defenders),
        };
        const battleResult = shouldBattleContinue(
          {
            ...battle.start.attackers,
            ...battle.start.defenders,
          },
          attackersArmies,
          defendersArmies,
          getFallback(),
          retreated,
          round
        );
        // console.log(battleResult);
        shouldContinue = battleResult.shouldContinue;
        winner = battleResult.winner;
        if (shouldContinue) {
          ++round;
        }
      }
    }
    //--- РАУНД  ВОСКРЕСІННЯ ====================================================
    const resurrectionResult = resurrection(attackers, defenders);
    battle.resurrection = {
      attackers: deepCopy(resurrectionResult.attackersArmies),
      defenders: deepCopy(resurrectionResult.defendersArmies),
    };

    //===============================================
    console.log("armies", attackers, defenders);
    console.log("battle", battle);
    console.log("retreated", retreated);
    console.log("continue", shouldContinue);
    console.log("WINNER", winner + "!");
    console.log(
      "result",
      getFormattedBattleResult(deepCopy(battle), {
        ...getAllParticipantsFlags(),
        garrison: getBattleplace() === "castle",
      })
    );
    setResult(deepCopy(battle));
    setWinner(winner);
  };
  return { handleBattle, result, winner };
};

export default useBattle;
