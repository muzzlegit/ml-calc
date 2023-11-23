import { UNITS } from "modules/units/utils/units.constants";
import UnitCard from "../unitCard/UnitCard";
import { Container } from "./Squad.styled";

const Squad = () => {
  console.log("Army");
  return (
    <Container>
      {UNITS.map((unit) => {
        return (
          <div key={unit}>
            <UnitCard unitName={unit} />
          </div>
        );
      })}
    </Container>
  );
};

export default Squad;
