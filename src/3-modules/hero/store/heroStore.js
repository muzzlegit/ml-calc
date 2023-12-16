import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useHeroStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        hero: null,
      },
      attackerAlly: {
        hero: null,
      },
      attackerSecondAlly: {
        hero: null,
      },
      mainDefender: {
        hero: null,
      },
      firstDefenderAlly: {
        hero: null,
      },
      secondDefenderAlly: {
        hero: null,
      },
      methods: {
        getHero: (player) => {
          return get()[player].hero;
        },
        setHero: (player, hero) => {
          set((state) => {
            state[player].hero = hero;
          });
        },
      },
    })),
    { name: "hero" }
  )
);

export default useHeroStore;
