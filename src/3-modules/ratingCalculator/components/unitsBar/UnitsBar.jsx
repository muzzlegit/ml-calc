import { getUnitsList } from "modules/ratingCalculator/utils/helpers";
import { Flex } from "utils/styles/flexKit.styled";
import UnitItem from "./unitItem/UnitItem";

const UnitsBar = () => {
  return (
    <Flex gap={8} additionStyles={{ flexWrap: "wrap" }}>
      {getUnitsList().map((unit) => {
        return (
          <div key={unit}>
            <UnitItem unit={unit} />
          </div>
        );
      })}
    </Flex>
  );
};

export default UnitsBar;
