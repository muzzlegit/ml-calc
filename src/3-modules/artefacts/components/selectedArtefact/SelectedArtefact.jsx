import { Button, ImageBox } from "modules/UI";
import ArtefactButton from "../artefactButton/ArtefactButton";
import {
  ArtefactBg,
  ArtefactWrap,
  Container,
  Picture,
} from "./SelectedArtefact.styled";
import useSelectedArtefact from "./useSelectedArtefact.hook";

const SelectedArtefact = () => {
  const {
    isArtefact,
    isAncient,
    ancientValue,
    isPerfect,
    isRunes,
    isSharpening,
    graphics: { ancientIcon, perfectIcon, artefact, runeIcon, sharpeningIcon },
    handleSelectedArtefactProperty,
    handleAssignSelectedArtefact,
  } = useSelectedArtefact();
  return (
    <Container>
      <ArtefactWrap isActive={isArtefact}>
        {isArtefact ? (
          <ArtefactBg isAncient={isAncient}>
            <Picture background={artefact} />
          </ArtefactBg>
        ) : null}
        <ArtefactButton
          absolute={true}
          top={0}
          left={0}
          value={isAncient}
          image={ancientIcon}
          onClick={() => {
            if (!isArtefact) return;
            handleSelectedArtefactProperty({
              ancient: ancientValue,
            });
          }}
        />
        <ArtefactButton
          absolute={true}
          top={0}
          right="-18%"
          value={isPerfect}
          image={perfectIcon}
          onClick={() => {
            if (!isArtefact) return;
            handleSelectedArtefactProperty({ perfect: !isPerfect });
          }}
        />
        {isRunes ? (
          <ImageBox
            picture={runeIcon}
            addStyles={{
              position: "absolute",
              bottom: "-6px",
              right: "3px",
              zIndex: 3,
            }}
          />
        ) : null}
        {isSharpening ? (
          <ImageBox
            picture={sharpeningIcon}
            addStyles={{
              position: "absolute",
              bottom: "-8px",
              right: "-12px",
              zIndex: 2,
            }}
          />
        ) : null}
      </ArtefactWrap>
      <Button
        handleClick={() => {
          handleAssignSelectedArtefact();
        }}
      >
        Применить
      </Button>
    </Container>
  );
};

export default SelectedArtefact;
