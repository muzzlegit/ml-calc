import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { UNITS } from "modules/units/utils/units.constants";
import { FlexCenter } from "utils/styles/flexKit.styled";
import GarrisonUnitCard from "../garrisonUnitCard/garrisonUnitCard";

const Garrison = () => {
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const isActive = battleplace === "castle";

  return (
    <FlexCenter
      gap="6px"
      additionStyles={{
        transition: "opacity 350ms ease-in-out",
        pointerEvents: isActive ? "all" : "none",
        opacity: isActive ? 1 : 0.3,
      }}
    >
      {UNITS.map((unitName) => {
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
