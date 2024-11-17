import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { getInitialSpells } from "../utils/spell.helpers";

const useSpellsStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        spells: [...getInitialSpells("mainAttacker")],
      },
      attackerAlly: {
        spells: [...getInitialSpells("attackerAlly")],
      },
      attackerSecondAlly: {
        spells: [...getInitialSpells("attackerSecondAlly")],
      },
      mainDefender: {
        spells: [...getInitialSpells("mainDefender")],
      },
      firstDefenderAlly: {
        spells: [...getInitialSpells("firstDefenderAlly")],
      },
      secondDefenderAlly: {
        spells: [...getInitialSpells("secondDefenderAlly")],
      },
      methods: {
        updateState: (newState) => {
          set((state) => ({
            ...newState,
            methods: state.methods,
          }));
        },
        getSpell: (player, id) => {
          return get()[player].spells.find((spell) => spell.id === id);
        },
        getSpells: (player) => {
          return get()[player].spells;
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
        resetAllSpells: (player) => {
          set((state) => {
            state[player].spells = [...getInitialSpells(player)];
          });
        },
      },
    })),
    { name: "spells" }
  )
);

export default useSpellsStore;
