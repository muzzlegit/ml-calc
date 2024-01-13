import {
  ArtefactsDall,
  ArtefactsList,
  ArtefactsSelector,
  SelectedArtefact,
} from "modules/artefacts";
import { Hero } from "modules/hero";
import { RunesList } from "modules/runes";
import { SharpeningsSelector } from "modules/sharpenings";
import { SpellsList } from "modules/spells";
import { Container, Wrap } from "./Workbench.styled";

const Workbench = () => {
  return (
    <Container>
      <Wrap>
        <RunesList />
        <SharpeningsSelector />
      </Wrap>
      <Wrap>
        <SelectedArtefact />
        <ArtefactsSelector />
        <ArtefactsList />
      </Wrap>
      <div>
        <ArtefactsDall />
        <Hero />
      </div>
      <div>
        <SpellsList />
      </div>
    </Container>
  );
};

export default Workbench;
