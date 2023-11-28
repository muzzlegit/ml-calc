import { useAttackIndex } from "modules/battleplace/hooks";
import { ATTACK_INDEX } from "modules/battleplace/utils/battleplace.constants";
import { Selector } from "modules/UI";

const GarrisonAttackIndexSelector = () => {
  const { attackIndex, handleAttackIndex } = useAttackIndex();

  return (
    <Selector
      title="Атака гарнизона:"
      value={ATTACK_INDEX[attackIndex]}
      options={ATTACK_INDEX}
      handleSelector={handleAttackIndex}
    />
  );
};

export default GarrisonAttackIndexSelector;
