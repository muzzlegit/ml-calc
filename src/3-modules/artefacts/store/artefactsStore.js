import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialSet = {
  head: null,
  armor: null,
  belt: null,
  pants: null,
  boots: null,
  neck: null,
  bracers: null,
  ring: null,
  rightHand: null,
  bag: null,
  back: null,
  leftHand: null,
};

const useArtefactsStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        artefacts: initialSet,
        kit: null,
        selectedArtefact: null,
        selectedPlace: null,
      },
      attackerAlly: {
        artefacts: initialSet,
        kit: null,
        selectedArtefact: null,
        selectedPlace: null,
      },
      attackerSecondAlly: {
        artefacts: initialSet,
        kit: null,
        selectedArtefact: null,
        selectedPlace: null,
      },
      mainDefender: {
        artefacts: initialSet,
        kit: null,
        selectedArtefact: null,
        selectedPlace: null,
      },
      firstDefenderAlly: {
        artefacts: initialSet,
        kit: null,
        selectedArtefact: null,
        selectedPlace: null,
      },
      secondDefenderAlly: {
        artefacts: initialSet,
        kit: null,
        selectedArtefact: null,
        selectedPlace: null,
      },
      methods: {
        getAllArtefactsArray: (player) => {
          return [...get()[player].artefacts];
        },
        getArtefact: (player, place) => {
          return get()[player].artefacts[place];
        },
        getSelectedArtefact: (player) => {
          return get()[player].selectedArtefact;
        },
        getKit: (player) => {
          return get()[player].kit;
        },
        setArtefact: (player, artefact) => {
          set((state) => {
            state[player].artefacts[artefact?.place] = artefact;
          });
        },
        removeAllArtefacts: (player) => {
          set((state) => {
            state[player].artefacts = initialSet;
          });
        },
        removeArtefact: (player, place) => {
          set((state) => {
            state[player].artefacts[place] = null;
          });
        },
        replaceArtefactValue: (player, place, value) => {
          set((state) => {
            state[player].artefacts[place] = {
              ...state[player].artefacts[place],
              ...value,
            };
          });
        },
        setSelectedArtefact: (player, artefact) => {
          set((state) => {
            state[player].selectedArtefact = artefact;
          });
        },
        replaceSelectedArtefactValue: (player, value) => {
          set((state) => {
            state[player].selectedArtefact = {
              ...state[player].selectedArtefact,
              ...value,
            };
          });
        },
        setSelectedPlace: (player, place) => {
          set((state) => {
            state[player].selectedPlace = place;
          });
        },
        setKit: (player, kit) => {
          set((state) => {
            state[player].kit = kit;
          });
        },
      },
    })),
    { name: "artefacts" }
  )
);

export default useArtefactsStore;
