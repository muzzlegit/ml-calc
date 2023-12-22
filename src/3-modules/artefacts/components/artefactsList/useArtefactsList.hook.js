import useArtefactsStore from "modules/artefacts/store/artefactsStore";
import {
  getArtefactImg,
  getArtefactsByPlace,
} from "modules/artefacts/utils/artefact.helpers";
import { useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useArtefactsList = () => {
  const player = usePlayerContext();
  const selectedPlace = useArtefactsStore(
    (state) => state[player].selectedPlace
  );
  const selectedArtefact = useArtefactsStore(
    (state) => state[player].selectedArtefact
  );
  const { setSelectedArtefact } = useArtefactsStore((state) => state.methods);
  const [filterLevel, setFilterLevel] = useState(0);

  const artefactsList = getArtefactsByPlace(selectedPlace)
    .filter(({ id }) => id !== selectedArtefact?.id)
    .filter((artefact) => {
      if (!filterLevel) {
        return artefact;
      } else {
        if (filterLevel === artefact?.level) return artefact;
      }
    })
    .map((artefact) => ({
      ...artefact,
      image: getArtefactImg(artefact.title),
    }));

  const handleArtefactSelect = (artefact) => {
    setSelectedArtefact(player, artefact);
  };

  const handleFilterLevel = (level) => {
    setFilterLevel(level);
  };

  return {
    artefactsList,
    filterLevel,
    handleFilterLevel,
    handleArtefactSelect,
  };
};

export default useArtefactsList;
