import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import {
  getBattleplacePicture,
  getBuildingData,
} from "modules/battleplace/utils/battleplace.helpers";
import { usePlayerStore } from "modules/players";
import useUnitsStore from "modules/units/store/unitsStore";
import { UNITS } from "modules/units/utils/units.constants";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useBuildingsSelector = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const castleAttackIndex = useBattleplaceStore((state) => state.attackIndex);
  const defenderAttackIndex = usePlayerStore(
    (state) => state.mainDefender.attackIndex
  );
  const towers = useBattleplaceStore((state) => state.towers);
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeBuilding, setActiveBuilding] = useState("tower");
  const [fortificationQuantity, setFortificationQuantity] = useState(0);
  const { increaseUnitProperty, decreaseUnitProperty } = useUnitsStore(
    (state) => state.methods
  );
  const { buffsTrigger } = useBuffsProvider();

  const {
    addTower,
    deleteTower,
    replaceTower,
    addFortifications,
    deleteFortifications,
    replaceFortification,
    setGate,
    deleteGate,
    getTowers,
    getFortifications,
    increaseGarrisonUnitProperty,
    decreaseGarrisonUnitProperty,
  } = useBattleplaceStore((state) => state.methods);
  const isCastle = battleplace === "castle";
  const attackIndex = isCastle ? castleAttackIndex : defenderAttackIndex;
  const isTowersLimit =
    towers?.length === 2 &&
    (activeBuilding === "tower" || activeBuilding === "magicTower");

  if (isCastle && activeLevel === 8) setActiveLevel(7);
  if (!isCastle && activeBuilding === "gate") setActiveBuilding("tower");

  const graphics = {
    towerIcon: getBattleplacePicture("towerIcon"),
    fortificationIcon: getBattleplacePicture("fortificationIcon"),
    magicTowerIcon: getBattleplacePicture("magicTowerIcon"),
    gateIcon: getBattleplacePicture("gateIcon"),
    largePerfectIcon: getBattleplacePicture("largePerfectIcon"),
  };

  function removeFortificationDefense() {
    const fortifications = getFortifications();
    fortifications.forEach(({ quantity, defense }) => {
      const totalDefense = quantity * defense;
      UNITS.forEach((unit) => {
        isCastle
          ? decreaseGarrisonUnitProperty(unit, "defense", totalDefense)
          : decreaseUnitProperty("mainDefender", unit, "defense", totalDefense);
      });
    });
  }

  const handleOnLevelClick = (level) => {
    setActiveLevel(Number(level));
  };

  const handleOnBuildingClick = (build) => {
    setActiveBuilding(build);
  };

  const handleFortificationQuantity = (quantity) => {
    if (isNaN(Number(quantity))) return;
    setFortificationQuantity(Number(quantity) > 56 ? 56 : Number(quantity));
  };

  const handleDeleteAllBuildings = () => {
    deleteTower(undefined, true);
    removeFortificationDefense();
    deleteFortifications();
    deleteGate();
  };

  const handleAddBuilding = (buildingType) => {
    const newBuilding = getBuildingData(
      buildingType,
      nanoid(),
      activeLevel,
      attackIndex,
      fortificationQuantity,
      isCastle
    );
    switch (buildingType) {
      case "tower":
        addTower(newBuilding);
        break;
      case "magicTower":
        addTower(newBuilding);
        break;
      case "fortification":
        if (fortificationQuantity) {
          addFortifications(newBuilding);
          const { quantity, defense } = newBuilding;
          UNITS.forEach((unit) => {
            isCastle
              ? increaseGarrisonUnitProperty(
                  unit,
                  "defense",
                  quantity * defense
                )
              : increaseUnitProperty(
                  "mainDefender",
                  unit,
                  "defense",
                  quantity * defense
                );
          });
        }
        break;
      case "gate":
        setGate(newBuilding);
        break;
      default:
        break;
    }
    buffsTrigger("mainDefender");
  };

  useEffect(() => {
    const currentTowers = getTowers();
    const currentFortifications = getFortifications();
    if (currentTowers?.length) {
      currentTowers.forEach(({ id, type, level }) => {
        const newBuilding = getBuildingData(
          type,
          id,
          level,
          attackIndex,
          null,
          isCastle
        );
        switch (type) {
          case "tower":
            replaceTower(newBuilding);
            break;
          case "magicTower":
            replaceTower(newBuilding);
            break;
          default:
            break;
        }
      });
    }

    if (currentFortifications?.length) {
      currentFortifications.forEach(
        ({ id, type, race, defense, quantity, level }) => {
          const newFortification = getBuildingData(
            type,
            id,
            level === 8 && isCastle ? 7 : level,
            attackIndex,
            quantity,
            isCastle
          );

          if (
            (isCastle && race !== "monsters ") ||
            (!isCastle && race !== "units")
          ) {
            if (isCastle) {
              UNITS.forEach((unit) => {
                decreaseUnitProperty(
                  "mainDefender",
                  unit,
                  "defense",
                  quantity * defense
                );
                increaseGarrisonUnitProperty(
                  unit,
                  "defense",
                  newFortification.quantity * newFortification.defense
                );
              });
            } else {
              UNITS.forEach((unit) => {
                decreaseGarrisonUnitProperty(
                  unit,
                  "defense",
                  defense * quantity
                );
                increaseUnitProperty(
                  "mainDefender",
                  unit,
                  "defense",
                  newFortification.quantity * newFortification.defense
                );
              });
            }
          }
          replaceFortification(newFortification);
        }
      );
    }
  }, [
    attackIndex,
    decreaseGarrisonUnitProperty,
    decreaseUnitProperty,
    getFortifications,
    getTowers,
    increaseGarrisonUnitProperty,
    increaseUnitProperty,
    isCastle,
    replaceFortification,
    replaceTower,
  ]);

  useEffect(() => {
    if (battleplace !== "castle") deleteGate("gate");
  }, [battleplace, deleteGate]);

  return {
    activeLevel,
    activeBuilding,
    fortificationQuantity,
    isCastle,
    isTowersLimit,
    graphics,
    handleOnBuildingClick,
    handleOnLevelClick,
    handleFortificationQuantity,
    handleAddBuilding,
    handleDeleteAllBuildings,
  };
};

export default useBuildingsSelector;
