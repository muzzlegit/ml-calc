import { useArtefactsStore } from "modules/artefacts";
import {
  getSharpening,
  getSharpeningImage,
  getSharpeningList,
} from "modules/sharpenings/utils/sharpening.helpers";
import { nanoid } from "nanoid";
import { useMemo, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useSharpeningsSelector = () => {
  const player = usePlayerContext();
  const selectorList = getSharpeningList();
  const [selectorValue, setSelectorValue] = useState("Выбирите заточку");
  const selectedArtefact = useArtefactsStore(
    (state) => state[player].selectedArtefact
  );
  const [sharpening, setSharpening] = useState(null);
  const [value, setValue] = useState(0);
  const { replaceSelectedArtefactValue } = useArtefactsStore(
    (state) => state.methods
  );

  const sharpeningsList = useMemo(() => {
    setSelectorValue("Выбирите заточку");
    setValue(0);
    setSharpening(null);
    return (
      selectedArtefact?.sharpening.map((sharpening) => ({
        ...sharpening,
        picture: getSharpeningImage(sharpening.title),
      })) ?? []
    );
  }, [selectedArtefact?.sharpening]);

  const index = sharpening?.measure;

  const handleSelectorValue = (value) => {
    setSelectorValue(selectorList[value]);
    setSharpening(getSharpening(selectorList[value]));
  };

  const handleSharpeningValue = (value) => {
    if (isNaN(Number(value)) || !sharpening) return;
    const { maxValue } = sharpening;
    setValue(
      Number(value) > Math.abs(maxValue) ? Math.abs(maxValue) : Number(value)
    );
  };

  const handleSharpeningAdd = () => {
    if (!selectedArtefact || !sharpening || !value) return;
    const { measure, maxValue } = sharpening;
    const filteredList = sharpeningsList.filter(
      ({ id }) => id !== sharpening?.id
    );
    const newValue = measure ? value / 100 : value;
    const newSharpening = {
      ...sharpening,
      id: nanoid(),
      player,
      owner: selectedArtefact.id,
      ownerDescription: selectedArtefact.title,
      value: [maxValue > 0 ? newValue : -newValue],
    };
    replaceSelectedArtefactValue(player, {
      sharpening: [...filteredList, newSharpening],
    });
  };

  const handleDeleteSharpening = (id, isAll) => {
    const sharpenings = isAll
      ? []
      : selectedArtefact?.sharpening.filter(
          (sharpening) => sharpening.id !== id
        );
    replaceSelectedArtefactValue(player, { sharpening: sharpenings });
  };

  return {
    selectorValue,
    value,
    index,
    selectorList,
    sharpeningsList,
    handleSelectorValue,
    handleSharpeningValue,
    handleSharpeningAdd,
    handleDeleteSharpening,
  };
};

export default useSharpeningsSelector;
