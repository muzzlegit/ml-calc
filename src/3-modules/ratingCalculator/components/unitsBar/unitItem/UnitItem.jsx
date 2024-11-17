import useStore from "modules/ratingCalculator/store/store";
import {
  getImageData,
  getUnitRating,
} from "modules/ratingCalculator/utils/helpers";
import { useState } from "react";
import { ImageBox, Selector } from "utils/UI";
import { Flex } from "utils/styles/flexKit.styled";
import { Input } from "./UnitItem.styled";

const UnitItem = ({ unit }) => {
  const [quantity, setQuantity] = useState(0);
  const [unitLevel, setUnitLevel] = useState("3");
  const { increaseRating, decreaseRating } = useStore((state) => ({
    increaseRating: state.increaseArmyRating,
    decreaseRating: state.decreaseArmyRating,
  }));

  const handleUnitQuantity = (e) => {
    const currentQuantity = Number(e.currentTarget.value);
    if (isNaN(currentQuantity)) return null;
    const unit = e.currentTarget.id;
    if (quantity) decreaseRating(getUnitRating(unit, unitLevel, quantity));
    increaseRating(getUnitRating(unit, unitLevel, currentQuantity));
    setQuantity(currentQuantity);
  };

  const handleUnitLevel = (level, id) => {
    setUnitLevel(level);
    decreaseRating(getUnitRating(id, unitLevel, quantity));
    increaseRating(getUnitRating(id, level, quantity));
  };

  return (
    <Flex gap={4}>
      <ImageBox picture={getImageData("units", unit)} />
      <Input id={unit} value={quantity} onChange={handleUnitQuantity} />
      <Selector
        id={unit}
        value={unitLevel}
        options={{ 1: "1", 2: "2", 3: "3", 4: "4" }}
        handleSelector={handleUnitLevel}
        width="20px"
      />
    </Flex>
  );
};

export default UnitItem;
