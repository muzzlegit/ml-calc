import { Selector } from "modules/UI";
import { useAttackIndex } from "modules/units/hooks";
import { ATTACK_INDEX } from "modules/units/utils/units.constants";

const AttackIndexSelector = () => {
  const { attackIndex, handleAttackIndex } = useAttackIndex();

  return (
    <Selector
      title="Атака:"
      value={attackIndex}
      options={ATTACK_INDEX}
      handleSelector={handleAttackIndex}
    />
  );
};

export default AttackIndexSelector;
