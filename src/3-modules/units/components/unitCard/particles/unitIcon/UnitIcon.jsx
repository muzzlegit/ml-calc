import PropTypes from "prop-types";
//
import { getUnitIcon } from "modules/units/utils/units.helpers";
import { Container } from "./UnitIcon.styled";

const UnitIcon = ({ iconName }) => {
  const { image, imageWidth, imageHeight } = getUnitIcon(iconName);

  return (
    <Container background={image} width={imageWidth} height={imageHeight} />
  );
};

export default UnitIcon;

UnitIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
};
