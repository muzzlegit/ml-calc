import usePlayerContext from "utils/context/usePlayerContext.hook";
import usePlayerStore from "../store/playerStore";

const useApostate = () => {
  const player = usePlayerContext();
  const apostate = usePlayerStore((state) => state[player].apostate);
  const setApostete = usePlayerStore((state) => state.methods.setApostate);

  const handleApostate = () => {
    setApostete(player, !apostate);
  };

  return { apostate, handleApostate };
};

export default useApostate;
