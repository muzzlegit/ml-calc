import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useWatchDogStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        battlefieldBuffs: [],
      },
      attackerAlly: {
        battlefieldBuffs: [],
      },
      attackerSecondAlly: {
        battlefieldBuffs: [],
      },
      mainDefender: {
        battlefieldBuffs: [],
      },
      firstDefenderAlly: {
        battlefieldBuffs: [],
      },
      secondDefenderAlly: {
        battlefieldBuffs: [],
      },
      methods: {
        getBuffs: (player) => {
          return get()[player].battlefieldBuffs;
        },
        addBattlefieldBuff: (player, buff) => {
          set((state) => {
            if (state[player].battlefieldBuffs.find(({ id }) => id === buff.id))
              return;
            state[player].battlefieldBuffs = [
              ...state[player].battlefieldBuffs,
              buff,
            ];
            // return true;
          });
        },
        removeBattlefieldBuff: (player, buffId) => {
          set((state) => {
            if (!state[player].battlefieldBuffs.find(({ id }) => id === buffId))
              return;
            state[player].battlefieldBuffs = [
              ...state[player].battlefieldBuffs.filter(
                ({ id }) => id !== buffId
              ),
            ];
          });
        },
      },
    })),
    { name: "WatchDog" }
  )
);

export default useWatchDogStore;
