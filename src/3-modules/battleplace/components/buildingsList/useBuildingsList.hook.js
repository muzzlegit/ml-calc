import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { getBattleplacePicture } from "modules/battleplace/utils/battleplace.helpers";
import { usePlayerStore } from "modules/players";
import useUnitsStore from "modules/units/store/unitsStore";
import { UNITS } from "modules/units/utils/units.constants";

const useBuildingsList = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const towers = useBattleplaceStore((state) => state.towers);
  const fortifications = useBattleplaceStore((state) => state.fortifications);
  const gate = useBattleplaceStore((state) => state.gate);
  const race = usePlayerStore((state) => state.mainDefender.race);
  const { decreaseUnitProperty } = useUnitsStore((state) => state.methods);
  const {
    deleteTower,
    deleteGate,
    deleteFortification,
    getFortifications,
    decreaseGarrisonUnitProperty,
  } = useBattleplaceStore((state) => state.methods);

  const isCastle = battleplace === "castle";

  const graphics = {
    towerImg: getBattleplacePicture("tower", isCastle ? "monsters" : race),
    magicTowerImg: getBattleplacePicture(
      "magicTower",
      isCastle ? "monsters" : race
    ),
    fortificationImg: getBattleplacePicture(
      "fortification",
      isCastle ? "monsters" : race
    ),
    gateImg: getBattleplacePicture("gate"),
    perfectIcon: getBattleplacePicture("perfectIcon"),
  };

  function removeFortificationDefense(id) {
    const { quantity, defense } = getFortifications().find(
      (fortification) => id === fortification.id
    );
    const totalDefense = quantity * defense;
    UNITS.forEach((unit) => {
      isCastle
        ? decreaseGarrisonUnitProperty(unit, "defense", totalDefense)
        : decreaseUnitProperty("mainDefender", unit, "defense", totalDefense);
    });
  }

  const handleDeleteBuilding = (type, id) => {
    switch (type) {
      case "tower":
        deleteTower(id);
        break;
      case "magicTower":
        deleteTower(id);
        break;
      case "fortification":
        removeFortificationDefense(id);
        deleteFortification(id);
        break;
      case "gate":
        deleteGate();
        break;
      default:
        break;
    }
  };

  return {
    towers,
    fortifications,
    gate,
    graphics,
    handleDeleteBuilding,
  };
};

export default useBuildingsList;
