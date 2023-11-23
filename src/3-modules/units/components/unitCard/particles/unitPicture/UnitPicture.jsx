import {
  getUnitFrame,
  getUnitPicture,
} from "modules/units/utils/units.helpers";
import { Container, Image } from "./UnitPicture.styled";

const UnitPicture = ({ unit, name, level, race, isActive }) => {
  const {
    image: frame,
    imageHeight: frameHeight,
    imageWidth: frameWidth,
  } = getUnitFrame(level, race);
  const {
    image: unitPicture,
    imageHeight: unitHeight,
    imageWidth: unitWidth,
  } = getUnitPicture(unit, level, race);

  return (
    <Container
      isActive={isActive}
      title={name}
      height={frameHeight}
      width={frameWidth}
    >
      <Image height={frameHeight} width={frameWidth} background={frame} />
      <Image height={unitHeight} width={unitWidth} background={unitPicture} />
    </Container>
  );
};

export default UnitPicture;
