import { useArtefact } from "modules/artefacts/hooks";
import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import {
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

  const graphics = {
    frame: getArtefactIcon("artCell"),
    runeIcon: getArtefactIcon("runeIcon"),
    sharpeningIcon: getArtefactIcon("sharpeningIcon"),
    ancientIcon: getArtefactIcon("ancientIcon"),
    perfectIcon: getArtefactIcon("perfectIcon"),
    artefact: getArtefactImg(artefact?.title),
  };

  const handleArtefactDelete = (place) => {
    asignArtefactBuffs(place, "delete");
    deleteArtefact(place);
  };

  const handleArtefactChange = (place, value) => {
    asignArtefactBuffs(place, "delete");
    changeArtefact(place, value);
    asignArtefactBuffs(place, "add");
  };

  const handleArtefactSelect = (place) => {
    const artefact = getArtefact(player, place);
    setSelectedArtefact(player, artefact);
    setSelectedPlace(player, place);
  };

  function asignArtefactBuffs(place, key) {
    const currentArtefact = getArtefact(player, place);
    if (currentArtefact) buffsProvider(getArtefcactBuffs(currentArtefact), key);
  }
  return {
    isArtefact,
    isAncient,
    ancientValue,
    isPerfect,
    isRunes,
    isSharpening,
    isActive,
    graphics,
    handleArtefactDelete,
    handleArtefactChange,
    handleArtefactSelect,
  };
};

export default useArtefactPicture;
