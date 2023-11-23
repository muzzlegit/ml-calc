import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  getInitialUnitsData,
  getUnitsFraction,
  getUnitsHomeland,
} from "../utils/units.helpers";

const mainAttackerRace = "demon";
const mainDefenderRace = "human";

const useUnitsStore = create(
  devtools(
    immer((set) => ({
      mainAttacker: {
        ...getInitialUnitsData(mainAttackerRace, 4),
        race: mainAttackerRace,
        homeLand: getUnitsHomeland(mainAttackerRace),
        fraction: getUnitsFraction(mainAttackerRace),
        attackIndex: "max",
      },
      mainDefender: {
        ...getInitialUnitsData(mainDefenderRace, 4),
        race: mainDefenderRace,
        homeLand: getUnitsHomeland(mainDefenderRace),
        fraction: getUnitsFraction(mainDefenderRace),
        attackIndex: "max",
      },
      methods: {
        setUnit: (player, unitName, unit) => {
          set((state) => {
            state[player][unitName] = { ...state[player][unitName], ...unit };
          });
        },
        setRace: (player, race) => {
          set((state) => {
            state[player].race = race;
            state[player].fraction = getUnitsFraction(race);
            state[player].homeLand = getUnitsHomeland(race);
          });
        },
        setAttackIndex: (player, index) => {
          set((state) => {
            state[player].attackIndex = index;
          });
        },
      },
    })),

    { name: "units" }
  )
);

export default useUnitsStore;
