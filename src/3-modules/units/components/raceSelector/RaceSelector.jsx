import { Selector } from "modules/UI";
import { useRace } from "modules/units/hooks";
import { RACE_NAMES } from "modules/units/utils/units.constants";
import { getRaceName } from "modules/units/utils/units.helpers";

const RaceSelector = () => {
  const { race, handleRace } = useRace();
  return (
    <Selector
      title="Расса:"
      value={getRaceName(race)}
      options={RACE_NAMES}
      handleSelector={handleRace}
    />
  );
};

export default RaceSelector;
