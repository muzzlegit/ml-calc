import { useCallback } from "react";
import useBattleplaceStore from "../store/battleplaceStore";
import { BATTLEFIELDS } from "../utils/battleplace.constants";

const useBattlefield = () => {
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const setBattlefield = useBattleplaceStore(
    (state) => state.methods.setBattlefield
  );
  const value = BATTLEFIELDS[battlefield];
  const options = BATTLEFIELDS;

  const handleBattlefield = useCallback(
    (field) => {
      setBattlefield(field);
    },
    [setBattlefield]
  );

  return { battlefield, handleBattlefield, value, options };
};

export default useBattlefield;
