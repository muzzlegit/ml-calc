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
        replaceBattlefieldBuff: (player, values) => {
          set((state) => {
            state[player].battlefieldBuffs = state[player].battlefieldBuffs.map(
              (buff) => {
                return values.id === buff.id ? { ...buff, ...values } : buff;
              }
            );
          });
        },
      },
    })),
    { name: "WatchDog" }
  )
);

export default useWatchDogStore;
