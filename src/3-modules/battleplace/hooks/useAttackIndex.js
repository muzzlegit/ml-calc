import useBattleplaceStore from "../store/battleplaceStore";

const useAttackIndex = () => {
  const attackIndex = useBattleplaceStore((state) => state.attackIndex);
  const setAttackIndex = useBattleplaceStore(
    (state) => state.methods.setAttackIndex
  );

  const handleAttackIndex = (index) => {
    setAttackIndex(index);
  };

  return { attackIndex, handleAttackIndex };
};

export default useAttackIndex;
