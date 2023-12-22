import usePlayerContext from "utils/context/usePlayerContext.hook";
import useArtefactsStore from "../store/artefactsStore";

const useArtefact = () => {
  const player = usePlayerContext();
  const {
    setArtefact,
    removeAllArtefacts,
    removeArtefact,
    replaceArtefactValue,
  } = useArtefactsStore((state) => state.methods);

  const asignArtefact = (artefact) => {
    setArtefact(player, artefact);
  };

  const removeArtefacts = () => {
    removeAllArtefacts(player);
  };

  const deleteArtefact = (place) => {
    removeArtefact(player, place);
  };

  const changeArtefact = (place, property) => {
    replaceArtefactValue(player, place, property);
  };

  return { asignArtefact, removeArtefacts, deleteArtefact, changeArtefact };
};

export default useArtefact;
