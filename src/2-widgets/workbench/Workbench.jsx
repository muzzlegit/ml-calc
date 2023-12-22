import {
  ArtefactsDall,
  ArtefactsList,
  ArtefactsSelector,
  SelectedArtefact,
} from "modules/artefacts";
import { Hero } from "modules/hero";
import { Container, Wrap } from "./Workbench.styled";

const Workbench = () => {
  return (
    <Container>
      <Wrap>
        <SelectedArtefact />
        <ArtefactsSelector />
        <ArtefactsList />
      </Wrap>
      <div>
        <ArtefactsDall />
        <Hero />
      </div>
    </Container>
  );
};

export default Workbench;
