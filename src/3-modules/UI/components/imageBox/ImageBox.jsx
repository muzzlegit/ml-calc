import PropTypes from "prop-types";
import { Container } from "./ImageBox.styled";

const ImageBox = ({ picture, addStyles, ...rest }) => {
  if (!picture) return;
  const { image, width, height } = picture;
  return (
    <Container
      width={width}
      height={height}
      background={image}
      addStyles={addStyles}
      {...rest}
    ></Container>
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
