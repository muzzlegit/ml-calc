import { useArtefact } from "modules/artefacts/hooks";
import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import {
  getArtefactDescription,
  getArtefactIcon,
  getArtefactImg,
  getArtefcactBuffs,
} from "modules/artefacts/utils/artefact.helpers";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useArtefactPicture = (place) => {
  const player = usePlayerContext();
  const artefact = useArtefactsStore((state) => state[player].artefacts[place]);
  const { setSelectedArtefact, getArtefact, setSelectedPlace } =
    useArtefactsStore((state) => state.methods);
  const { deleteArtefact, changeArtefact } = useArtefact();
  const { buffsProvider } = useBuffsProvider();

  const isArtefact = artefact;
  const isAncient = artefact?.ancient === "none" ? false : artefact?.ancient;
  const ancientValue =
    artefact?.ancient === "none" ? "none" : !artefact?.ancient;
  const isPerfect = artefact?.perfect;
  const isRunes = artefact?.runes?.length;
  const isSharpening = artefact?.sharpening?.length;
  const isActive = artefact?.battle;
  const isTwoHanded = place === "leftHand" && artefact?.twoHanded;

  const graphics = {
    frame: getArtefactIcon("artCell"),
    runeIcon: getArtefactIcon("runeIcon"),
    sharpeningIcon: getArtefactIcon("sharpeningIcon"),
    ancientIcon: getArtefactIcon("ancientIcon"),
    perfectIcon: getArtefactIcon("perfectIcon"),
    artefact: getArtefactImg(artefact?.title),
  };

  const description = getArtefactDescription(getArtefact(player, place));

  const handleArtefactDelete = (place) => {
    asignArtefactBuffs(place, "delete");
    asignRunesSharpeningsBuffs(place, "delete");
    if (place === "rightHand" && getArtefact(player, place)?.twoHanded) {
      deleteArtefact("leftHand");
    }
    deleteArtefact(place);
  };

  const handleArtefactChange = (place, value) => {
    asignArtefactBuffs(place, "delete");
    changeArtefact(place, value);
    asignArtefactBuffs(place, "add");
  };

  const handleArtefactSelect = (place) => {
    const artefact = getArtefact(player, place);
    if (!canHandleSelect(place)) return;
    setSelectedArtefact(player, artefact);
    setSelectedPlace(player, place);
  };

  function asignArtefactBuffs(place, key) {
    const currentArtefact = getArtefact(player, place);
    if (currentArtefact) buffsProvider(getArtefcactBuffs(currentArtefact), key);
  }

  function asignRunesSharpeningsBuffs(place, key) {
    const currentArtefact = getArtefact(player, place);
    if (currentArtefact?.runes.length) {
      buffsProvider(currentArtefact.runes, key);
    }
    if (currentArtefact?.sharpening.length) {
      buffsProvider(currentArtefact.sharpening, key);
    }
  }

  function canHandleSelect(place) {
    if (place === "leftHand") {
      const rightHandArtefact = getArtefact(player, "rightHand");
      if (rightHandArtefact?.twoHanded) return false;
    }
    return true;
  }

  return {
    description,
    isArtefact,
    isAncient,
    ancientValue,
    isPerfect,
    isRunes,
    isSharpening,
    isActive,
    isTwoHanded,
    graphics,
    handleArtefactDelete,
    handleArtefactChange,
    handleArtefactSelect,
  };
};

export default useArtefactPicture;
