import usePlayerStore from "modules/players/store/playerStore";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useFallbackInput = () => {
  const player = usePlayerContext();
  const fallback = usePlayerStore((state) => state[player].fallback);
  const { setFallback } = usePlayerStore((state) => state.methods);

  const handleFallbackValue = (value) => {
    if (isNaN(Number(value))) return;
    const formattedValue = Number(value);
    if (value > 100) {
      setFallback(player, 1);
      return;
    }
    setFallback(player, formattedValue / 100);
  };

  const handleBlur = () => {
    if (fallback * 100 < 50) setFallback(player, 0.5);
  };

  return {
    fallback: (fallback * 100).toFixed(0),
    handleFallbackValue,
    handleBlur,
  };
};

export default useFallbackInput;
