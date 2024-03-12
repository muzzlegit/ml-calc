import { getInitialUnitsData } from "modules/units/utils/units.helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useBattleplaceStore = create(
  devtools(
    immer((set, get) => ({
      battleplace: "town",
      battlefield: "hollyLand",
      garrison: getInitialUnitsData("monsters", 3),
      attackIndex: "max",
      // race: "human",
      towers: [],
      fortifications: [],
      gate: null,
      methods: {
        //--- getters
        getBattlefield: () => get().battlefield,
        getBattleplace: () => get().battleplace,
        getGarrison: () => get().garrison,
        getAttackIndex: () => get().getAttackIndex,
        getTowers: () => {
          return get().towers;
        },
        getFortifications: () => {
          return get().fortifications;
        },
        getGate: () => get().gate,
        getState: () => get(),
        //--- setters
        setBattlefield: (field) => {
          set((state) => {
            state.battlefield = field;
          });
        },
        setBattleplace: (place) => {
          set((state) => {
            state.battleplace = place;
          });
        },
        setAttackIndex: (index) => {
          set((state) => {
            state.attackIndex = index;
          });
        },
        setGarrisonUnit: (unitName, unit) => {
          set((state) => {
            state.garrison[unitName] = { ...state.garrison[unitName], ...unit };
          });
        },
        setGarrisonUnitAmount: (unitName, amount) => {
          set((state) => {
            state.garrison[unitName] = { ...state.garrison[unitName], amount };
          });
        },
        increaseGarrisonUnitProperty: (unit, property, value) => {
          set((state) => {
            state.garrison[unit][property] =
              state.garrison[unit][property] + value;
          });
        },
        decreaseGarrisonUnitProperty: (unit, property, value) => {
          set((state) => {
            state.garrison[unit][property] =
              state.garrison[unit][property] - value;
          });
        },

        addTower: (tower) => {
          set((state) => {
            state.towers = [...state.towers, tower];
          });
        },
        replaceTower: (tower) => {
          set((state) => {
            state.towers = state.towers.map((item) =>
              item.id === tower.id ? tower : item
            );
          });
        },
        deleteTower: (id, all) => {
          set((state) => {
            if (all) {
              state.towers = [];
              return;
            }
            state.towers = state.towers.filter((tower) => tower.id !== id);
          });
        },
        addFortifications: (fortifications) => {
          set((state) => {
            state.fortifications = [
              ...state.fortifications.filter(
                ({ level }) => level !== fortifications.level
              ),
              fortifications,
            ];
          });
        },
        replaceFortification: (fortification) => {
          set((state) => {
            state.fortifications = state.fortifications.map((item) =>
              item.id === fortification.id ? fortification : item
            );
          });
        },
        deleteFortification: (id) => {
          set((state) => {
            state.fortifications = [
              ...state.fortifications.filter((item) => item.id !== id),
            ];
          });
        },
        updateFortifications: (fortifications) => {
          set((state) => {
            state.fortifications = [...fortifications];
          });
        },
        deleteFortifications: () => {
          set((state) => {
            state.fortifications = [];
          });
        },
        setGate: (gate) => {
          set((state) => {
            state.gate = gate;
          });
        },
        deleteGate: () => {
          set((state) => {
            state.gate = null;
          });
        },
      },
    })),
    { name: "battlefield" }
  )
);

export default useBattleplaceStore;
