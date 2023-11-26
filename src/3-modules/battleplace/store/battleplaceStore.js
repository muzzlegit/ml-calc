import { getInitialUnitsData } from "modules/units/utils/units.helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useBattleplaceStore = create(
  devtools(
    immer((set) => ({
      battleplace: "town",
      battlefield: "deadLand",
      garrison: getInitialUnitsData("monsters", 3),
      attackIndex: "max",
      race: "monsters",
      towers: [],
      fortifications: [],
      gate: [],
      methods: {
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
        setGarrisonUnitAmount: (unitName, amount) => {
          set((state) => {
            state.garrison[unitName] = { ...state.garrison[unitName], amount };
          });
        },
        addTower: (tower) => {
          set((state) => {
            state.towers = [...state.towers, tower];
          });
        },
        deleteTower: (id, all) => {
          set((state) => {
            if (all) {
              state.towers = [];
              return;
            }
            state.towers = state.towers.filter((tower) => tower.id === id);
          });
        },
      },
    })),
    { name: "battlefield" }
  )
);

export default useBattleplaceStore;
