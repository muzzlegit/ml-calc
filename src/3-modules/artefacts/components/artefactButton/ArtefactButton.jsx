import { ImageBox } from "modules/UI";
import { Container } from "./ArtefactButton.styled";

const ArtefactButton = ({ value, image, handleClick, ...rest }) => {
  return (
    <Container isActive={value} onClick={handleClick} {...rest}>
      <ImageBox picture={image} />
    </Container>
  );
};

export default ArtefactButton;
