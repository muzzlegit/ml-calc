import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getInitialUnitsData } from "../utils/units.helpers";

const mainAttackerRace = "demon";
const mainDefenderRace = "human";

const useUnitsStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        ...getInitialUnitsData(mainAttackerRace, 4),
      },
      attackerAlly: {
        ...getInitialUnitsData(mainAttackerRace, 4),
      },
      attackerSecondAlly: {
        ...getInitialUnitsData(mainAttackerRace, 4),
      },
      mainDefender: {
        ...getInitialUnitsData(mainDefenderRace, 4),
      },
      firstDefenderAlly: {
        ...getInitialUnitsData(mainDefenderRace, 4),
      },
      secondDefenderAlly: {
        ...getInitialUnitsData(mainDefenderRace, 4),
      },
      methods: {
        getUnit: (player, unit) => {
          return get()[player][unit];
        },
        getAllPlayersUnits: () => ({
          mainAttacker: get().mainAttacker,
          attackerAlly: get().attackerAlly,
          attackerSecondAlly: get().attackerSecondAlly,
          mainDefender: get().mainDefender,
          firstDefenderAlly: get().firstDefenderAlly,
          secondDefenderAlly: get().secondDefenderAlly,
        }),
        setUnit: (player, unitName, unit) => {
          set((state) => {
            state[player][unitName] = { ...state[player][unitName], ...unit };
          });
        },
        setUnitAmount: (player, unit, amount) => {
          set((state) => {
            state[player][unit] = { ...state[player][unit], amount };
          });
        },
        setUnitLevel: (player, unit, level) => {
          set((state) => {
            state[player][unit] = { ...state[player][unit], level };
          });
        },
        increaseUnitProperty: (player, unit, property, value) => {
          set((state) => {
            state[player][unit][property] =
              state[player][unit][property] + value;
          });
        },
        decreaseUnitProperty: (player, unit, property, value) => {
          set((state) => {
            state[player][unit][property] =
              state[player][unit][property] - value;
          });
        },
        setUnitProperties: (player, unit, properties) => {
          set((state) => {
            state[player][unit] = { ...state[player][unit], ...properties };
          });
        },
      },
    })),

    { name: "units" }
  )
);

export default useUnitsStore;
