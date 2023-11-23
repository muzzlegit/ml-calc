import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const usePlayerStore = create(
  devtools(
    immer((set) => ({
      mainAttacker: {
        apostate: false,
      },
      attackerAlly: {
        apostate: false,
      },
      attackerSecondAlly: {
        apostate: false,
      },
      mainDefender: {
        apostate: false,
      },
      firstDefenderAlly: {
        apostate: false,
      },
      secondDefenderAlly: {
        apostate: false,
      },
      methods: {
        setApostate: (player, apostate) => {
          set((state) => {
            state[player].apostate = apostate;
          });
        },
      },
    })),
    { name: "player" }
  )
);

export default usePlayerStore;
