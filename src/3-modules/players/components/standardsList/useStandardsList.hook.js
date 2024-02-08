import usePlayerStore from "modules/players/store/playerStore";
import { getStandardsBackground } from "modules/players/utils/player.helpers";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useStandardsList = () => {
  const player = usePlayerContext();
  const standards = usePlayerStore((state) => state[player].standards);
  const { getStandard, setStandard } = usePlayerStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();

  const graphics = {
    background: getStandardsBackground(),
  };

  const handleStandardsQuantity = (id) => {
    const currentStandard = getStandard(player, id);
    const { quantity, buffs } = currentStandard;
    const nextQuantity = quantity === 6 ? 0 : quantity + 1;
    const formattedStandard = {
      ...currentStandard,
      quantity: nextQuantity,
      buffs: buffs.map((buff) => {
        return {
          ...buff,
          id,
          valueIndex: 0,
          value: [buff.singleValue * nextQuantity],
        };
      }),
    };
    setStandard(player, formattedStandard);
    switch (nextQuantity) {
      case 0:
        buffsProvider(formattedStandard.buffs, "delete");
        break;
      case 1:
        buffsProvider(formattedStandard.buffs, "add");
        break;
      default:
        buffsProvider(formattedStandard.buffs, "replace");
        break;
    }
  };

  return { standards, graphics, handleStandardsQuantity };
};

export default useStandardsList;
