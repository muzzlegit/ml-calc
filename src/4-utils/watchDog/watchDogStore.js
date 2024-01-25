import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useWatchDogStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        buffs: [],
      },
      attackerAlly: {
        buffs: [],
      },
      attackerSecondAlly: {
        buffs: [],
      },
      mainDefender: {
        buffs: [],
      },
      firstDefenderAlly: {
        buffs: [],
      },
      secondDefenderAlly: {
        buffs: [],
      },
      methods: {
        getBuffs: (player) => {
          return get()[player].buffs;
        },
        addBuff: (player, buff) => {
          set((state) => {
            if (state[player].buffs.find(({ id }) => id === buff.id)) return;
            state[player].buffs = [...state[player].buffs, buff];
          });
        },
        removeBuff: (player, buffId) => {
          set((state) => {
            if (!state[player].buffs.find(({ id }) => id === buffId)) return;
            state[player].buffs = [
              ...state[player].buffs.filter(({ id }) => id !== buffId),
            ];
          });
        },
        replaceBuff: (player, values) => {
          set((state) => {
            state[player].buffs = state[player].buffs.map((buff) => {
              return values.id === buff.id ? { ...buff, ...values } : buff;
            });
          });
        },
      },
    })),
    { name: "WatchDog" }
  )
);

export default useWatchDogStore;
