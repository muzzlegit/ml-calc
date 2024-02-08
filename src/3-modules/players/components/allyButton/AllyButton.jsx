import { FlexColCenter } from "utils/styles/flexKit.styled";
import { Container } from "./AllyButton.styled";
import useAllyButton from "./useAllyButton.hook";

const AllyButton = () => {
  const { sign, buffsButtonSign, handlePlayerBuffsOff, handleButtonClick } =
    useAllyButton();
  return (
    <FlexColCenter gap="4px">
      <Container onClick={handleButtonClick}>{sign}</Container>
      <Container onClick={handlePlayerBuffsOff}>{buffsButtonSign}</Container>
    </FlexColCenter>
  );
};

export default AllyButton;
