import { getResourcesList } from "modules/ratingCalculator/utils/helpers";
import { Flex } from "utils/styles/flexKit.styled";
import ResourceItem from "./resourceItem/ResourceItem";

const ResoucesBar = () => {
  return (
    <Flex gap={8} additionStyles={{ flexWrap: "wrap" }}>
      {getResourcesList().map((resource) => {
        return (
          <div key={resource}>
            <ResourceItem resource={resource} />
          </div>
        );
      })}
    </Flex>
  );
};

export default ResoucesBar;
