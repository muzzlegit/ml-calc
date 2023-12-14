import { useCallback } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useWatchDogStore from "utils/watchDog/watchDogStore";
import { getBuffPlayers } from "./watchDog.helpers";

const useBuffsProvider = () => {
  const player = usePlayerContext();
  const { addBattlefieldBuff, removeBattlefieldBuff } = useWatchDogStore(
    (state) => state.methods
  );

  const buffsProvider = useCallback(
    (buffs, key) => {
      buffs
        .map((buff) => ({ ...buff, player }))
        .forEach((buff) => {
          getBuffPlayers(player, buff.target).forEach((player) => {
            key === "add"
              ? addBattlefieldBuff(player, buff)
              : removeBattlefieldBuff(player, buff.id);
          });
        });
    },

    [addBattlefieldBuff, player, removeBattlefieldBuff]
  );

  return { buffsProvider };
};

export default useBuffsProvider;
