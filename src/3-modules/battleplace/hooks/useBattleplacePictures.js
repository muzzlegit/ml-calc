import useUnitsStore from "modules/units/store/unitsStore";
import useBattleplaceStore from "../store/battleplaceStore";
import { getBattleplacePicture } from "../utils/battleplace.helpers";

const useBattleplacePictures = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const race = useUnitsStore((state) => state.mainDefender.race);

  const buildingRace = battleplace === "castle" ? "monsters" : race;

  const fieldImg = getBattleplacePicture(battlefield);
  const placeImg =
    battleplace === "town"
      ? getBattleplacePicture(battleplace, race)
      : getBattleplacePicture(battleplace);

  const towerImg = getBattleplacePicture("tower", buildingRace);
  const magicTowerImg = getBattleplacePicture("magicTower", buildingRace);
  const fortificationImg = getBattleplacePicture("fortification", buildingRace);
  const gateImg = getBattleplacePicture("gate", "monsters");
  const perfectIcon = getBattleplacePicture("perfectIcon");

  const towerIcon = getBattleplacePicture("towerIcon");
  const magicTowerIcon = getBattleplacePicture("magicTowerIcon");
  const fortificationIcon = getBattleplacePicture("fortificationIcon");
  const gateIcon = getBattleplacePicture("gateIcon");

  return {
    fieldImg,
    placeImg,
    towerImg,
    magicTowerImg,
    fortificationImg,
    gateImg,
    towerIcon,
    magicTowerIcon,
    fortificationIcon,
    gateIcon,
    perfectIcon,
  };
};

export default useBattleplacePictures;
