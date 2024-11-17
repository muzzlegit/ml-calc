import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getElementRating, getInitialBuildingsList } from "../utils/helpers";

const useStore = create(
  devtools(
    immer((set, get) => ({
      buildings: getInitialBuildingsList(),
      buildingsRating: 0,
      armyRating: 0,
      resourcesRating: 0,
      server: "Шахтерский",

      getBuildings: () => {
        return get().buildings;
      },
      changeBuildingQuantity: (id, level, quantity, prevQuantity) => {
        set((state) => {
          state.buildings = state.buildings.map((building) => {
            if (building.id === id) {
              const rating = building.levels[level].rating;
              state.buildingsRating += rating * (quantity - prevQuantity);
              return {
                ...building,
                levels: {
                  ...building.levels,
                  [level]: {
                    rating: building.levels[level].rating,
                    quantity,
                  },
                },
              };
            } else {
              return building;
            }
          });
        });
      },
      increaseArmyRating: (value) => {
        set((state) => {
          state.armyRating += value;
        });
      },
      decreaseArmyRating: (value) => {
        set((state) => {
          state.armyRating -= value;
        });
      },
      increaseResourceRating: (value) => {
        set((state) => {
          state.resourcesRating += value;
        });
      },
      decreaseResourceRating: (value) => {
        set((state) => {
          state.resourcesRating -= value;
        });
      },
      addElement: (element) => {
        set((state) => {
          state.elements.set(element.id, element);
          state.rating = state.rating + getElementRating(element);
        });
      },
      getElementById: (id) => (state) => {
        return state.elements.get(id);
      },
      removeElement: (element) => {
        set((state) => {
          state.elements.delete(element.id);
          state.rating = state.rating - getElementRating(element);
        });
      },
      removeAllElements: () => {
        set((state) => {
          state.elements.clear();
          state.rating = 0;
        });
      },
    })),
    { name: "rating Calculator" }
  )
);

export default useStore;
