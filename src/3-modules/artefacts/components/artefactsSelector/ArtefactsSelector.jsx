import { Selector } from "modules/UI";
import ArtefactButton from "../artefactButton/ArtefactButton";
import { Container } from "./ArtefactsSelector.styled";
import useArtefactsSelector from "./useArtefactsSelector";

const ArtefactsSelector = () => {
  const {
    kit,
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
        value={kit}
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
