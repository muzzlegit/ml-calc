import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  getFraction,
  getHomeland,
  getStandards,
} from "../utils/player.helpers";

const initialRace = "undead";

const usePlayerStore = create(
  devtools(
    immer((set, get) => ({
      mainAttacker: {
        participant: true,
        apostate: false,
        race: initialRace,
        fraction: getFraction(initialRace),
        attackIndex: "max",
        homeLand: getHomeland(initialRace),
        standards: [...getStandards("mainAttacker")],
        buffs: [],
        fearlessness: false,
        unitsDamage: 0,
        roundDamage: 0,
        attackBoost: 0,
        towersLevelReduce: false,
      },
      attackerAlly: {
        participant: false,
        apostate: false,
        race: initialRace,
        fraction: getFraction(initialRace),
        attackIndex: "max",
        homeLand: getHomeland(initialRace),
        standards: [...getStandards("attackerAlly")],
        buffs: [],
        fearlessness: false,
        unitsDamage: 0,
        roundDamage: 0,
        attackBoost: 0,
        towersLevelReduce: false,
      },
      attackerSecondAlly: {
        participant: false,
        apostate: false,
        race: initialRace,
        fraction: getFraction(initialRace),
        attackIndex: "max",
        homeLand: getHomeland(initialRace),
        standards: [...getStandards("attackerSecondAlly")],
        buffs: [],
        fearlessness: false,
        unitsDamage: 0,
        roundDamage: 0,
        attackBoost: 0,
        towersLevelReduce: false,
      },
      mainDefender: {
        participant: true,
        apostate: false,
        race: initialRace,
        fraction: getFraction(initialRace),
        attackIndex: "max",
        homeLand: getHomeland(initialRace),
        standards: [...getStandards("mainDefender")],
        buffs: [],
        fearlessness: false,
        unitsDamage: 0,
        roundDamage: 0,
        attackBoost: 0,
        towersLevelReduce: false,
      },
      firstDefenderAlly: {
        participant: false,
        apostate: false,
        race: initialRace,
        fraction: getFraction(initialRace),
        attackIndex: "max",
        homeLand: getHomeland(initialRace),
        standards: [...getStandards("firstDefenderAlly")],
        buffs: [],
        fearlessness: false,
        unitsDamage: 0,
        roundDamage: 0,
        attackBoost: 0,
        towersLevelReduce: false,
      },
      secondDefenderAlly: {
        participant: false,
        apostate: false,
        race: initialRace,
        fraction: getFraction(initialRace),
        attackIndex: "max",
        homeLand: getHomeland(initialRace),
        standards: [...getStandards("secondDefenderAlly")],
        buffs: [],
        fearlessness: false,
        unitsDamage: 0,
        roundDamage: 0,
        attackBoost: 0,
        towersLevelReduce: false,
      },
      methods: {
        getParticipantFlag: (player) => {
          return get()[player].participant;
        },
        getRace: (player) => {
          return get()[player].race;
        },
        getFraction: (player) => {
          return get()[player].fraction;
        },
        getHomeland: (player) => {
          return get()[player].homeLand;
        },
        getStandard: (player, id) => {
          return get()[player].standards.find((standard) => standard.id === id);
        },
        getPlayerBuffs: (player) => {
          return get()[player].buffs;
        },
        setParticipantFlag: (player, flag) => {
          set((state) => {
            state[player].participant = flag;
          });
        },
        setApostate: (player, apostate) => {
          set((state) => {
            state[player].apostate = apostate;
          });
        },
        setRace: (player, race) => {
          set((state) => {
            state[player].race = race;
            state[player].fraction = getFraction(race);
            state[player].homeLand = getHomeland(race);
          });
        },
        setAttackIndex: (player, index) => {
          set((state) => {
            state[player].attackIndex = index;
          });
        },
        setStandard: (player, newStandard) => {
          set((state) => {
            state[player].standards = state[player].standards.map(
              (standard) => {
                if (standard.id !== newStandard.id) return standard;
                return newStandard;
              }
            );
          });
        },
        addBuff: (player, buff) => {
          set((state) => {
            if (state[player].buffs.find(({ id }) => id === buff.id)) return;
            state[player].buffs = [...state[player].buffs, buff];
          });
        },
        removeBuff: (player, buffId) => {
          set((state) => {
            state[player].buffs = [
              ...state[player].buffs.filter(({ id }) => id !== buffId),
            ];
          });
        },
        replaceBuff: (player, buff) => {
          set((state) => {
            state[player].buffs = [
              ...state[player].buffs.filter(({ id }) => id !== buff.id),
              buff,
            ];
          });
        },
      },
    })),
    { name: "player" }
  )
);

export default usePlayerStore;
