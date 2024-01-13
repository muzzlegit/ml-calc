import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { ATTACK_INDEX } from "modules/battleplace/utils/battleplace.constants";

const useGarrisonAttackIndexSelector = () => {
  const attackIndex = useBattleplaceStore((state) => state.attackIndex);
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const setAttackIndex = useBattleplaceStore(
    (state) => state.methods.setAttackIndex
  );

  const index = ATTACK_INDEX[attackIndex];
  const options = ATTACK_INDEX;
  const isCastle = battleplace === "castle";

  const handleAttackIndex = (index) => {
    setAttackIndex(index);
  };

  return { index, options, isCastle, handleAttackIndex };
};

export default useGarrisonAttackIndexSelector;
