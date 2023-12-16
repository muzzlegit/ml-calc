import { Selector } from "modules/UI";
import useRace from "./useRace.hook";

const RaceSelector = () => {
  const { race, options, handleRace } = useRace();

  return (
    <Selector
      title="Расса:"
      value={race}
      options={options}
      handleSelector={handleRace}
    />
  );
};

export default RaceSelector;
