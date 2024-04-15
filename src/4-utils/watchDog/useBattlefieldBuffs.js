import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { UNIT_BONUS_TERRAINS } from "modules/battleplace/utils/battleplace.constants";
import {
  BATTLEFIELD_ATTACK_BUFF,
  HOMELAND_DEFENSE_BUFF,
} from "modules/battleplace/utils/buffs";
import { usePlayerStore } from "modules/players";
import { useEffect } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import {
  getEnemy,
  getHomeland,
  getInitialBuff,
  isAttacker,
} from "./watchDog.helpers";
import useWatchDogStore from "./watchDogStore";

const useBattlefieldBuffs = () => {
  const player = usePlayerContext();
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const race = usePlayerStore((state) => state[player].race);
  const enemyRace = usePlayerStore((state) => state[getEnemy(player)].race);

  const apostate = usePlayerStore((state) => state[player].apostate);
  const enemyApostate = usePlayerStore(
    (state) => state[getEnemy(player)].apostate
  );

  const { addBuff, removeBuff, getBuffs } = useWatchDogStore(
    (state) => state.methods
  );

  //--- homeland effect
  useEffect(() => {
    const homelandDefense = getInitialBuff(player, HOMELAND_DEFENSE_BUFF);
    const { id } = homelandDefense;
    const buff = getBuffs(player).find((buff) => buff.id === id);
    if (battlefield === getHomeland(race) && !apostate) {
      if (isAttacker(player) && race === enemyRace && !enemyApostate) {
        if (!buff) return;
        removeBuff(player, id);
      } else {
        addBuff(player, homelandDefense);
      }
    } else {
      if (!buff) return;
      removeBuff(player, id);
    }
  }, [
    race,
    apostate,
    enemyRace,
    enemyApostate,
    player,
    battlefield,
    getBuffs,
    removeBuff,
    addBuff,
  ]);

  //--- terrain effect
  useEffect(() => {
    const { id } = BATTLEFIELD_ATTACK_BUFF;
    const buff = getBuffs(player).find((buff) => buff.id === id);
    const appliedOn = buff?.appliedOn ?? "homeland";
    if (
      UNIT_BONUS_TERRAINS.includes(battlefield) &&
      appliedOn !== battlefield
    ) {
      removeBuff(player, id);
      addBuff(player, {
        ...BATTLEFIELD_ATTACK_BUFF,
        player,
      });
    } else {
      if (buff) {
        removeBuff(player, id);
      }
    }
  }, [addBuff, battlefield, getBuffs, player, removeBuff]);
};

export default useBattlefieldBuffs;
