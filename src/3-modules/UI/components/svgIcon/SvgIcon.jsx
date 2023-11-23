import sprite from "modules/UI/graphics/icons.svg";
import PropTypes from "prop-types";

import { Svg } from "./SvgIcon.styled";

const SvgIcon = ({ svgName, size }) => {
  return (
    <Svg width={size ?? "100%"} height={size ?? "100%"}>
      <use href={sprite + `#${svgName}`} style={{ width: "20px" }} />
    </Svg>
  );
};

export default SvgIcon;

SvgIcon.propTypes = {
  svgName: PropTypes.string.isRequired,
  size: PropTypes.string,
};
