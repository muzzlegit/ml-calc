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
        attackIndex: "min",
        homeLand: getHomeland(initialRace),
        standards: [...getStandards("mainAttacker")],
        fallback: 1,
        buffs: [],
        fearlessness: false,
        recoil: 0,
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
        fallback: 1,
        buffs: [],
        fearlessness: false,
        recoil: 0,
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
        fallback: 1,
        buffs: [],
        fearlessness: false,
        recoil: 0,
        unitsDamage: 0,
        roundDamage: 0,
        attackBoost: 0,
        towersLevelReduce: false,
      },
      mainDefender: {
        participant: true,
        apostate: true,
        race: initialRace,
        fraction: getFraction(initialRace),
        attackIndex: "max",
        homeLand: getHomeland(initialRace),
        standards: [...getStandards("mainDefender")],
        fallback: 1,
        buffs: [],
        fearlessness: false,
        recoil: 0,
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
        fallback: 1,
        buffs: [],
        fearlessness: false,
        recoil: 0,
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
        fallback: 1,
        buffs: [],
        fearlessness: false,
        recoil: 0,
        unitsDamage: 0,
        roundDamage: 0,
        attackBoost: 0,
        towersLevelReduce: false,
      },
      garrison: { race: "monsters", fraction: "monsters", apostate: false },
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
        getBattleParam: () => ({
          roundDamage: {
            mainAttacker: get().mainAttacker.roundDamage,
            attackerAlly: get().attackerAlly.roundDamage,
            attackerSecondAlly: get().attackerSecondAlly.roundDamage,
            mainDefender: get().mainDefender.roundDamage,
            firstDefenderAlly: get().firstDefenderAlly.roundDamage,
            secondDefenderAlly: get().secondDefenderAlly.roundDamage,
            garrison: 0,
          },
          unitsDamage: {
            mainAttacker: get().mainAttacker.unitsDamage,
            attackerAlly: get().attackerAlly.unitsDamage,
            attackerSecondAlly: get().attackerSecondAlly.unitsDamage,
            mainDefender: get().mainDefender.unitsDamage,
            firstDefenderAlly: get().firstDefenderAlly.unitsDamage,
            secondDefenderAlly: get().secondDefenderAlly.unitsDamage,
            garrison: 0,
          },
          attackBoost: {
            mainAttacker: get().mainAttacker.attackBoost,
            attackerAlly: get().attackerAlly.attackBoost,
            attackerSecondAlly: get().attackerSecondAlly.attackBoost,
            mainDefender: get().mainDefender.attackBoost,
            firstDefenderAlly: get().firstDefenderAlly.attackBoost,
            secondDefenderAlly: get().secondDefenderAlly.attackBoost,
            garrison: 0,
          },
          towerLevelReduce: {
            mainAttacker: get().mainAttacker.towersLevelReduce,
            attackerAlly: get().attackerAlly.towersLevelReduce,
            attackerSecondAlly: get().attackerSecondAlly.towersLevelReduce,
            mainDefender: get().mainDefender.towersLevelReduce,
            firstDefenderAlly: get().firstDefenderAlly.towersLevelReduce,
            secondDefenderAlly: get().secondDefenderAlly.towersLevelReduce,
            garrison: 0,
          },
        }),
        getUnitsDamage: () => ({
          mainAttacker: get().mainAttacker.unitsDamage,
          attackerAlly: get().attackerAlly.unitsDamage,
          attackerSecondAlly: get().attackerSecondAlly.unitsDamage,
          mainDefender: get().mainDefender.unitsDamage,
          firstDefenderAlly: get().firstDefenderAlly.unitsDamage,
          secondDefenderAlly: get().secondDefenderAlly.unitsDamage,
          garrison: 0,
        }),
        getRecoil: () => ({
          mainAttacker: get().mainAttacker.recoil,
          attackerAlly: get().attackerAlly.recoil,
          attackerSecondAlly: get().attackerSecondAlly.recoil,
          mainDefender: get().mainDefender.recoil,
          firstDefenderAlly: get().firstDefenderAlly.recoil,
          secondDefenderAlly: get().secondDefenderAlly.recoil,
          garrison: 0,
        }),
        getFearlessness: () => ({
          mainAttacker: get().mainAttacker.fearlessness,
          attackerAlly: get().attackerAlly.fearlessness,
          attackerSecondAlly: get().attackerSecondAlly.fearlessness,
          mainDefender: get().mainDefender.fearlessness,
          firstDefenderAlly: get().firstDefenderAlly.fearlessness,
          secondDefenderAlly: get().secondDefenderAlly.fearlessness,
          garrison: false,
        }),
        getFallback: () => ({
          mainAttacker: get().mainAttacker.fallback,
          attackerAlly: get().attackerAlly.fallback,
          attackerSecondAlly: get().attackerSecondAlly.fallback,
          mainDefender: get().mainDefender.fallback,
          firstDefenderAlly: get().firstDefenderAlly.fallback,
          secondDefenderAlly: get().secondDefenderAlly.fallback,
          garrison: 1,
        }),
        setFallback: (player, value) => {
          set((state) => {
            state[player].fallback = value;
          });
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
        setProperty: (player, property, value) => {
          set((state) => {
            state[player][property] = value;
          });
        },
        addBuff: (player, buff) => {
          set((state) => {
            if (state[player].buffs.find(({ id }) => id === buff.id)) return;
            state[player].buffs = [...state[player].buffs, buff];
          });
        },
        removeBuff: (player, buffId) => {
          console.log("store", player, buffId);
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
