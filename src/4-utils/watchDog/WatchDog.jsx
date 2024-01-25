import useBattlefieldBuffs from "./useBattlefieldBuffs";
import useBuffs from "./useBuffs";
import useFractionBuffs from "./useFractionBuffs";

const WatchDog = () => {
  useBattlefieldBuffs();
  useFractionBuffs();
  useBuffs();
};

export default WatchDog;
