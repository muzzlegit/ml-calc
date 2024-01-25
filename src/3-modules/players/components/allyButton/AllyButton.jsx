import { Container } from "./AllyButton.styled";
import useAllyButton from "./useAllyButton.hook";

const AllyButton = () => {
  const { sign, handleButtonClick } = useAllyButton();
  return <Container onClick={handleButtonClick}>{sign}</Container>;
};

export default AllyButton;
