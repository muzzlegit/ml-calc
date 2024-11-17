import useStore from "modules/ratingCalculator/store/store";
import {
  getElementRating,
  getImageData,
} from "modules/ratingCalculator/utils/helpers";
import { useEffect, useState } from "react";
import { ImageBox } from "utils/UI";
import { Input, Level } from "./ElementInputs.styled";

const ElementInputs = ({ level, element, setActive }) => {
  const { increaseRating, decreaseRating } = useStore((state) => ({
    increaseRating: state.increaseRating,
    decreaseRating: state.decreaseRating,
  }));
  const [quantity, setQuantity] = useState(0);
  const { building, data } = element;

  const handleQuantity = (value) => {
    if (isNaN(Number(value)) || value === "") {
      setQuantity(0);
      decreaseRating(getElementRating(data[level], quantity));
      return;
    }
    setQuantity(Number(value));
    decreaseRating(getElementRating(data[level], quantity));
    increaseRating(getElementRating(data[level], value));
  };

  useEffect(() => {
    setActive(quantity > 0 ? true : false);
  }, [quantity, setActive]);

  return (
    <Level>
      {level !== "8" ? (
        <span> {level}</span>
      ) : (
        <ImageBox picture={getImageData("icons", "perfect")} />
      )}
      <Input
        id={building + "_" + level}
        value={quantity}
        onChange={(e) => {
          handleQuantity(e.currentTarget.value);
        }}
      />
    </Level>
  );
};

export default ElementInputs;
