import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import {
  getArtefactIcon,
  getKitData,
} from "modules/artefacts/utils/artefact.helpers";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useArtefactsDall = () => {
  const player = usePlayerContext();
  const artefacts = useArtefactsStore((state) => state[player].artefacts);
  const { setKit, getKit } = useArtefactsStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();
  const [isKit, setIsKit] = useState(getKit(player) ? true : false);

  useEffect(() => {
    const newKit = getFullKitTitle();
    const currentKit = getCurrentKitTitle();

    if (newKit) {
      if (newKit !== currentKit) {
        setIsKit(true);
        deletePreviousBuffs();
        const newKitData = getKitData(newKit);
        setKit(player, newKitData);
        buffsProvider(newKitData?.buffs, "add");
      }
    } else {
      if (currentKit) {
        setIsKit(false);
        deletePreviousBuffs();
        setKit(player, null);
      }
    }

    function getCurrentKitTitle() {
      return getKit(player) ? getKit(player).setTitle : false;
    }

    function getFullKitTitle() {
      const artefactsCount = { empty: 0 };
      for (const key in artefacts) {
        const artefact = artefacts?.[key];
        if (artefact) {
          const set = artefact.set;
          if (artefactsCount[set]) {
            artefactsCount[set]++;
            if (artefactsCount[set] >= 9) {
              return set;
            }
          } else {
            artefactsCount[set] = 1;
          }
        } else {
          artefactsCount.empty++;
          if (artefactsCount.empty > 3) {
            return false;
          }
        }
      }
      return false;
    }

    function deletePreviousBuffs() {
      const currentKit = getKit(player);
      if (currentKit) {
        buffsProvider(currentKit.buffs, "delete");
      }
    }
  }, [artefacts, buffsProvider, getKit, player, setKit]);

  const graphics = {
    frame: getArtefactIcon("artCell"),
  };

  return { isKit, graphics };
};

export default useArtefactsDall;
