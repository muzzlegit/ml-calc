import { Selector } from "utils/UI";
import { Container } from "./BattleplaceSelector.styled";
import useBattleplaceSelector from "./useBattleplaceSelector.hook";

const BattleplaceSelector = () => {
  const { place, options, isActive, handleBattleplace } =
    useBattleplaceSelector();
  console.log("selector");
  return (
    <Container isActive={isActive}>
      <Selector
        title="Место битвы:"
        value={place}
        options={options}
        handleSelector={handleBattleplace}
        width="180px"
        isActive={isActive}
      />
    </Container>
  );
};

export default BattleplaceSelector;
