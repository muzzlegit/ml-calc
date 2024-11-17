import PropTypes from "prop-types";
import { ImageBox } from "utils/UI";
import { Container, Picture, PictureBox } from "./HeroUnit.styled";
import useHeroUnit from "./useHeroUnit.hook";

const HeroUnit = ({ handleHeroClick }) => {
  const {
    graphics: { frame, hero },
  } = useHeroUnit();
  return (
    <Container>
      <PictureBox
        width={frame.width}
        height={frame.height}
        onClick={handleHeroClick}
      >
        <Picture>
          <ImageBox picture={frame} />
        </Picture>
        <Picture>
          <ImageBox picture={hero} />
        </Picture>
      </PictureBox>
    </Container>
  );
};

export default HeroUnit;

HeroUnit.propTypes = {
  handleHeroClick: PropTypes.func,
};
