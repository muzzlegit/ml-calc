import useStore from "modules/ratingCalculator/store/store";
import {
  getImageData,
  getRecourceRating,
} from "modules/ratingCalculator/utils/helpers";
import { useState } from "react";
import { ImageBox } from "utils/UI";
import { Flex } from "utils/styles/flexKit.styled";
import { Input } from "./ResourceItem.styled";

const ResourceItem = ({ resource }) => {
  const [quantity, setQuantity] = useState(0);
  const { increaseRating, decreaseRating } = useStore((state) => ({
    increaseRating: state.increaseResourceRating,
    decreaseRating: state.decreaseResourceRating,
  }));

  const handleResourceQuantity = (e) => {
    const currentQuantity = Number(e.currentTarget.value);
    if (isNaN(currentQuantity)) return null;
    const resource = e.currentTarget.id;
    if (quantity) decreaseRating(getRecourceRating(resource, quantity));
    increaseRating(getRecourceRating(resource, currentQuantity));
    setQuantity(currentQuantity);
  };

  return (
    <Flex gap={4}>
      <ImageBox picture={getImageData("icons", resource)} />
      <Input id={resource} value={quantity} onChange={handleResourceQuantity} />
    </Flex>
  );
};

export default ResourceItem;
