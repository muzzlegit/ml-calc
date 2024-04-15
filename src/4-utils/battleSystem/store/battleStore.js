import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useBattleStore = create(
  devtools(
    immer((set, get) => ({
      startAttackersArmies: {},
      startDefendersArmies: {},
      attackersArmies: {},
      defendersArmies: {},
      battle: {},
      retreatedArmies: {},
      retreatedRounds: {},
      winner: "defender",
      methods: {
        getAttackersArmies: () => {
          return get().attackersArmies;
        },
        getDefendersArmies: () => {
          return get().defendersArmies;
        },
        getStartAttackersArmies: () => {
          return get().startAttackersArmies;
        },
        getStartDefendersArmies: () => {
          return get().startDefendersArmies;
        },
        setStartAttackersArmies: (armies) => {
          set((state) => {
            state.startAttackersArmies = { ...armies };
          });
        },
        setStartDefendersArmies: (armies) => {
          set((state) => {
            state.startDefendersArmies = { ...armies };
          });
        },
        setAttackersArmies: (armies) => {
          set((state) => {
            state.attackersArmies = { ...armies };
          });
        },
        setDefendersArmies: (armies) => {
          set((state) => {
            state.defendersArmies = { ...armies };
          });
        },
        setBattle: (round, attackersArmies, defendersArmies) => {
          set((state) => {
            state.battle = {
              ...state.battle,
              [round]: { attackersArmies, defendersArmies },
            };
          });
        },
        setRetreatedArmies: (round, player, army) => {
          set((state) => {
            state.retreatedArmies = {
              ...state.retreatedArmies,
              [player]: army,
            };
            state.retreatedRounds = {
              ...state.retreatedRounds,
              [player]: round,
            };
          });
        },
        setWinner: (winner) => {
          set((state) => (state.winner = winner));
        },
      },
    })),
    { name: "Battle" }
  )
);

export default useBattleStore;
