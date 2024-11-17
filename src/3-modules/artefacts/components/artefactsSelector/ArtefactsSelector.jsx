import { Selector } from "utils/UI";
import ArtefactButton from "../artefactButton/ArtefactButton";
import { Container } from "./ArtefactsSelector.styled";
import useArtefactsSelector from "./useArtefactsSelector";

const ArtefactsSelector = () => {
  const {
    kitTitle,
    kitAncient,
    kitPerfect,
    handleKits,
    handleAncient,
    handlePerfect,
    kitsList,
    graphics: { ancientIcon, perfectIcon },
  } = useArtefactsSelector();

  return (
    <Container>
      <Selector
        value={kitTitle}
        options={kitsList}
        handleSelector={handleKits}
        width="180px"
      />
      <ArtefactButton
        value={kitAncient}
        image={ancientIcon}
        handleClick={() => {
          handleAncient(!kitAncient);
        }}
      />
      <ArtefactButton
        value={kitPerfect}
        image={perfectIcon}
        handleClick={() => {
          handlePerfect(!kitPerfect);
        }}
      />
    </Container>
  );
};

export default ArtefactsSelector;
