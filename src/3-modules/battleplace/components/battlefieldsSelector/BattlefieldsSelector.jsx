import { Selector } from "modules/UI";
import useBattlefieldsSelector from "./useBattlefieldsSelector.hook";

const BattlefieldsSelector = () => {
  const { field, options, handleBattlefield } = useBattlefieldsSelector();

  return (
    <Selector
      title="Поле битвы:"
      value={field}
      options={options}
      handleSelector={handleBattlefield}
      width="180px"
    />
  );
};

export default BattlefieldsSelector;
