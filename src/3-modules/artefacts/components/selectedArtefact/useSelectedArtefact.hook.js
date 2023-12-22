import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import {
  getArtefactIcon,
  getArtefactImg,
  getArtefcactBuffs,
} from "modules/artefacts/utils/artefact.helpers";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useSelectedArtefact = () => {
  const player = usePlayerContext();
  const selectedArtefact = useArtefactsStore(
    (state) => state[player].selectedArtefact
  );
  const { replaceSelectedArtefactValue, setArtefact, getArtefact } =
    useArtefactsStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();

  const [isBtnActive, setIsBtnActive] = useState(false);

  const isArtefact = selectedArtefact;
  const isAncient =
    selectedArtefact?.ancient === "none" ? false : selectedArtefact?.ancient;
  const ancientValue =
    selectedArtefact?.ancient === "none" ? "none" : !selectedArtefact?.ancient;
  const isPerfect = selectedArtefact?.perfect;
  const isRunes = selectedArtefact?.runes?.length;
  const isSharpening = selectedArtefact?.sharpening?.length;

  const graphics = {
    runeIcon: getArtefactIcon("runeIcon"),
    sharpeningIcon: getArtefactIcon("sharpeningIcon"),
    ancientIcon: getArtefactIcon("ancientIcon"),
    perfectIcon: getArtefactIcon("perfectIcon"),
    artefact: getArtefactImg(selectedArtefact?.title),
  };

  const handleSelectedArtefactProperty = (value) => {
    replaceSelectedArtefactValue(player, value);
    setIsBtnActive(false);
  };

  const handleAssignSelectedArtefact = () => {
    applyArtefactBuffs();
    setArtefact(player, selectedArtefact);
    setIsBtnActive(true);
  };

  useEffect(() => {
    setIsBtnActive(false);
  }, [selectedArtefact]);

  function applyArtefactBuffs() {
    const currentArtefact = getArtefact(player, selectedArtefact?.place);
    if (currentArtefact)
      buffsProvider(getArtefcactBuffs(currentArtefact), "delete");
    buffsProvider(getArtefcactBuffs(selectedArtefact), "add");
  }

  return {
    isArtefact,
    isAncient,
    ancientValue,
    isPerfect,
    isRunes,
    isSharpening,
    isBtnActive,
    graphics,
    handleSelectedArtefactProperty,
    handleAssignSelectedArtefact,
  };
};

export default useSelectedArtefact;
