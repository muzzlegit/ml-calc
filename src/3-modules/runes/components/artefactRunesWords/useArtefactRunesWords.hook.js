import { useArtefactsStore } from "modules/artefacts";
import { getArtefactsRunesWords } from "modules/runes/utils/rune.helpers";
import { useCallback, useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useArtefactRunesWords = () => {
  const player = usePlayerContext();
  const { selectedArtefact, replaceSelectedArtefactValue } = useArtefactsStore(
    (state) => ({
      selectedArtefact: state[player].selectedArtefact,
      replaceSelectedArtefactValue: state.methods.replaceSelectedArtefactValue,
    })
  );
  const [runesWords, setRunesWords] = useState(
    () =>
      selectedArtefact?.runesWords ??
      getArtefactsRunesWords(selectedArtefact, player)
  );

  const handleWordValue = useCallback(
    (word, value) => {
      if (!word) return;
      const [currentWord] = runesWords.filter(({ id }) => word.id === id);

      const formattedValue = (value) => {
        const numValue = Number(value);
        if (value.trim() === "" || isNaN(numValue)) return [0];
        let formattedValue = currentWord.measure
          ? Number(value) / 100
          : Number(value);
        if (currentWord.target === "enemy")
          formattedValue = -Math.abs(formattedValue);
        return [formattedValue];
      };
      const formattedWord = {
        ...word,
        value: formattedValue(value),
        description:
          currentWord.target === "player"
            ? [
                currentWord.shortDescription[0] +
                  " " +
                  value +
                  currentWord.measure,
              ]
            : [
                currentWord.shortDescription[0].replaceAll(
                  "&",
                  `${toString(currentWord.value[0]) + currentWord.measure}\n`
                ),
              ],
      };
      replaceSelectedArtefactValue(player, {
        runesWords: [
          ...runesWords.map((word) =>
            word.id === currentWord.id ? formattedWord : word
          ),
        ],
      });
      setRunesWords((prev) =>
        prev.map((word) =>
          word.id === formattedWord.id ? formattedWord : word
        )
      );
    },
    [player, replaceSelectedArtefactValue, runesWords]
  );

  useEffect(() => {
    setRunesWords(
      selectedArtefact?.runesWords ??
        getArtefactsRunesWords(selectedArtefact, player)
    );
  }, [player, selectedArtefact]);

  return { runesWords, handleWordValue };
};

export default useArtefactRunesWords;
