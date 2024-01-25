import { useCallback } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useWatchDogStore from "utils/watchDog/watchDogStore";
import { getBuffPlayers } from "./watchDog.helpers";

const useBuffsProvider = () => {
  const player = usePlayerContext();
  const { addBuff, removeBuff, replaceBuff } = useWatchDogStore(
    (state) => state.methods
  );

  const buffsProvider = useCallback(
    (buffs, key) => {
      buffs
        .map((buff) => ({ ...buff, player }))
        .forEach((buff) => {
          getBuffPlayers(player, buff.target).forEach((player) => {
            switch (key) {
              case "add":
                addBuff(player, buff);
                break;
              case "delete":
                removeBuff(player, buff.id);
                break;
              case "replace":
                replaceBuff(player, buff);
                break;
              default:
                break;
            }
          });
        });
    },

    [addBuff, player, removeBuff, replaceBuff]
  );

  return { buffsProvider };
};

export default useBuffsProvider;
