import { useBattleplaceStore } from "modules/battleplace";
import { usePlayerStore } from "modules/players";
import { useUnitsStore } from "modules/units";
import { UNITS_LANDS } from "modules/units/utils/units.constants";
import { useEffect } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import { INITIAL_PROPERTIES } from "./watchDog.constants";
import { getEnemy } from "./watchDog.helpers";
import useWatchDogStore from "./watchDogStore";

const useBuffs = () => {
  const player = usePlayerContext();
  const buffs = useWatchDogStore((state) => state[player].buffs);
  const { race, fraction } = usePlayerStore((state) => state[player]);
  const { race: enemyRace, fraction: enemyFraction } = usePlayerStore(
    (state) => state[getEnemy(player)]
  );
  const { getRace, getFraction } = usePlayerStore((state) => state.methods);
  const { battlefield } = useBattleplaceStore((state) => state);
  const { setUnitProperties } = useUnitsStore((state) => state.methods);

  useEffect(() => {
    let formattedBuffs = {};
    let unitsPropertyBuffs = { ...INITIAL_PROPERTIES };
    buffs.forEach((buff) => {
      const { appliedOn, targetType } = buff;
      formattedBuffs[appliedOn] = {
        ...(formattedBuffs?.[appliedOn] ?? []),
        [targetType]: [
          ...(formattedBuffs?.[appliedOn]?.[targetType] ?? []),
          buff,
        ],
      };
    });
    console.log(formattedBuffs);
    for (const key in formattedBuffs) {
      const appliedOn = formattedBuffs[key];
      switch (key) {
        case "all":
          if (appliedOn?.tower) console.log("tower");
          if (appliedOn?.magicTower) console.log("magicTower");
          if (appliedOn?.fortification) console.log("fortification");
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
        default:
          break;
      }
    }
    //-- set up unit properties
    for (const key in unitsPropertyBuffs) {
      setUnitProperties(player, key, unitsPropertyBuffs[key]);
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
  }, [
    battlefield,
    buffs,
    enemyFraction,
    enemyRace,
    fraction,
    getFraction,
    getRace,
    player,
    race,
    setUnitProperties,
  ]);
};

export default useBuffs;
