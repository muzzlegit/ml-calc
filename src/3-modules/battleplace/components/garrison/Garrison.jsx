import { FlexCenter } from "utils/styles/flexKit.styled";
import GarrisonUnitCard from "./particles/garrisonUnitCard/garrisonUnitCard";
import useGarrison from "./useGarrison.hook";

const Garrison = () => {
  const { unitsList, isActive } = useGarrison();

  return (
    <FlexCenter
      gap="6px"
      additionStyles={{
        transition: "opacity 350ms ease-in-out",
        pointerEvents: isActive ? "all" : "none",
        opacity: isActive ? 1 : 0.3,
      }}
    >
      {unitsList.map((unitName) => {
        return (
          <div key={unitName}>
            <GarrisonUnitCard unitName={unitName} />
          </div>
        );
      })}
    </FlexCenter>
  );
};

export default Garrison;
