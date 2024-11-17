import { getImageData } from "modules/ratingCalculator/utils/helpers";
import PropTypes from "prop-types";
import { ImageBox } from "utils/UI";
import { Container } from "./Stars.styled";

const Stars = ({ quantity }) => {
  const stars = Array.from({ length: quantity }, (_, index) => (
    <li key={index}>
      <ImageBox picture={getImageData("icons", "star")} />
    </li>
  ));
  return <Container>{stars}</Container>;
};

export default Stars;

Stars.propTypes = {
  quantity: PropTypes.number.isRequired,
};
