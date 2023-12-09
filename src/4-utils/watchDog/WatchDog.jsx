import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { UNIT_BONUS_TERRAINS } from "modules/battleplace/utils/battleplace.constants";
import {
  APOSTATE_ATTACK_BUFF,
  BATTLEFIELD_ATTACK_BUFF,
  HOMELAND_DEFENSE_BUFF,
} from "modules/battleplace/utils/buffs";
import { usePlayerStore } from "modules/players";
import useUnitsStore from "modules/units/store/unitsStore";
import { UNITS, UNITS_LANDS } from "modules/units/utils/units.constants";
import { useEffect } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import {
  getEnemy,
  getHomeland,
  getInitialBuff,
  isAttacker,
} from "./watchDog.helpers";
import useWatchDogStore from "./watchDogStore";

const WatchDog = () => {
  const player = usePlayerContext();
  const battlefield = useBattleplaceStore((state) => state.battlefield);

  const race = useUnitsStore((state) => state[player].race);
  const enemyRace = useUnitsStore((state) => state[getEnemy(player)].race);

  const fraction = useUnitsStore((state) => state[player].fraction);
  const enemyFraction = useUnitsStore(
    (state) => state[getEnemy(player)].fraction
  );

  const apostate = usePlayerStore((state) => state[player].apostate);
  const enemyApostate = usePlayerStore(
    (state) => state[getEnemy(player)].apostate
  );

  const { addBattlefieldBuff, removeBattlefieldBuff, getBuffs } =
    useWatchDogStore((state) => state.methods);
  const { increaseUnitProperty, decreaseUnitProperty } = useUnitsStore(
    (state) => state.methods
  );

  const handleFortificationDefense = (key, quantity, defense) => {
    switch (key) {
      case "add":
        UNITS.forEach((unit) =>
          increaseUnitProperty(player, unit, "defense", quantity * defense)
        );
        break;
      case "delete":
        UNITS.forEach((unit) =>
          decreaseUnitProperty(player, unit, "defense", quantity * defense)
        );
        break;
      default:
        break;
    }
  };

  //--- homeland effect
  useEffect(() => {
    const homelandDefense = getInitialBuff(player, HOMELAND_DEFENSE_BUFF);
    const { id, property, units, value } = homelandDefense;
    const buff = getBuffs(player).find((buff) => buff.id === id);
    if (battlefield === getHomeland(race) && !apostate) {
      if (isAttacker(player) && race === enemyRace && !enemyApostate) {
        if (!buff) return;
        units.forEach((unit) => {
          decreaseUnitProperty(player, unit, property, value);
        });
        removeBattlefieldBuff(player, id);
      } else {
        if (buff) return;
        units.forEach((unit) => {
          increaseUnitProperty(player, unit, property, value);
        });
        addBattlefieldBuff(player, homelandDefense);
      }
    } else {
      if (!buff) return;
      units.forEach((unit) => {
        decreaseUnitProperty(player, unit, property, value);
      });
      removeBattlefieldBuff(player, id);
    }
  }, [
    addBattlefieldBuff,
    apostate,
    battlefield,
    decreaseUnitProperty,
    enemyApostate,
    enemyRace,
    getBuffs,
    increaseUnitProperty,
    player,
    race,
    removeBattlefieldBuff,
  ]);

  //--- terrain effect
  useEffect(() => {
    const { id, units, property, value } = BATTLEFIELD_ATTACK_BUFF;
    const buff = getBuffs(player).find((buff) => buff.id === id);
    const appliedOn = buff?.appliedOn ?? "homeland";

    if (
      UNIT_BONUS_TERRAINS.includes(battlefield) &&
      appliedOn !== battlefield
    ) {
      removeBattlefieldBuff(player, id);
      addBattlefieldBuff(player, {
        ...BATTLEFIELD_ATTACK_BUFF,
        player,
        appliedOn: battlefield,
      });
      units.forEach((unit) => {
        if (UNITS_LANDS[unit].homeLand === battlefield) {
          increaseUnitProperty(player, unit, property, value[0]);
        }
        if (appliedOn === UNITS_LANDS[unit].homeLand) {
          decreaseUnitProperty(player, unit, property, value[0]);
        }
        if (UNITS_LANDS[unit].alienLand === battlefield) {
          increaseUnitProperty(player, unit, property, value[1]);
        }
        if (appliedOn === UNITS_LANDS[unit].alienLand) {
          decreaseUnitProperty(player, unit, property, value[1]);
        }
      });
    } else {
      if (buff) {
        removeBattlefieldBuff(player, id);
        const { appliedOn } = buff;
        units.forEach((unit) => {
          if (appliedOn === UNITS_LANDS[unit].homeLand)
            decreaseUnitProperty(player, unit, property, value[0]);
          if (appliedOn === UNITS_LANDS[unit].alienLand)
            decreaseUnitProperty(player, unit, property, value[1]);
        });
      }
    }
  }, [
    addBattlefieldBuff,
    battlefield,
    decreaseUnitProperty,
    getBuffs,
    increaseUnitProperty,
    player,
    removeBattlefieldBuff,
  ]);

  //--- apostate effect
  useEffect(() => {
    const { id, units, property, value } = APOSTATE_ATTACK_BUFF;
    const buff = getBuffs(player).find((buff) => buff.id === id);
    const isSameRace = race === enemyRace;

    if (isAttacker(player) && fraction === enemyFraction && !enemyApostate) {
      if (buff) {
        removeBattlefieldBuff(player, id);
        units.forEach((unit) => {
          decreaseUnitProperty(
            player,
            unit,
            property,
            value[buff.appliedOn === "race" ? 1 : 0]
          );
        });
      }
      const apostateAttackBuff = {
        ...APOSTATE_ATTACK_BUFF,
        player,
        appliedOn: isSameRace ? "race" : "fraction",
        value: value[isSameRace ? 1 : 0],
      };

      addBattlefieldBuff(player, apostateAttackBuff);
      units.forEach((unit) => {
        increaseUnitProperty(player, unit, property, value[isSameRace ? 1 : 0]);
      });
    } else {
      if (!buff) return;
      removeBattlefieldBuff(player, id);
      units.forEach((unit) => {
        decreaseUnitProperty(
          player,
          unit,
          property,
          value[buff.appliedOn === "race" ? 1 : 0]
        );
      });
    }
  }, [
    addBattlefieldBuff,
    decreaseUnitProperty,
    enemyApostate,
    enemyFraction,
    enemyRace,
    fraction,
    getBuffs,
    increaseUnitProperty,
    player,
    race,
    removeBattlefieldBuff,
  ]);

  return null;
};

export default WatchDog;
