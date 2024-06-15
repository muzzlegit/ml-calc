import { useArtefact } from "modules/artefacts/hooks";
import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import {
  getArtefactDescription,
  getArtefactIcon,
  getArtefactImg,
} from "modules/artefacts/utils/artefact.helpers";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useArtefactPicture = (place) => {
  const player = usePlayerContext();
  const artefact = useArtefactsStore((state) => state[player].artefacts[place]);
  const { setSelectedArtefact, getArtefact, setSelectedPlace } =
    useArtefactsStore((state) => state.methods);
  const { deleteArtefact, changeArtefact } = useArtefact();

  const isArtefact = artefact;
  const isAncient = artefact?.ancient === "none" ? false : artefact?.ancient;
  const ancientValue =
    artefact?.ancient === "none" ? "none" : !artefact?.ancient;
  const isPerfect = artefact?.perfect;
  const isRunes = artefact?.runes?.length || artefact?.runesWords?.length;
  const isSharpening = artefact?.sharpening?.length;
  const isActive = artefact?.battle;
  const isInWork = artefact?.inWork;
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
    if (place === "rightHand" && getArtefact(player, place)?.twoHanded) {
      deleteArtefact("leftHand");
    }
    deleteArtefact(place);
  };

  const handleArtefactChange = (place, value) => {
    changeArtefact(place, value);
  };

  const handleArtefactSelect = (place) => {
    const artefact = getArtefact(player, place);
    if (!canHandleSelect(place)) return;
    setSelectedArtefact(player, artefact);
    setSelectedPlace(player, place);
  };

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
    isInWork,
    isTwoHanded,
    graphics,
    handleArtefactDelete,
    handleArtefactChange,
    handleArtefactSelect,
  };
};

export default useArtefactPicture;
