import useStore from "modules/ratingCalculator/store/store";
import { useState } from "react";
import { Input, Wrap } from "./BuildingsLevelInput.styled";

const BuildingsLevelInput = ({ id, level, quantity, setActive }) => {
  const [buildingQuantity, setBuildingQuantity] = useState(quantity);

  const changeBuildingQuantity = useStore(
    (state) => state.changeBuildingQuantity
  );

  const handleBuildingQuantity = (value) => {
    if (isNaN(Number(value))) return;
    setBuildingQuantity(Number(value));
    changeBuildingQuantity(id, level, Number(value), buildingQuantity);
    setActive(Number(value) > 0 ? true : false);
  };

  return (
    <Wrap isActive={buildingQuantity}>
      <span>{level}</span>
      <Input
        value={buildingQuantity}
        onChange={(e) => {
          handleBuildingQuantity(e.currentTarget.value);
        }}
      />
    </Wrap>
  );
};

export default BuildingsLevelInput;
