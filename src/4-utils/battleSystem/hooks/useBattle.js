import { useBattleplaceStore } from "modules/battleplace";
import { usePlayerStore } from "modules/players";
import { useUnitsStore } from "modules/units";
import { deepCopy } from "utils/helpers";
import {
  applyFortificationsDamage,
  getFortificationsAttack,
  getTotalUnitsAmounInArmies,
  handleInitialArmies,
  shouldBattleContinue,
} from "../helpers/battleSystem.helpers";
import useBattleStore from "../store/battleStore";
import useFortificationsRound from "./useFortificationsRound";

const useBattle = () => {
  const {
    setStartAttackersArmies,
    setStartDefendersArmies,
    setAttackersArmies,
    setDefendersArmies,
  } = useBattleStore((state) => state.methods);

  const { getAllPlayersUnits } = useUnitsStore((state) => state.methods);
  const { getGarrison, getFortifications } = useBattleplaceStore(
    (state) => state.methods
  );
  const { getFearlessness, getRecoil, getUnitsDamage, getFallback } =
    usePlayerStore((state) => state.methods);

  const { handleFortificationRound } = useFortificationsRound();

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

    let battle = {};
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
      getFallback()
    );
    if (Object.keys(battleResult.retreated).length) {
      for (const player in battleResult.retreated) {
        retreated[player] = {
          army: battleResult.retreated[player],
          round: "fortifications",
        };
      }
    }
    attackers = battleResult.attackersArmies;
    defenders = battleResult.defendersArmies;
    if (
      battleResult.shouldAttackersFallback ||
      battleResult.shouldDefendersFallback
    ) {
      if (Object.keys(retreated).length) {
        for (const player in retreated) {
          if (attackers[player]) {
            attackers[player] = retreated[player].army;
          }
          if (defenders[player]) {
            defenders[player] = retreated[player].army;
          }
        }
      }
      winner = battleResult.winner;
      shouldContinue = false;
    }
    battle.fortifications = {
      attackers: deepCopy(attackers),
      defenders: deepCopy(defenders),
    };
    //===============================================
    console.log(
      "first",
      battleResult.attackersArmies,
      battleResult.defendersArmies,
      battleResult.shouldAttackersFallback,
      battleResult.shouldDefendersFallback,
      "ret",
      battleResult.retreated
    );
    console.log("armies", attackers, defenders);
    console.log("battle", battle);
    console.log("retreated", retreated);
    console.log("WINNER", winner + "!");
  };

  return { handleBattle };
};

export default useBattle;
