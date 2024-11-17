import { getImageData } from "modules/ratingCalculator/utils/helpers";
import { useState } from "react";
import { ImageBox } from "utils/UI";
import { ElementItem, LevelList, Wrap } from "./Element.styled";
import ElementInputs from "./particles/ElementInputs";

const Element = ({ element }) => {
  const [isActive, setIsActive] = useState(false);

  const { building, data } = element;

  return (
    <ElementItem>
      <Wrap isActive={isActive}>
        <ImageBox picture={getImageData("buildings", building)} />
        {element.building}
      </Wrap>
      <LevelList>
        {Object.keys(data).map((level) => (
          <li key={building + "_" + level}>
            <ElementInputs
              level={level}
              element={element}
              setActive={setIsActive}
            />
          </li>
        ))}
      </LevelList>
    </ElementItem>
  );
};

export default Element;
