import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { BATTLEFIELDS } from "modules/battleplace/utils/battleplace.constants";
import { useCallback } from "react";

const useBattlefieldsSelector = () => {
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const setBattlefield = useBattleplaceStore(
    (state) => state.methods.setBattlefield
  );

  const field = BATTLEFIELDS[battlefield];
  const options = BATTLEFIELDS;

  const handleBattlefield = useCallback(
    (field) => {
      setBattlefield(field);
    },
    [setBattlefield]
  );

  return { battlefield, field, options, handleBattlefield };
};

export default useBattlefieldsSelector;
