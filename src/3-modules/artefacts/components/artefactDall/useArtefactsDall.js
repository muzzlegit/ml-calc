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
  const [isKit, setIsKit] = useState(false);

  useEffect(() => {
    let kit = {};
    let checker = false;
    for (const key in artefacts) {
      if (artefacts[key]) {
        const { set } = artefacts[key];
        kit[set] = kit[set] ? kit[set] + 1 : 1;
        if (kit[set] + 1 >= 9) {
          setIsKit(true);
          deletePreviousBuffs();
          setKit(player, getKitData(set));
          buffsProvider(getKitData(set)?.buffs, "add");
          checker = true;
        }
        if (checker && kit[set] < 9) {
          checker = false;
          setIsKit(false);
          deletePreviousBuffs();
          setKit(player, null);
        }
      }
      if (!checker) setIsKit(false);
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
