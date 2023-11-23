import usePlayerContext from "utils/context/usePlayerContext.hook";
import useUnitsStore from "../store/unitsStore";

function useAttackIndex() {
  const player = usePlayerContext();
  const attackIndex = useUnitsStore((state) => state[player].attackIndex);
  const setAttackIndex = useUnitsStore((state) => state.methods.setAttackIndex);

  const handleAttackIndex = (index) => {
    setAttackIndex(player, index);
  };

  return { attackIndex, handleAttackIndex };
}

export default useAttackIndex;
