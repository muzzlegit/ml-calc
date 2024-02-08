import { useArtefact } from "modules/artefacts/hooks";
import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import {
  getArtefactDescription,
  getArtefactIcon,
  getArtefactImg,
} from "modules/artefacts/utils/artefact.helpers";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useSelectedArtefact = () => {
  const player = usePlayerContext();
  const selectedArtefact = useArtefactsStore(
    (state) => state[player].selectedArtefact
  );
  const { replaceSelectedArtefactValue } = useArtefactsStore(
    (state) => state.methods
  );
  const { asignArtefact } = useArtefact();
  const [isBtnActive, setIsBtnActive] = useState(false);

  const isArtefact = selectedArtefact;
  const isAncient =
    selectedArtefact?.ancient === "none" ? false : selectedArtefact?.ancient;
  const ancientValue =
    selectedArtefact?.ancient === "none" ? "none" : !selectedArtefact?.ancient;
  const isPerfect = selectedArtefact?.perfect;
  const isRunes = selectedArtefact?.runes?.length;
  const isSharpening = selectedArtefact?.sharpening?.length;
  const description = getArtefactDescription(selectedArtefact);

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
    if (!selectedArtefact) return;
    asignArtefact(selectedArtefact);
    setIsBtnActive(true);
  };

  useEffect(() => {
    setIsBtnActive(selectedArtefact ? false : true);
  }, [selectedArtefact]);

  return {
    isArtefact,
    isAncient,
    ancientValue,
    isPerfect,
    isRunes,
    isSharpening,
    isBtnActive,
    description,
    graphics,
    handleSelectedArtefactProperty,
    handleAssignSelectedArtefact,
  };
};

export default useSelectedArtefact;
