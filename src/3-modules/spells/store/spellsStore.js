import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { getAdditionBuffs, getInitialSpells } from "../utils/spell.helpers";

const useSpellsStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        spells: [...getInitialSpells("mainAttacker")],
        buffs: [...getAdditionBuffs("mainAttacker")],
      },
      attackerAlly: {
        spells: [...getInitialSpells("attackerAlly")],
        buffs: [...getAdditionBuffs("attackerAlly")],
      },
      attackerSecondAlly: {
        spells: [...getInitialSpells("attackerSecondAlly")],
        buffs: [...getAdditionBuffs("attackerSecondAlly")],
      },
      mainDefender: {
        spells: [...getInitialSpells("mainDefender")],
        buffs: [...getAdditionBuffs("mainDefender")],
      },
      firstDefenderAlly: {
        spells: [...getInitialSpells("firstDefenderAlly")],
        buffs: [...getAdditionBuffs("firstDefenderAlly")],
      },
      secondDefenderAlly: {
        spells: [...getInitialSpells("secondDefenderAlly")],
        buffs: [...getAdditionBuffs("secondDefenderAlly")],
      },
      methods: {
        getSpell: (player, id) => {
          return get()[player].spells.find((spell) => spell.id === id);
        },
        getSpells: (player) => {
          return get()[player].spells;
        },
        getBuff: (player, id) => {
          return get()[player].buffs.find((buff) => buff.id === id);
        },
        setSpellLevel: (player, newSpell) => {
          set((state) => {
            state[player].spells = state[player].spells.map((spell) => {
              if (spell.id === newSpell.id) {
                return { ...newSpell };
              } else {
                return spell;
              }
            });
          });
        },
        setBuff: (player, newBuff) => {
          set((state) => {
            state[player].buffs = state[player].buffs.map((buff) => {
              if (buff.id !== newBuff.id) return buff;
              return newBuff;
            });
          });
        },
        resetAllSpells: (player) => {
          set((state) => {
            state[player].spells = [...getInitialSpells(player)];
          });
        },
        resetAllBuffs: (player) => {
          set((state) => {
            state[player].buffs = [];
          });
        },
      },
    })),
    { name: "spells" }
  )
);

export default useSpellsStore;
