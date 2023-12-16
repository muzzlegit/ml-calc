import { FlexBetween } from "utils/styles/flexKit.styled";
import { Container } from "./Hero.styled";
import HeroBranches from "./particles/heroBranches/HeroBranches";
import HeroPicture from "./particles/heroPicture/HeroPicture";
import HeroSelector from "./particles/heroSelector/HeroSelector";

const Hero = () => {
  return (
    <Container>
      <FlexBetween additionStyles={{ alignItems: "start" }}>
        <HeroPicture />
        <HeroSelector />
      </FlexBetween>
      <HeroBranches />
    </Container>
  );
};

export default Hero;
