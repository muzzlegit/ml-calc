import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { getBattleplacePicture } from "modules/battleplace/utils/battleplace.helpers";
import { usePlayerStore } from "modules/players";

const useBattleplacePicture = () => {
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const race = usePlayerStore((state) => state.mainDefender.race);

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
