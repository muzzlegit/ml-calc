import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getFraction, getHomeland } from "../utils/player.helpers";

const initialRace = "undead";

const usePlayerStore = create(
  devtools(
    immer((set) => ({
      mainAttacker: {
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
