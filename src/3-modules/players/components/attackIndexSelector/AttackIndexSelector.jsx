import { ATTACK_INDEX } from "modules/players/utils/player.constants";
import { Selector } from "utils/UI";
import useAttackIndex from "./useAttackIndex.hook";

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
