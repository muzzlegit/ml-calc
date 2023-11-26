import { useBattleplace } from "modules/battleplace/hooks";
import { BATTLEPLACES } from "modules/battleplace/utils/battleplace.constants";
import { Selector } from "modules/UI";
import { Container } from "./BattleplaceSelector.styled";

const BattleplaceSelector = () => {
  const { battleplace, isActive, handleBattleplace } = useBattleplace();
  console.log("place");
  return (
    <Container isActive={isActive}>
      <Selector
        title="Место битвы:"
        value={BATTLEPLACES[battleplace]}
        options={BATTLEPLACES}
        handleSelector={handleBattleplace}
        isActive={isActive}
      />
    </Container>
  );
};

export default BattleplaceSelector;
