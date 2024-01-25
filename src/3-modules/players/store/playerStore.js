import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getFraction, getHomeland } from "../utils/player.helpers";

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
      },
    })),
    { name: "player" }
  )
);

export default usePlayerStore;
