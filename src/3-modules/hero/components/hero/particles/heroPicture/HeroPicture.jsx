import { ImageBox } from "modules/UI";
import { Container } from "./HeroPicture.styled";
import useHeroPicture from "./useHeroPicture.hook";

const HeroPicture = () => {
  const {
    isHero,
    graphics: { hero },
  } = useHeroPicture();

  return (
    <Container isHero={isHero}>
      <ImageBox picture={hero} />
    </Container>
  );
};

export default HeroPicture;
