import { DALL_CELLS } from "modules/artefacts/utils/artefact.constants";
import { ImageBox } from "utils/UI";
import { Cell, Container, Frame } from "./ArtefactsDall.styled";
import ArtefactPicture from "./particles/artefactPicture/ArtefactPicture";
import useArtefactsDall from "./useArtefactsDall";

const ArtefactsDall = () => {
  const {
    isKit,
    kitDescription,
    graphics: { frame, kitIcon },
  } = useArtefactsDall();

  return (
    <Container>
      {DALL_CELLS.map(({ place, top, left }) => {
        return (
          <Cell key={place} top={top} left={left}>
            <Frame
              width={frame.width}
              height={frame.height}
              background={frame.image}
              isActive={isKit}
            >
              <ArtefactPicture place={place} />
            </Frame>
          </Cell>
        );
      })}
      {isKit ? (
        <Cell top={40} left={226}>
          <ImageBox title={kitDescription} picture={kitIcon} />
        </Cell>
      ) : null}
    </Container>
  );
};

export default ArtefactsDall;
