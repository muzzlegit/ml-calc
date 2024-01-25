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
import { Button } from "modules/UI";
import { Flex } from "utils/styles/flexKit.styled";
import { Container, Wrap } from "./Workbench.styled";

const Workbench = ({ toggleModal }) => {
  return (
    <Container>
      <Wrap>
        <RunesList />
        <SharpeningsSelector />
      </Wrap>
      <div>
        <Flex gap="16px" additionStyles={{ alignItems: "start" }}>
          <Wrap>
            <SelectedArtefact />
            <ArtefactsSelector />
            <ArtefactsList />
          </Wrap>
          <ArtefactsDall />
          <Hero />
        </Flex>
        <div>
          <SpellsList />
        </div>
      </div>
      <Button
        addStyles={{ color: "red", borderColor: "red" }}
        handleClick={toggleModal}
      >
        Закрыть
      </Button>
    </Container>
  );
};

export default Workbench;
