import { useArtefactsStore } from "modules/artefacts";
import { RUNES_LIST } from "modules/runes/utils/rune.constants";
import { getRuneData, getRuneImage } from "modules/runes/utils/rune.helpers";
import { useMemo, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useRunesList = () => {
  const player = usePlayerContext();
  const { replaceSelectedArtefactValue } = useArtefactsStore(
    (state) => state.methods
  );
  const selectedArtefact = useArtefactsStore(
    (state) => state[player].selectedArtefact
  );
  const [isDeleteSelected, setDeleteSelected] = useState(false);

  const runes = useMemo(() => {
    const currentRunes = selectedArtefact?.runes;
    const runes = RUNES_LIST.map((rune) => {
      const currentRune = currentRunes?.find(({ title }) => title === rune);
      return {
        title: rune,
        image: getRuneImage(rune),
        amount: currentRune ? currentRune?.amount : 0,
      };
    });
    return runes;
  }, [selectedArtefact]);

  const handleRuneAmount = (runeName, amount) => {
    if (isNaN(Number(amount)) || !selectedArtefact) return;
    const formattedAmount = Number(amount) > 60 ? 60 : Number(amount);
    const filteredRunes = selectedArtefact.runes.filter(
      ({ title }) => title !== runeName
    );
    if (!formattedAmount) {
      replaceSelectedArtefactValue(player, { runes: filteredRunes });
      return;
    }
    const runeData = getRuneData(runeName);
    const rune = {
      ...runeData,
      owner: selectedArtefact.id,
      ownerDescription: selectedArtefact.title,
      player,
      amount: formattedAmount,
      value: [runeData.singleValue * formattedAmount],
    };
    const value = { runes: [...filteredRunes, rune] };

    replaceSelectedArtefactValue(player, value);
  };

  const handleDeleteAllRunes = () => {
    if (!selectedArtefact) return;
    replaceSelectedArtefactValue(player, { runes: [] });
  };

  const handleHoverDeleteButton = (isHover) => {
    setDeleteSelected(isHover);
  };

  return {
    runes,
    isDeleteSelected,
    handleRuneAmount,
    handleDeleteAllRunes,
    handleHoverDeleteButton,
  };
};

export default useRunesList;
