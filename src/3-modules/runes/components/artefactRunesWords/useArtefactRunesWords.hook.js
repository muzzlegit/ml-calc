import { useArtefactsStore } from "modules/artefacts";
import { getArtefactsRunesWords } from "modules/runes/utils/rune.helpers";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useArtefactRunesWords = () => {
  const player = usePlayerContext();
  const selectedArtefact = useArtefactsStore(
    (state) => state[player].selectedArtefact
  );
  const { replaceSelectedArtefactValue } = useArtefactsStore(
    (state) => state.methods
  );
  const [runesWords, setRunesWords] = useState(
    selectedArtefact?.runesWords ??
      getArtefactsRunesWords(selectedArtefact, player)
  );

  const handleWordValue = (word, value) => {
    if (!word) return;
    const [currentWord] = runesWords.filter(({ id }) => word.id === id);
    console.log("index", runesWords.indexOf(currentWord));
    const newValue = (value) => {
      if (value === " " || isNaN(Number(value))) return [0];
      let formattedValue = currentWord.measure
        ? Number((Number(value) / 100).toFixed(2))
        : Number(value);
      if (currentWord.target === "enemy")
        formattedValue = -Math.abs(formattedValue);
      return [formattedValue];
    };
    console.log("value", newValue(value));
    const formattedWord = {
      ...word,
      value: newValue(value),
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
      prev.map((word) => (word.id === formattedWord.id ? formattedWord : word))
    );
  };

  useEffect(() => {
    setRunesWords(
      selectedArtefact?.runesWords ??
        getArtefactsRunesWords(selectedArtefact, player)
    );
  }, [player, selectedArtefact]);

  return { runesWords, handleWordValue };
};

export default useArtefactRunesWords;
