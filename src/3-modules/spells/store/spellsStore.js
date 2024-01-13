import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import spells from "../data/spells.json";

const useSpellsStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        spells: [...spells],
      },
      attackerAlly: {
        spells: [],
      },
      attackerSecondAlly: {
        spells: [],
      },
      mainDefender: {
        spells: [...spells],
      },
      firstDefenderAlly: {
        spells: [],
      },
      secondDefenderAlly: {
        spells: [],
      },
      methods: {
        getSpell: (player, id) => {
          return get()[player].spells.find((spell) => spell.id === id);
        },
        setSpellLevel: (player, id, values) => {
          set((state) => {
            state[player].spells = state[player].spells.map((spell) => {
              if (spell.id === id) {
                return { ...spell, ...values };
              } else {
                return spell;
              }
            });
          });
        },
      },
    })),
    { name: "spells" }
  )
);

export default useSpellsStore;
