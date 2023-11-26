import useUnitsStore from "modules/units/store/unitsStore";
import useBattleplaceStore from "../store/battleplaceStore";
import {
  getBattleplacePicture,
  getPlacePicture,
} from "../utils/battleplace.helpers";

const useBattleplacePictures = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const race = useUnitsStore((state) => state.mainDefender.race);
  const field = getBattleplacePicture(battlefield);
  const place =
    battleplace === "town"
      ? getPlacePicture(battleplace, race)
      : getBattleplacePicture(battleplace);

  const isPlace = battlefield !== "mine";

  return { field, place, isPlace };
};

export default useBattleplacePictures;
