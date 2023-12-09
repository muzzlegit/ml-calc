import { FlexCenter } from "utils/styles/flexKit.styled";
import {
  BattlefieldsSelector,
  BattleplaceSelector,
  GarrisonAttackIndexSelector,
} from "../Molecules";

const BattleplaceSelectors = () => {
  return (
    <FlexCenter gap="8px">
      <BattlefieldsSelector />
      <BattleplaceSelector />
      <GarrisonAttackIndexSelector />
    </FlexCenter>
  );
};

export default BattleplaceSelectors;
