import { getImageData } from "modules/ratingCalculator/utils/helpers";
import { useState } from "react";
import { ImageBox } from "utils/UI";
import BuildingsLevelInput from "../buildingsLevelInput/BuildingsLevelInput";
import { InputsGrid, Wrap } from "./BuildingItem.styled";

const BuildingItem = ({ building }) => {
  const [isActive, setIsActive] = useState(false);

  const { id, name, levels } = building;

  return (
    <div>
      <Wrap isActive={isActive}>
        <ImageBox picture={getImageData("buildings", name)} />
        <span>{name}</span>
      </Wrap>
      <InputsGrid>
        {Object.entries(levels).map(([level, data]) => (
          <div key={data.rating + level}>
            <BuildingsLevelInput
              id={id}
              level={level}
              quantity={data.quantity}
              setActive={setIsActive}
            />
          </div>
        ))}
      </InputsGrid>
    </div>
  );
};

export default BuildingItem;
