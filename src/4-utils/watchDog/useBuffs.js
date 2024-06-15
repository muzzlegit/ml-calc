import { useArtefactsStore } from "modules/artefacts";
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
  PLAYER_INITIAL_PROPERTIES,
} from "./watchDog.constants";
import { getEnemy } from "./watchDog.helpers";
import useWatchDogStore from "./watchDogStore";

const useBuffs = () => {
  const player = usePlayerContext();
  const buffs = useWatchDogStore((state) => state[player].buffs);
  const { getAllArtefacts } = useArtefactsStore((state) => state.methods);
  const { setProperty } = usePlayerStore((state) => state.methods);
  const { race, fraction } = usePlayerStore((state) => state[player]);
  const { race: mainDefenderRace, fraction: enemyFraction } = usePlayerStore(
    (state) => state[getEnemy(player)]
  );
  const {
    battlefield,
    battleplace,
    towers,
    methods: {
      getTowers,
      replaceTower,
      getFortifications,
      updateFortifications,
      setGarrisonUnitProperties,
    },
  } = useBattleplaceStore((state) => state);
  const { setUnitProperties } = useUnitsStore((state) => state.methods);

  const isCastle = battleplace === "castle";

  const enemyRace = isCastle ? "monsters" : mainDefenderRace;

  useEffect(() => {
    let formattedBuffs = {};
    let unitsPropertyBuffs = { ...INITIAL_PROPERTIES };
    let fortificationsPropertyBuffs = { ...FORTIFICATIONS_INITIAL_PROPERTIES };
    let magicTowersBuffs = { ...MAGIC_TOWERS_INITIAL_PROPERTIES };
    let towersBuffs = { ...MAGIC_TOWERS_INITIAL_PROPERTIES };
    let playerBuffs = { ...PLAYER_INITIAL_PROPERTIES };

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
          if (appliedOn?.player) applyBuffsToPlayer(appliedOn.player);
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
          if (fraction === enemyFraction && !isCastle) {
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
          if (fraction !== enemyFraction && !isCastle) {
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
        case "steppe_all":
          if (appliedOn?.player[0]) {
            const buff = appliedOn?.player[0];
            const { ancient } = buff;
            if (ancient || battlefield === "steppe") {
              applyBuffsToPlayer([{ ...buff, value: [true] }]);
            } else {
              console.log("buff", buff);
              applyBuffsToPlayer([buff]);
            }
          }
          break;
        case "deadLand_demon":
          if (battlefield === "deadLand" && race === "demon") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "cursedForest_drow":
          if (battlefield === "cursedForest" && race === "drow") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "cursedForest_undead":
          if (battlefield === "cursedForest" && race === "undead") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "magicForest_elf":
          if (battlefield === "magicForest" && race === "elf") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "hollyLand_human":
          if (battlefield === "hollyLand" && race === "human") {
            if (appliedOn?.unit) {
              applyBuffsToUnits(appliedOn.unit);
            }
          }
          break;
        case "adaptation":
          if (battlefield === "mountain" && appliedOn?.unit) {
            appliedOn.unit.forEach((buff) => {
              applyBuffsToUnits([{ ...buff, units: [buff.units[0]] }]);
            });
          }
          if (battlefield === "steppe" && appliedOn?.unit) {
            appliedOn.unit.forEach((buff) => {
              applyBuffsToUnits([{ ...buff, units: [buff.units[3]] }]);
            });
          }
          if (battlefield === "desert" && appliedOn?.unit) {
            appliedOn.unit.forEach((buff) => {
              applyBuffsToUnits([{ ...buff, units: [buff.units[2]] }]);
            });
          }
          if (battlefield === "forest" && appliedOn?.unit) {
            appliedOn.unit.forEach((buff) => {
              applyBuffsToUnits([{ ...buff, units: [buff.units[1]] }]);
            });
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
      if (player === "garrison") {
        setGarrisonUnitProperties(key, unitsPropertyBuffs[key]);
      } else {
        setUnitProperties(player, key, unitsPropertyBuffs[key]);
      }
    }
    //-- set up player properties
    for (const key in playerBuffs) {
      setProperty(player, key, playerBuffs[key]);
    }
    //-- set up fortification properties
    console.log("start buffs", player);
    if (player === "mainDefender") {
      console.log("first", player, towersBuffs);
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
      console.log("dfdf", player);
      //-- set up magicTower properties
      for (const key in magicTowersBuffs) {
        const magicTowers = getTowers(player).filter(
          ({ type }) => type === "magicTower"
        );
        if (!magicTowers.length) continue;
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

    function applyBuffsToPlayer(buffs) {
      buffs.forEach((buff) => {
        const { property, value, valueIndex } = buff;
        switch (property) {
          case "fearlessness":
            playerBuffs[property] = value[valueIndex];
            break;
          case "recoil":
            playerBuffs[property] = value[valueIndex];
            break;
          case "towersLevelReduce":
            playerBuffs[property] = value[valueIndex];
            break;
          default:
            playerBuffs[property] =
              (playerBuffs?.[property] ?? 0) + value[valueIndex];
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
            terrainModification: Number(
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
    setGarrisonUnitProperties,
    setProperty,
    setUnitProperties,
    updateFortifications,
  ]);
};

export default useBuffs;
