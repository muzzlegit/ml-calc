import { Selector } from "modules/UI";
import { useRace } from "modules/units/hooks";
import { RACE } from "modules/units/utils/units.constants";

const RaceSelector = () => {
  const { race, handleRace } = useRace();

  return (
    <Selector
      title="Расса:"
      value={RACE[race]}
      options={RACE}
      handleSelector={handleRace}
    />
  );
};

export default RaceSelector;
