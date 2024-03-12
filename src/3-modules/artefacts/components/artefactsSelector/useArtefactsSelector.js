import { useArtefact } from "modules/artefacts/hooks";
import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import { ARTEFACTS_PLACES } from "modules/artefacts/utils/artefact.constants";
import {
  getArtefactBuffs,
  getArtefactIcon,
  getKitArtefacts,
  getKitsList,
  setIdToArtefact,
} from "modules/artefacts/utils/artefact.helpers";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const defaultSelectorValue = "Выбрать комплект";

const useArtefactsSelector = () => {
  const player = usePlayerContext();
  const currentKit = useArtefactsStore((state) => state[player].kit);
  const { getArtefact } = useArtefactsStore((state) => state.methods);

  const [kitTitle, setKitTitle] = useState(defaultSelectorValue);
  const [kitAncient, setKitAncient] = useState(false);
  const [kitPerfect, setKitPerfect] = useState(false);
  const { buffsProvider } = useBuffsProvider();
  const { asignArtefact, deleteAllArtefacts } = useArtefact();

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
      setKitTitle("Выбрать комплект");
      deleteAllArtefacts();
      return;
    }
    if (kitTitle === "Королевский") {
      setKitAncient(false);
    }
    deleteAllArtefacts();
    getKitArtefacts(kitTitle, kitAncient, kitPerfect).forEach((artefact) => {
      const formattedArtefact = setIdToArtefact(artefact);
      asignArtefact(formattedArtefact);
      if (formattedArtefact?.twoHanded)
        asignArtefact({
          ...formattedArtefact,
          place: "leftHand",
          buffs: { common: [], perfect: [] },
        });
    });
    applyKitsBuffs("add");
    setKitTitle(kitTitle);
  };

  useEffect(() => {
    if (!currentKit) {
      setKitTitle(defaultSelectorValue);
    } else {
      setKitTitle(currentKit?.setTitle);
    }
  }, [currentKit]);

  //-- helpers
  function applyKitsBuffs(key) {
    ARTEFACTS_PLACES.forEach((place) => {
      buffsProvider(getArtefactBuffs(getArtefact(player, place)), key);
    });
  }

  return {
    kitTitle,
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
