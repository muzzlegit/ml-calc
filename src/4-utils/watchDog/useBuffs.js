import { useBattleplaceStore } from "modules/battleplace";
import { getFortificationInitialProperty } from "modules/battleplace/utils/battleplace.helpers";
import { usePlayerStore } from "modules/players";
import { useUnitsStore } from "modules/units";
import { UNITS_LANDS } from "modules/units/utils/units.constants";
import { useEffect } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import {
  FORTIFICATIONS_INITIAL_PROPERTIES,
  INITIAL_PROPERTIES,
  MAGIC_TOWERS_INITIAL_PROPERTIES,
} from "./watchDog.constants";
import { getEnemy } from "./watchDog.helpers";
import useWatchDogStore from "./watchDogStore";

const useBuffs = () => {
  const player = usePlayerContext();
  const buffs = useWatchDogStore((state) => state[player].buffs);
  const { getBuffs } = useWatchDogStore((state) => state.methods);
  const { race, fraction } = usePlayerStore((state) => state[player]);
  const { race: enemyRace, fraction: enemyFraction } = usePlayerStore(
    (state) => state[getEnemy(player)]
  );
  const {
    battlefield,
    battleplace,
    methods: {
      getTowers,
      replaceTower,
      getFortifications,
      updateFortifications,
    },
  } = useBattleplaceStore((state) => state);
  const { setUnitProperties } = useUnitsStore((state) => state.methods);

  const isCastle = battleplace === "castle";

  useEffect(() => {
    let formattedBuffs = {};
    let unitsPropertyBuffs = { ...INITIAL_PROPERTIES };
    let fortificationsPropertyBuffs = { ...FORTIFICATIONS_INITIAL_PROPERTIES };
    let magicTowersBuffs = { ...MAGIC_TOWERS_INITIAL_PROPERTIES };
    let towersBuffs = { ...MAGIC_TOWERS_INITIAL_PROPERTIES };

    buffs.forEach((buff) => {
      if (buff.battle) {
        const { appliedOn, targetType } = buff;
        formattedBuffs[appliedOn] = {
          ...(formattedBuffs?.[appliedOn] ?? []),
          [targetType]: [
            ...(formattedBuffs?.[appliedOn]?.[targetType] ?? []),
            buff,
          ],
        };
      }
    });
    for (const key in formattedBuffs) {
      const appliedOn = formattedBuffs[key];
      if (appliedOn?.magicTower && player === "mainDefender") {
        applyBuffsToMagicTowers(appliedOn.magicTower);
      }
      if (appliedOn?.tower && player === "mainDefender") {
        applyBuffsToTowers(appliedOn.tower);
      }
      switch (key) {
        case "all":
          if (appliedOn?.tower && player === "mainDefender") {
            applyBuffsToTowers(appliedOn.tower);
          }
          if (appliedOn?.fortification && player === "mainDefender") {
            applyBuffsToFortifications(appliedOn.fortification);
          }
          if (appliedOn?.gate) console.log("gate");
          if (appliedOn?.player) console.log("player");
          if (appliedOn?.unit) {
            applyBuffsToUnits(appliedOn.unit);
          }
          break;
        case "raceAttack":
          if (race === enemyRace) {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "monsters":
          if (enemyRace === "monsters" || race === "monsters") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "monsters_enemy":
          if (enemyRace === "monsters") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "fractionAttack":
          if (fraction === enemyFraction) {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "homeland":
          if (appliedOn?.unit) {
            applyBuffsToUnits(appliedOn.unit);
          }
          break;
        case "fraction":
          if (fraction !== enemyFraction) {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "battlefieldAttack":
          if (appliedOn?.unit) {
            applyBattlefieldAttackBuffsToUnits(appliedOn.unit);
          }
          break;
        case "steppe":
          if (battlefield === "steppe") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "forest":
          if (battlefield === "forest") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "mountain":
          if (battlefield === "mountain") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "desert":
          if (battlefield === "desert") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "mine":
          if (battlefield === "mine") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "puddle":
          if (battleplace === "puddle") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "castle":
          if (
            battleplace === "castle" &&
            [
              "mainDefender",
              "firstDefenderAlly",
              "secondDefenderAlly",
            ].includes(player)
          ) {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        default:
          break;
      }
    }
    //-- set up unit properties
    for (const key in unitsPropertyBuffs) {
      setUnitProperties(player, key, unitsPropertyBuffs[key]);
    }
    //-- set up fortification properties
    if (player === "mainDefender") {
      for (const key in fortificationsPropertyBuffs) {
        const updatedFortifications = getFortifications().map(
          (fortification) => {
            switch (key) {
              case "damageRate":
                return {
                  ...fortification,
                  [key]: fortificationsPropertyBuffs[key],
                };
              default:
                return {
                  ...fortification,
                  [key]:
                    fortificationsPropertyBuffs[key] +
                    getFortificationInitialProperty(
                      fortification.level,
                      battleplace === "castle"
                    )[key],
                };
            }
          }
        );
        updateFortifications(updatedFortifications);
      }
      //-- set up magicTower properties
      for (const key in magicTowersBuffs) {
        const magicTowers = getTowers(player).filter(
          ({ type }) => type === "magicTower"
        );
        if (!magicTowers.length) return;
        magicTowers.forEach((magicTower) => {
          replaceTower({ ...magicTower, [key]: magicTowersBuffs[key] });
        });
      }
      //-- set up tower properties
      for (const key in towersBuffs) {
        const towers = getTowers(player).filter(({ type }) => type === "tower");
        if (!towers.length) return;
        towers.forEach((tower) => {
          replaceTower({ ...tower, [key]: towersBuffs[key] });
        });
      }
    }
    //-- helpers
    function applyBuffsToUnits(buffs) {
      buffs.forEach((buff) => {
        const { units, property, value, valueIndex } = buff;
        switch (property) {
          case "amountRate":
            units.forEach((unit) => {
              unitsPropertyBuffs[unit] = {
                ...unitsPropertyBuffs[unit],
                [property]:
                  value[valueIndex] <
                  (unitsPropertyBuffs?.[unit]?.[property] ?? 0)
                    ? value[valueIndex]
                    : unitsPropertyBuffs?.[unit]?.[property],
              };
            });
            break;
          default:
            units.forEach((unit) => {
              unitsPropertyBuffs[unit] = {
                ...unitsPropertyBuffs[unit],
                [property]: Number(
                  (
                    value[valueIndex] +
                    (unitsPropertyBuffs?.[unit]?.[property] ?? 0)
                  ).toFixed(2)
                ),
              };
            });
            break;
        }
      });
    }

    function applyBattlefieldAttackBuffsToUnits(buffs) {
      buffs.forEach((buff) => {
        const { units, property, value } = buff;
        units.forEach((unit) => {
          if (
            battlefield !== UNITS_LANDS[unit].homeLand &&
            battlefield !== UNITS_LANDS[unit].alienLand
          )
            return;

          const index = battlefield === UNITS_LANDS[unit].homeLand ? 0 : 1;
          unitsPropertyBuffs[unit] = {
            ...unitsPropertyBuffs[unit],
            [property]: Number(
              (
                value[index] + (unitsPropertyBuffs?.[unit]?.[property] ?? 0)
              ).toFixed(2)
            ),
          };
        });
      });
    }

    function applyBuffsToFortifications(buffs) {
      buffs.forEach((buff) => {
        const { property, value, valueIndex, appliedOn, target } = buff;
        if (
          (isCastle && (appliedOn === "castle" || target === "enemy")) ||
          (!isCastle && appliedOn !== "castle")
        ) {
          fortificationsPropertyBuffs[property] = Number(
            (
              (fortificationsPropertyBuffs[property] ?? 0) + value[valueIndex]
            ).toFixed(2)
          );
        }
      });
    }

    function applyBuffsToMagicTowers(buffs) {
      buffs.forEach((buff) => {
        const { property, value, valueIndex, appliedOn, target } = buff;
        if (
          (isCastle && (appliedOn === "castle" || target === "enemy")) ||
          (!isCastle && appliedOn !== "castle")
        ) {
          magicTowersBuffs[property] = Number(
            ((magicTowersBuffs[property] ?? 0) + value[valueIndex]).toFixed(2)
          );
        }
      });
    }

    function applyBuffsToTowers(buffs) {
      buffs.forEach((buff) => {
        const { property, value, valueIndex, appliedOn, target } = buff;
        if (
          (isCastle && (appliedOn === "castle" || target === "enemy")) ||
          (!isCastle && appliedOn !== "castle")
        ) {
          towersBuffs[property] = Number(
            ((towersBuffs[property] ?? 0) + value[valueIndex]).toFixed(2)
          );
        }
      });
    }
  }, [
    battlefield,
    battleplace,
    buffs,
    enemyFraction,
    enemyRace,
    fraction,
    getFortifications,
    getTowers,
    isCastle,
    player,
    race,
    replaceTower,
    setUnitProperties,
    updateFortifications,
  ]);
};

export default useBuffs;
