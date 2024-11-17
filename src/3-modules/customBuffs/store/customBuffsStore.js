import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getInitialBuff } from "../utils/customBuffs.helpers";

const useCustomBuffsStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        buffs: [getInitialBuff("mainAttacker")],
      },
      attackerAlly: {
        buffs: [getInitialBuff("attackerAlly")],
      },
      attackerSecondAlly: {
        buffs: [getInitialBuff("attackerSecondAlly")],
      },
      mainDefender: {
        buffs: [getInitialBuff("mainDefender")],
      },
      firstDefenderAlly: {
        buffs: [getInitialBuff("firstDefenderAlly")],
      },
      secondDefenderAlly: {
        buffs: [getInitialBuff("secondDefenderAlly")],
      },
      methods: {
        updateState: (newState) => {
          set((state) => ({
            ...newState,
            methods: state.methods,
          }));
        },
        getBuff: (player, id) => {
          return get()[player].buffs.find((buff) => buff.id === id);
        },
        getAllBuffs: (player) => {
          return get()[player].buffs;
        },
        setBuff: (player, newBuff) => {
          set((state) => {
            state[player].buffs = state[player].buffs.map((buff) => {
              if (buff.id !== newBuff.id) return buff;
              return newBuff;
            });
          });
        },
        addBuff: (player) => {
          set((state) => {
            state[player].buffs = [
              ...state[player].buffs,
              getInitialBuff(player),
            ];
          });
        },
        deleteBuff: (player, id) => {
          set((state) => {
            state[player].buffs = state[player].buffs.filter(
              (buff) => buff.id !== id
            );
          });
        },
        resetBuffs: (player) => {
          set((state) => {
            state[player].buffs = [...getInitialBuff(player)];
          });
        },
      },
    })),
    { name: "customBuffs" }
  )
);

export default useCustomBuffsStore;
