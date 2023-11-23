import { useContext } from "react";
import PlayerContext from "utils/context/PlayerContext";

const usePlayerContext = () => {
  const player = useContext(PlayerContext);

  return player;
};

export default usePlayerContext;
