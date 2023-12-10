import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useHeroStore = create(
  devtools(
    immer((set) => ({
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
        hero: true,
      },
      firstDefenderAlly: {
        hero: null,
      },
      secondDefenderAlly: {
        hero: null,
      },
      methods: {
        setApostate: (player, apostate) => {
          set((state) => {
            state[player].apostate = apostate;
          });
        },
      },
    })),
    { name: "hero" }
  )
);

export default useHeroStore;
