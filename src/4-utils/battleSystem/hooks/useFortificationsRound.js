import { useBattleplaceStore } from "modules/battleplace";
import { usePlayerStore } from "modules/players";
import { deepCopy } from "utils/helpers";
import { ATTACKERS, DEFENDERS } from "../helpers/battleSystem.constants";
import {
  recalculateArmy,
  shouldBattleContinue,
} from "../helpers/battleSystem.helpers";
import useBattleStore from "../store/battleStore";

const useFortificationsRound = () => {
  const playerStore = usePlayerStore((state) => state);
  const fortifications = useBattleplaceStore((state) => state.fortifications);
  const {
    methods: {
      getStartAttackersArmies,
      getStartDefendersArmies,
      getAttackersArmies,
      getDefendersArmies,
      setAttackersArmies,
      setDefendersArmies,
      setBattle,
      setWinner,
    },
  } = useBattleStore((state) => state);

  const handleFortificationRound = () => {
    let attackersDamage = 0;
    let defendersDamage = 0;
    let attackersArmies = deepCopy(getAttackersArmies());
    let defendersArmies = deepCopy(getDefendersArmies());

    //---Вираховуємо атаку у нападників
    ATTACKERS.forEach((attacker) => {
      attackersDamage += playerStore[attacker].unitsDamage;
    });
    //--- Вираховуємо атаку у захисників
    DEFENDERS.forEach((defender) => {
      defendersDamage += playerStore[defender].unitsDamage;
    });
    //--- Додаємо атаку від укріплень
    defendersDamage += getFortificationsAttack(fortifications);
    if (attackersDamage || defendersDamage) {
      //--- Вираховуємо кількість юнітів без найманців
      const attackersTotalUnitsAmount =
        getTotalUnitsAmounInArmiesWithoutMercenary(attackersArmies);
      const defendersTotalUnitsAmount =
        getTotalUnitsAmounInArmiesWithoutMercenary(defendersArmies);

      if (attackersTotalUnitsAmount && defendersDamage) {
        // --- Вираховуємо атаку на 1 юніта
        const damagePerUnit = defendersDamage / attackersTotalUnitsAmount;

        for (const player in attackersArmies) {
          for (const unit in attackersArmies[player]) {
            const { amount } = attackersArmies[player][unit];
            if (amount && unit !== "mercenary") {
              const killedUnits = Math.max(
                Math.round(amount * damagePerUnit),
                1
              );
              attackersArmies[player][unit].amount = Math.max(
                amount - killedUnits,
                0
              );
              attackersArmies[player][unit].killedInRound = Math.min(
                amount,
                killedUnits
              );
              attackersArmies[player][unit].totalKilled += Math.min(
                amount,
                killedUnits
              );
            }
          }
        }
      }
      if (defendersTotalUnitsAmount && attackersDamage) {
        // --- Вираховуємо атаку на 1 юніта
        const damagePerUnit = attackersDamage / defendersTotalUnitsAmount;

        for (const player in defendersArmies) {
          for (const unit in defendersArmies[player]) {
            const { amount } = defendersArmies[player][unit];
            if (amount && unit !== "mercenary") {
              const killedUnits = Math.max(
                Math.round(amount * damagePerUnit),
                1
              );
              defendersArmies[player][unit].amount = Math.max(
                amount - killedUnits,
                0
              );
              defendersArmies[player][unit].killedInRound = Math.min(
                amount,
                killedUnits
              );
              defendersArmies[player][unit].totalKilled += Math.min(
                amount,
                killedUnits
              );
            }
          }
        }
      }
      for (const player in attackersArmies) {
        attackersArmies[player] = recalculateArmy(
          attackersArmies[player],
          "fortification"
        );
      }
      for (const player in defendersArmies) {
        defendersArmies[player] = recalculateArmy(
          defendersArmies[player],
          "fortification"
        );
      }
    }
    const {
      army,
      retreated,
      shouldAttackersFallback,
      shouldDefendersFallback,
    } = shouldBattleContinue(
      { ...getStartAttackersArmies(), ...getStartDefendersArmies() },
      { ...getAttackersArmies(), ...getDefendersArmies() },
      playerStore.methods.getFallback()
    );
    console.log(
      army,
      retreated,
      shouldAttackersFallback,
      shouldDefendersFallback
    );
    setAttackersArmies(attackersArmies);
    setDefendersArmies(defendersArmies);
    setBattle("fortifications", attackersArmies, defendersArmies);
  };

  function getFortificationsAttack(fortifications) {
    if (!fortifications?.length) return 0;
    let totalAttack = 0;
    fortifications.forEach((fortification) => {
      const { attack, quantity, damageRate } = fortification;
      totalAttack += (attack + attack * damageRate) * quantity;
    });
    return totalAttack;
  }

  function getTotalUnitsAmounInArmiesWithoutMercenary(armies, unitException) {
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
  return { handleFortificationRound };
};

export default useFortificationsRound;
