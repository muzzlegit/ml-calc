import { Selector } from "utils/UI";
import { Container } from "./GarrisonAttackIndexSelector.styled";
import useGarrisonAttackIndexSelector from "./useGarrisonAttackIndexSelector.hook";

const GarrisonAttackIndexSelector = () => {
  const { index, options, isCastle, handleAttackIndex } =
    useGarrisonAttackIndexSelector();

  return (
    <Container isActive={isCastle}>
      <Selector
        title="Атака гарнизона:"
        value={index}
        options={options}
        handleSelector={handleAttackIndex}
        width="80px"
        isActive={isCastle}
      />
    </Container>
  );
};

export default GarrisonAttackIndexSelector;
