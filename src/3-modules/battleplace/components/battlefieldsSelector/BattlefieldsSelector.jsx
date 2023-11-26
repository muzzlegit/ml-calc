import { useBattlefield } from "modules/battleplace/hooks";
import { BATTLEFIELDS } from "modules/battleplace/utils/battleplace.constants";
import { Selector } from "modules/UI";

const BattlefieldsSelector = () => {
  const { battlefield, handleBattlefield } = useBattlefield();
  console.log("field");
  return (
    <Selector
      title="Поле битвы:"
      value={BATTLEFIELDS[battlefield]}
      options={BATTLEFIELDS}
      handleSelector={handleBattlefield}
    />
  );
};

export default BattlefieldsSelector;
