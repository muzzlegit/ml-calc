import { usePlayerStore } from "modules/players";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useUnitAmount = () => {
  const player = usePlayerContext();
  const { fearlessness, recoil } = usePlayerStore((state) =>
    player === "garrison" ? {} : state[player]
  );

  const getUnitAmount = (amount, amountRate) => {
    if (fearlessness) {
      return Math.floor(amount + amount * amountRate * recoil).toLocaleString(
        "ru-RU"
      );
    }
    return Math.floor(amount * (1 + amountRate)).toLocaleString("ru-RU");
  };

  return getUnitAmount;
};

export default useUnitAmount;
