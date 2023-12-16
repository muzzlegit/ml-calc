import usePlayerStore from "modules/players/store/playerStore";
import usePlayerContext from "utils/context/usePlayerContext.hook";

function useAttackIndex() {
  const player = usePlayerContext();
  const attackIndex = usePlayerStore((state) => state[player].attackIndex);
  const setAttackIndex = usePlayerStore(
    (state) => state.methods.setAttackIndex
  );

  const handleAttackIndex = (index) => {
    setAttackIndex(player, index);
  };

  return { attackIndex, handleAttackIndex };
}

export default useAttackIndex;
