import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { BATTLEPLACES } from "modules/battleplace/utils/battleplace.constants";
import { useCallback } from "react";

const useBattleplaceSelector = () => {
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const { setBattleplace } = useBattleplaceStore((state) => state.methods);

  const place = BATTLEPLACES[battleplace];
  const options = BATTLEPLACES;

  const isActive = battlefield !== "mine";

  if (battlefield === "mine") setBattleplace("town");

  const handleBattleplace = useCallback(
    (selectedPlace) => {
      setBattleplace(selectedPlace);
    },
    [setBattleplace]
  );

  return { place, options, isActive, handleBattleplace };
};

export default useBattleplaceSelector;
