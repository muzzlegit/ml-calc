import { useCallback } from "react";
import useBattleplaceStore from "../store/battleplaceStore";

const useBattlefield = () => {
  const battlefield = useBattleplaceStore((state) => state.battlefield);
  const setBattlefield = useBattleplaceStore(
    (state) => state.methods.setBattlefield
  );

  const handleBattlefield = useCallback(
    (field) => {
      setBattlefield(field);
    },
    [setBattlefield]
  );

  return { battlefield, handleBattlefield };
};

export default useBattlefield;
