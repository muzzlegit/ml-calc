import { usePlayerStore } from "modules/players";
import { useCallback } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useWatchDogStore from "utils/watchDog/watchDogStore";
import { getBuffPlayers } from "./watchDog.helpers";

const useBuffsProvider = () => {
  const player = usePlayerContext();
  const { addBuff, removeBuff, replaceBuff, updateBuffs } = useWatchDogStore(
    (state) => state.methods
  );
  const {
    addBuff: addPlayerBuff,
    removeBuff: removePlayerBuff,
    replaceBuff: replacePlayerBuff,
  } = usePlayerStore((state) => state.methods);

  const buffsProvider = useCallback(
    (buffs, key) => {
      buffs
        .map((buff) => ({ ...buff, player }))
        .forEach((buff) => {
          switch (key) {
            case "add":
              addPlayerBuff(buff.player, buff);
              break;
            case "delete":
              removePlayerBuff(buff.player, buff.id);
              break;
            case "replace":
              replacePlayerBuff(buff.player, buff);
              break;
            default:
              break;
          }
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

    [
      addBuff,
      addPlayerBuff,
      player,
      removeBuff,
      removePlayerBuff,
      replaceBuff,
      replacePlayerBuff,
    ]
  );

  const buffsTrigger = (player) => {
    updateBuffs(player);
  };

  return { buffsProvider, buffsTrigger };
};

export default useBuffsProvider;
