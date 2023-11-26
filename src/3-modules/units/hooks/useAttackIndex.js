import usePlayerContext from "utils/context/usePlayerContext.hook";
import { useShallow } from "zustand/react/shallow";
import useUnitsStore from "../store/unitsStore";

function useAttackIndex() {
  const player = usePlayerContext();
  const attackIndex = useUnitsStore(
    useShallow((state) => state[player].attackIndex)
  );
  const setAttackIndex = useUnitsStore(
    useShallow((state) => state.methods.setAttackIndex)
  );

  const handleAttackIndex = (index) => {
    setAttackIndex(player, index);
  };

  return { attackIndex, handleAttackIndex };
}

export default useAttackIndex;
