import { Container } from "./Hero.styled";
import HeroBranches from "./particles/heroBranches/HeroBranches";
import HeroPicture from "./particles/heroPicture/HeroPicture";
import HeroSelector from "./particles/heroSelector/HeroSelector";

const Hero = () => {
  return (
    <Container>
      <HeroPicture />
      <HeroSelector />
      <HeroBranches />
    </Container>
  );
};

export default Hero;
