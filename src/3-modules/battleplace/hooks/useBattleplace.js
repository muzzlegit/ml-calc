import { useCallback } from "react";
import useBattleplaceStore from "../store/battleplaceStore";

const useBattleplace = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const setBattleplace = useBattleplaceStore(
    (state) => state.methods.setBattleplace
  );

  const isActive = battlefield !== "mine";

  if (battlefield === "mine") setBattleplace("town");

  const handleBattleplace = useCallback(
    (place) => {
      setBattleplace(place);
    },
    [setBattleplace]
  );

  return { battleplace, handleBattleplace, isActive };
};

export default useBattleplace;
