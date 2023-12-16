import { useCallback } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useWatchDogStore from "utils/watchDog/watchDogStore";
import { getBuffPlayers } from "./watchDog.helpers";

const useBuffsProvider = () => {
  const player = usePlayerContext();
  const { addBattlefieldBuff, removeBattlefieldBuff, replaceBattlefieldBuff } =
    useWatchDogStore((state) => state.methods);

  const buffsProvider = useCallback(
    (buffs, key) => {
      buffs
        .map((buff) => ({ ...buff, player }))
        .forEach((buff) => {
          getBuffPlayers(player, buff.target).forEach((player) => {
            switch (key) {
              case "add":
                addBattlefieldBuff(player, buff);
                break;
              case "delete":
                removeBattlefieldBuff(player, buff.id);
                break;
              case "replace":
                replaceBattlefieldBuff(player, buff);
                break;
              default:
                break;
            }
          });
        });
    },

    [addBattlefieldBuff, player, removeBattlefieldBuff, replaceBattlefieldBuff]
  );

  return { buffsProvider };
};

export default useBuffsProvider;
