import { APOSTATE_ATTACK_BUFF } from "modules/battleplace/utils/buffs";
import { usePlayerStore } from "modules/players";
import { useEffect } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import { getEnemy, isAttacker } from "./watchDog.helpers";
import useWatchDogStore from "./watchDogStore";

const useFractionBuffs = () => {
  const player = usePlayerContext();

  const race = usePlayerStore((state) => state[player].race);
  const enemyRace = usePlayerStore((state) => state[getEnemy(player)].race);

  const fraction = usePlayerStore((state) => state[player].fraction);
  const enemyFraction = usePlayerStore(
    (state) => state[getEnemy(player)].fraction
  );

  const enemyApostate = usePlayerStore(
    (state) => state[getEnemy(player)].apostate
  );

  const { addBuff, removeBuff, getBuffs } = useWatchDogStore(
    (state) => state.methods
  );

  //--- fraction effect
  useEffect(() => {
    const { id, value, description } = APOSTATE_ATTACK_BUFF;
    const buff = getBuffs(player).find((buff) => buff.id === id);
    const isSameRace = race === enemyRace;

    if (isAttacker(player) && fraction === enemyFraction && !enemyApostate) {
      if (buff) {
        removeBuff(player, id);
      }
      const apostateAttackBuff = {
        ...APOSTATE_ATTACK_BUFF,
        player,
        appliedOn: isSameRace ? "raceAttack" : "fractionAttack",
        description: [description[isSameRace ? 1 : 0]],
        value: [value[isSameRace ? 1 : 0]],
      };
      addBuff(player, apostateAttackBuff);
    } else {
      if (!buff) return;
      removeBuff(player, id);
    }
  }, [
    addBuff,
    enemyApostate,
    enemyFraction,
    enemyRace,
    fraction,
    getBuffs,
    player,
    race,
    removeBuff,
  ]);
};

export default useFractionBuffs;
