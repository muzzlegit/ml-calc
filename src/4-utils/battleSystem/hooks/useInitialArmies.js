import { useBattleplaceStore } from "modules/battleplace";
import { usePlayerStore } from "modules/players";
import { useUnitsStore } from "modules/units";
import { ATTACKERS, DEFENDERS } from "../helpers/battleSystem.constants";
import { recalculateArmy } from "../helpers/battleSystem.helpers";
import useBattleStore from "../store/battleStore";

const useInitialArmies = (round) => {
  const {
    setStartAttackersArmies,
    setStartDefendersArmies,
    setAttackersArmies,
    setDefendersArmies,
  } = useBattleStore((state) => state.methods);

  const unitsStore = useUnitsStore((state) => state);
  const battleplaceStore = useBattleplaceStore((state) => state);
  const playerStore = usePlayerStore((state) => state);

  const handleInitialArmies = () => {
    const attackers = {};
    const defenders = {};
    ATTACKERS.forEach((attacker) => {
      attackers[attacker] = recalculateArmy(unitsStore[attacker], round, {
        fearlessness: playerStore[attacker].fearlessness,
        recoil: playerStore[attacker].recoil,
      });
    });
    DEFENDERS.forEach((defender) => {
      const isGarrison = defender === "garrison";
      defenders[defender] = recalculateArmy(
        isGarrison ? battleplaceStore[defender] : unitsStore[defender],
        round,
        {
          fearlessness: isGarrison ? false : playerStore[defender].fearlessness,
          recoil: isGarrison ? false : playerStore[defender].recoil,
        }
      );
    });

    setStartAttackersArmies(attackers);
    setStartDefendersArmies(defenders);

    setAttackersArmies(attackers);
    setDefendersArmies(defenders);
  };

  return { handleInitialArmies };
};

export default useInitialArmies;
