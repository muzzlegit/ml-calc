import { useArtefact } from "modules/artefacts/hooks";
import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import { ARTEFACTS_PLACES } from "modules/artefacts/utils/artefact.constants";
import {
  getArtefactIcon,
  getArtefcactBuffs,
  getKitArtefacts,
  getKitsList,
} from "modules/artefacts/utils/artefact.helpers";
import { useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useArtefactsSelector = () => {
  const player = usePlayerContext();
  const [kit, setKit] = useState("Выбрать комплект");
  const [kitAncient, setKitAncient] = useState(false);
  const [kitPerfect, setKitPerfect] = useState(false);
  const { getArtefact } = useArtefactsStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();
  const { asignArtefact, removeArtefacts } = useArtefact();

  const kitsList = getKitsList();

  const graphics = {
    ancientIcon: getArtefactIcon("ancientIcon"),
    perfectIcon: getArtefactIcon("perfectIcon"),
  };

  const handleAncient = (value) => {
    setKitAncient(value);
  };
  const handlePerfect = (value) => {
    setKitPerfect(value);
  };
  const handleKits = (kitTitle) => {
    if (kitTitle === "Выбрать комплект") {
      applyKitsBuffs("delete");
      removeArtefacts();
    }
    if (kitTitle === "Королевский") {
      setKitAncient(false);
    }
    applyKitsBuffs("delete");
    removeArtefacts();
    getKitArtefacts(kitTitle, kitAncient, kitPerfect).forEach((artefact) => {
      asignArtefact(artefact);
      if (artefact?.twoHanded)
        asignArtefact({
          ...artefact,
          place: "leftHand",
          buffs: { common: [], perfect: [] },
        });
    });
    applyKitsBuffs("add");
    setKit(kitTitle);
  };

  function applyKitsBuffs(key) {
    ARTEFACTS_PLACES.forEach((place) => {
      buffsProvider(getArtefcactBuffs(getArtefact(player, place)), key);
    });
  }

  return {
    kit,
    kitAncient,
    kitPerfect,
    graphics,
    handleKits,
    handleAncient,
    handlePerfect,
    kitsList,
  };
};

export default useArtefactsSelector;
