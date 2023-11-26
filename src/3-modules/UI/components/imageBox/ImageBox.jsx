import PropTypes from "prop-types";
import { Container } from "./ImageBox.styled";

const ImageBox = ({ width, height, image, addStyles }) => {
  return (
    <Container
      width={width}
      height={height}
      background={image}
      addStyles={addStyles}
    />
  );
};

export default ImageBox;

ImageBox.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
