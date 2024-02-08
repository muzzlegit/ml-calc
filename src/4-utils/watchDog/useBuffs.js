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
} from "./watchDog.constants";
import { getEnemy, shouldApplyToBuilding } from "./watchDog.helpers";
import useWatchDogStore from "./watchDogStore";

const useBuffs = () => {
  const player = usePlayerContext();
  const buffs = useWatchDogStore((state) => state[player].buffs);
  const { race, fraction } = usePlayerStore((state) => state[player]);
  const { race: enemyRace, fraction: enemyFraction } = usePlayerStore(
    (state) => state[getEnemy(player)]
  );
  const {
    battlefield,
    battleplace,
    methods: { getFortifications, updateFortifications },
  } = useBattleplaceStore((state) => state);
  const { setUnitProperties } = useUnitsStore((state) => state.methods);

  useEffect(() => {
    let formattedBuffs = {};
    let unitsPropertyBuffs = { ...INITIAL_PROPERTIES };
    let fortificationsPropertyBuffs = { ...FORTIFICATIONS_INITIAL_PROPERTIES };
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
      switch (key) {
        case "all":
          if (appliedOn?.tower) console.log("tower");
          if (appliedOn?.magicTower) console.log("magicTower");
          if (appliedOn?.fortification) {
            applyBuffsToFortifications(appliedOn.fortification);
            console.log("d", formattedBuffs);
            console.log("werwerw", fortificationsPropertyBuffs);
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
        default:
          break;
      }
    }
    //-- set up unit properties
    for (const key in unitsPropertyBuffs) {
      setUnitProperties(player, key, unitsPropertyBuffs[key]);
    }
    //-- set up fortification properties
    for (const key in fortificationsPropertyBuffs) {
      console.log(fortificationsPropertyBuffs);
      const updatedFortifications = getFortifications().map((fortification) => {
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
      });
      updateFortifications(updatedFortifications);
    }

    //-- helpers
    function applyBuffsToUnits(buffs) {
      buffs.forEach((buff) => {
        const { units, property, value, valueIndex } = buff;
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
        const { property, value, valueIndex } = buff;
        if (shouldApplyToBuilding(buff)) {
          fortificationsPropertyBuffs[property] = Number(
            (
              (fortificationsPropertyBuffs[property] ?? 0) + value[valueIndex]
            ).toFixed(2)
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
    player,
    race,
    setUnitProperties,
    updateFortifications,
  ]);
};

export default useBuffs;
