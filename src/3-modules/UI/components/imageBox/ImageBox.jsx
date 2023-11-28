import PropTypes from "prop-types";
import { Container } from "./ImageBox.styled";

const ImageBox = ({ picture, addStyles }) => {
  const { image, width, height } = picture;
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
  picture: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
