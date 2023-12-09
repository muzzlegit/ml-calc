import { Selector } from "modules/UI";
import useGarrisonAttackIndexSelector from "./useGarrisonAttackIndexSelector.hook";

const GarrisonAttackIndexSelector = () => {
  const { index, options, handleAttackIndex } =
    useGarrisonAttackIndexSelector();

  return (
    <Selector
      title="Атака гарнизона:"
      value={index}
      options={options}
      handleSelector={handleAttackIndex}
    />
  );
};

export default GarrisonAttackIndexSelector;
