import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";
import useArtefactsStore from "../store/artefactsStore";
import {
  getArtefactBuffs,
  setIdToArtefactBuffs,
} from "../utils/artefact.helpers";

const useArtefact = () => {
  const player = usePlayerContext();
  const {
    getAllArtefacts,
    getArtefact,
    setArtefact,
    removeAllArtefacts,
    removeArtefact,
    replaceArtefactValue,
  } = useArtefactsStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();

  const asignArtefact = (artefact) => {
    if (!artefact) return;
    if (getArtefact(player, artefact.place)?.twoHanded)
      removeArtefact(player, "leftHand");
    deletePreviosArtefactBuffs(artefact.place);
    const formattedArtefact = setIdToArtefactBuffs(player, artefact);
    handleArtefactBuffs(formattedArtefact, "add");
    setArtefact(player, formattedArtefact);
    if (artefact?.twoHanded) setTwoHandedArtefact(formattedArtefact);
  };

  const deleteArtefact = (place) => {
    const artefact = getArtefact(player, place);
    if (artefact) {
      handleArtefactBuffs(artefact, "delete");
      removeArtefact(player, place);
    }
  };

  const changeArtefact = (place, property) => {
    deletePreviosArtefactBuffs(place);
    replaceArtefactValue(player, place, property);
    handleArtefactBuffs(getArtefact(player, place), "add");
  };

  const deleteAllArtefacts = (specificPlayer) => {
    const artefacts = getAllArtefacts(specificPlayer ?? player);
    for (const key in artefacts) {
      if (artefacts[key]) handleArtefactBuffs(artefacts[key], "delete");
    }
    removeAllArtefacts(specificPlayer ?? player);
  };

  //-- helpers
  function handleArtefactBuffs(artefact, key) {
    buffsProvider(getArtefactBuffs(artefact), key);
    const { runes, sharpening, runesWords } = artefact;
    if (runes.length) buffsProvider(runes, key);
    if (sharpening.length) buffsProvider(sharpening, key);
    if (runesWords?.length) buffsProvider(runesWords, key);
  }

  function deletePreviosArtefactBuffs(place) {
    const currentArtefact = getArtefact(player, place);
    if (currentArtefact) handleArtefactBuffs(currentArtefact, "delete");
  }

  function setTwoHandedArtefact(artefact) {
    if (!artefact) return;
    const { place, twoHanded } = artefact;
    if (place === "rightHand" && twoHanded) {
      const leftHandArtefact = {
        ...artefact,
        place: "leftHand",
        buffs: { common: [], perfect: [] },
      };
      const currentLefttHandArtefact = getArtefact(player, "leftHand");
      if (currentLefttHandArtefact)
        handleArtefactBuffs(currentLefttHandArtefact, "delete");
      setArtefact(player, leftHandArtefact);
    }
  }

  return {
    asignArtefact,
    deleteArtefact,
    changeArtefact,
    deleteAllArtefacts,
  };
};

export default useArtefact;
