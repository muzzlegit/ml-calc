import { Selector } from "modules/UI";
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
        isActive={isActive}
      />
    </Container>
  );
};

export default BattleplaceSelector;
