import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { getBattleplacePicture } from "modules/battleplace/utils/battleplace.helpers";
import useUnitsStore from "modules/units/store/unitsStore";

const useBattleplacePicture = () => {
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const race = useUnitsStore((state) => state.mainDefender.race);

  const isPlace = battlefield !== "mine";

  const graphics = {
    fieldImg: getBattleplacePicture(battlefield),
    placeImg:
      battleplace === "town"
        ? getBattleplacePicture(battleplace, race)
        : getBattleplacePicture(battleplace),
  };

  return { isPlace, graphics };
};

export default useBattleplacePicture;
